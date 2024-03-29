const express = require('express');
let router = express.Router();
//const uploadFile = require ('../middleware/multerMiddleware);
const guestMiddleware = require('../middlewares/guestMiddleware');
let controllerUsuarios = require("../controllers/usuarios");
const authMiddleware = require('../middlewares/authMiddleware');


const upload = require('../middlewares/user-avatar.js');

const { validateUser } = require('../middlewares/validationRegisterMiddleware');
const { validateLogin } = require('../middlewares/validationLoginMiddleware');


router.get('/register', guestMiddleware, controllerUsuarios.register);
router.post('/register', upload.single('avatar'), validateUser, controllerUsuarios.processRegister);

router.get('/login', guestMiddleware, controllerUsuarios.login);

router.post('/log', validateLogin, controllerUsuarios.log); //proceso del login

router.post('/log', controllerUsuarios.log); //proceso del login

router.get('/profile', authMiddleware, controllerUsuarios.profile);

router.get('/logout', controllerUsuarios.logout);


module.exports = router