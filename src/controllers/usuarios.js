const {hashSync, compareSync} = require('bcryptjs');
const { validationResult } = require('express-validator'); //preguntar si esto es correcto
//const { all } = require('../routes/usuarios');
const user = require('../Models/user.js');
const bcryptjs = require('bcryptjs');
const data = require('../Models/users.json');


const controllerUsuarios = {
    register: (req, res) =>{

        return res.render('register');
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

            res.render('register', {
                errors : resultValidation.mapped(),
                oldData: req.body,
            });
        } else {
            let userInDB = user.findByField('email', req.body.email);

            if (userInDB) {
                return res.render('register', {
                        errors: {
                            email: {
                                msg: 'Este email ya está registrado.'
                            }
                        },
                        oldData: req.body 
                });
            }

            let avatar = req.file ? req.file.filename : 'default-avatar.jpg'; //probar si carga la imagen que viene en el req.body o si asigna la imagen por defecto
            let nuevoId = controllerUsuarios.generateId().toString();

            let userToCreate = {
                id: nuevoId,
                ...req.body,
                password: bcryptjs.hashSync(req.body.password,10),
                avatar: avatar
            }
        
            let userCreated = user.create(userToCreate);
                
            return res.redirect('login');
        }
        
    },

    login: (req, res) =>{
        console.log(req.cookies);
        res.render('login');
    },
    
    log: (req, res) =>{
   
       
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0){
            res.render('login', {
                errors : resultValidation.mapped(),
            });
        } else{

            let userToLogin = user.findByField('email' , req.body.email);

            if (userToLogin){

                let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password)

                if(isOkThePassword ){
                    delete userToLogin.password;
                    req.session.userLogged = userToLogin;
                
                if(req.body.recordar){
                    res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60)*2});
                }



                    return res.redirect('/usuarios/profile');

                   

                }else{

                    return res.render('login', {
                        errors: {
                            email: {
                                msg: 'Las credenciales son inválidas'
                            },
                        }
                    });
                }
            }else{
                
                return res.render('login', {
                    errors: {
                        email: {
                            msg: 'No existe este email en la base de datos'
                        },
                        
                    },
                    oldData: req.body 
                });
            }
            
        }  
    },
    profile: (req,res) =>{

      return res.render ('profile', {
        user: req.session.userLogged
      });
    },

    logout: (req,res) =>{
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
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
    }
}
    
module.exports = controllerUsuarios