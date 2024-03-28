const express = require('express');
let router = express.Router();
//const uploadFile = require ('../middleware/multerMiddleware);
const validaciones = require('../middlewares/validationRegisterMiddleware'); //preguntar si esta bien
const guestMiddleware = require('../middlewares/guestMiddleware');
let controllerUsuarios = require("../controllers/usuarios");
const authMiddleware = require('../middlewares/authMiddleware');

const upload = require('../middlewares/user-avatar.js');




router.get('/register', guestMiddleware, controllerUsuarios.register);
router.post('/register', upload.single('avatar'), validaciones, controllerUsuarios.create);

router.get('/login', guestMiddleware, controllerUsuarios.login);
router.post('/log', validaciones, controllerUsuarios.log); //proceso del login

router.get('/profile', authMiddleware, controllerUsuarios.profile);

router.get('/logout', controllerUsuarios.logout);


module.exports = router