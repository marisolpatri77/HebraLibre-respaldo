const bcryptjs = require('bcryptjs');
const { validationResult} = require('express-validator'); //preguntar si esto es correcto
const user = require('../Models/user.js');

const controllerUsuarios = {
    register: (req, res) =>{
        res.render('register');
    },
    processRegister: (req,res) => {
        const resultValidation = validationResult (req);
        console.log('en el controlador')
console.log( resultValidation)

if (resultValidation && typeof resultValidation.error !== 'undefined') {
        if (resultValidation.error.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            }); 
        }} 
        let userInDB = user.findByField('email', req.body.email);
        if (userInDB) {
            return res.render('register', {
                errors:[ {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                }],

                oldData: req.body
        });

    }
    
        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password,10),
            avatar: req.file.image
        }

         let userCreated = user.create(userToCreate);

        return res.redirect('/login');
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

            let avatar = req.file ? req.file.path : '/img/default-avatar.jpg'; //probar si carga la imagen que viene en el req.body o si asigna la imagen por defecto
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
        res.render('login');
    },
    
    log: (req, res) =>{
        let userToLogin = user.findByField('email' , req.body.email);
        if (userToLogin){
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password)
           if(isOkThePassword ){
            delete userToLogin.password;
            req.session.userLogged = userToLogin;
              return res.render('profile',{user:userToLogin}); 
           }
           return res.render('login', {
            errors: {
            email: {
                msg: 'Las credenciales son invalidas'
            },
        }
    });
        }
        return res.render('login', {
            errors: {
            email: {
                msg: 'No existe este email en la base de datos'
            },
        }
    });
        
    },
    profile: (req,res) =>{
      return res.render ('profile', {
        user: req.session.userLogged
      });
    },

    logout: (req,res) =>{
        req.session.destroy();
        return res.redirect('/');
    },

    create: (req, res) =>{
        console.log('File en controller: ', req.file);

                
        const newUser = {
            id: crypto.randomUUID(),
            ...req.body,
            img: req.file.filename
        };
        res.redirect('/login')
    },

    error: (req, res) => {
        let errors = validaciones(req);
        if (errors.isEmpty()) {
            let usuarios = req.body;
        }
    }
}
    
module.exports = controllerUsuarios