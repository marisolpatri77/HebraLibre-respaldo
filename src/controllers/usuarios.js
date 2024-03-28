const {hashSync, compareSync} = require('bcryptjs');
const {validaciones, validationResult} = require('express-validator'); //preguntar si esto es correcto
//const { all } = require('../routes/usuarios');
const user = require('../Models/user.js');



const controllerUsuarios = {
    register: (req, res) =>{
        res.render('register');
    },
    processRegister: (req,res) => {
        const resultValidation = validationResult (req);

        if (resultValidation.error.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            }); //ver de donde saco el userregiterform
        }
        let userInDB = user.findByField('email', req.body.email);
        if (userInDB) {
            return res.render('register', {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },

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
              return res.redirect('/usuarios/profile'); 
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