
const {hashSync, compareSync} = require('bcryptjs');
const { validationResult } = require('express-validator'); 
//const { all } = require('../routes/usuarios');
const user = require('../Models/user.js');
const bcryptjs = require('bcryptjs');
// const data = require('../Models/users.json');
const db = require('../database/models');
const {Op} = require("sequelize");

const controllerUsuarios = {
    register: (req, res) =>{
        db.Rol.findAll()
        .then((roles)=>{
              res.render('register',{rol:roles})
        }).catch((e) =>{
            console.log('register:catch '+ e);
        });    
    },
    log:(req,res)=>{           
        db.User.findAll({
            where: {
                email:req.body.email
            }
        })
          .then((response)=>{
            
            if (response.length > 0) { 
                let user = response[0]
                let okPassw= bcryptjs.compareSync(req.body.password, user.password)
                
                if(okPassw){
                    delete  user.password    
                    req.session.userLogged = user;
                    if(req.body.recordarEmail){
                        res.cookie('userEmail', req.body.email,{maxAge:(1000*60)*2})
                    }   
                          
                 return res.redirect('/usuarios/profile');       
                   
                }else{              
                    return res.render('login', {
                        errors: {
                           password: {
                                msg: 'El password es incorrecto'
                            },
                            oldData: req.body
                        }                         
                 });
                }
            }else{
                return res.render('login', {
                    errors: {
                        email: {
                            msg: 'No se encuentra email en base de datos.'
                        }
                    }                    
             });
            }
            }).catch(err => {
                console.log(err)
              })
    },
    generateId:()=>{  
        let lastUser = data[data.length - 1];
        if(lastUser){
            let nextId = parseInt(lastUser.id, 10) + 1;
        return nextId; 
        }
        return 1;
    },
    processRegister: (req,res) => {
       
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0){
            db.Rol.findAll() 
             .then((roles) => {
                    res.render('register', {
                    errors : resultValidation.mapped(),
                    oldData: req.body,
                    rol: roles
                 });
              }).catch((e) => {
                console.log('register:catch ' + e);
            });
        } else {
            db.User.findAll({
                where: {
                  email: req.body.email
                }
              })
              .then((user) => {
                db.Rol.findAll() 
                .then((rol)=>{
                if(user.length > 0){
                    return res.render('register', {
                        errors: {
                            email: {
                                msg: 'Este email ya está registrado.'
                            }
                        },
                        oldData: req.body,
                        rol: rol       
                 });
                }else{
                    db.User.create({
                        first_name: req.body.firstName,
                        last_name: req.body.lastName,
                        email: req.body.email, 
                        password:bcryptjs.hashSync(req.body.password,10),
                        roles_id: req.body.category,
                        image: req.file.filename
                          }).then((a) =>{
                              return res.redirect('/usuarios/login');
                            }).catch((e) =>{
                                   console.log('en el promise del catch '+ e);
                                });
                   }  
                }) 
                   
              }).catch(error => {
                return  console.error('Error al recuperar usuarios:', error);
              });       
        }    
    },
    login: (req, res) =>{     
        res.render('login');
    },
    logout: (req,res) =>{
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    },
    edit: (req, res) =>{     

       db.User.findByPk(req.params.id)
        .then((user)=>{    
            db.Rol.findAll()
                .then((roles)=>{
                     res.render('editUser',{user:user,rol:roles})
            })
            .catch(error => {
                console.log(error);
                res.send('Error al cargar roles');
            });
       })   
    },
    editUser: (req, res) =>{  
        
        db.User.findByPk(req.params.id) 
            .then((user)=>{
                db.User.update({
                    first_name: req.body.firstName,
                    last_name: req.body.lastName,
                    email: req.body.email, 
                    password:bcryptjs.hashSync(req.body.password,10),
                    roles_id: req.body.category,
                    image: req.file.filename
                },{
                  where:{
                    id:req.params.id
                   }  
                })
                return res.redirect('/usuarios/edit/'+ req.params.id);
            }).catch(error => {
                console.log(error);
                res.send('Error al cargar roles');
            });       
    },
    deleteUser: (req, res) =>{     
        db.User.findByPk(req.params.id)
        .then((user)=>{    
            db.Rol.findAll()
                .then((roles)=>{
                     res.render('deleteUser',{user:user,rol:roles})
            })
            .catch(error => {
                console.log(error);
                res.send('Error en metodo deleteUser');
            });
       })  
    },
    delete: (req, res) =>{           
        db.User.findByPk( req.params.id)
        .then((user)=>{
          user.destroy({
                where: {
                  id: req.params.id,
                },
              });         
        }).catch(error => {
            console.log(error);
            res.send('Error al cargar roles');
        }); 
        return res.redirect('/usuarios/logout');
    },
    
    profile: (req,res) =>{

      return res.render ('profile', {
        user: req.session.userLogged
      });
    },
    create: (req, res) =>{
               
        const passHash = hashSync(req.body.password, 10)                 
        const newUser = {
            id: crypto.randomUUID(),
            ...req.body,
            password: passHash,
            img: req.file.filename
        };
        res.redirect('/')
    },
    error: (req, res) => {
        let errors = validaciones(req);
        if (errors.isEmpty()) {
            let usuarios = req.body;
        }
    },
    prueba:(req, res) => {
           db.User.findAll({include:['Rol']})
           .then(usuarios => res.send(usuarios))
           .catch(error => res.send(error))
    }
}
    
module.exports = controllerUsuarios