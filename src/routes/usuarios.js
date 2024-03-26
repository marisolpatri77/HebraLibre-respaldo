const express = require('express');
let router = express.Router();
//const uploadFile = require ('../middleware/multerMiddleware);
const validaciones =require('../middlewares/validationRegisterMiddleware'); //preguntar si esta bien
const guestMiddleware = require('../middlewares/guestMiddleware');
let controllerUsuarios = require("../controllers/usuarios");
const authMiddleware = require('../middlewares/authMiddleware');



//validaciones
//const validaciones =[
//    body('firstName').notEmpty().withMessage('Debes completar el campo').bail().isLength({ min: 3}).withMessage('El nombre debe ser mas largo'),
//    body('lastName').notEmpty().withMessage('Debes completar el campo'),
//    body('email').notEmpty().withMessage('Debes completar con un email').bail().isEmail().withMessage('Debes completar con un email valido'),
//    body('password').notEmpty().withMessage('Debes completar el campo').bail().isLength({ min: 8}).withMessage('La contraseña debe ser mas larga'),
//    body('image').notEmpty().withMessage('Debes completar el campo')
//];


router.get('/register',guestMiddleware, controllerUsuarios.register);
router.post('/register', validaciones, controllerUsuarios.create); 

router.get('/login', guestMiddleware, controllerUsuarios.login);
router.post('/login', validaciones, controllerUsuarios.log); //proceso del login

router.get('/profile',authMiddleware, controllerUsuarios.profile);

router.get('/logout', controllerUsuarios.logout);


module.exports = router