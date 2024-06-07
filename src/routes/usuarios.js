const express = require('express');
let router = express.Router();
//const uploadFile = require ('../middleware/multerMiddleware);
const guestMiddleware = require('../middlewares/guestMiddleware');
let controllerUsuarios = require("../controllers/usuarios");
const authMiddleware = require('../middlewares/authMiddleware');


const upload = require('../middlewares/user-avatar.js');

const { validateUser } = require('../middlewares/validationRegisterMiddleware');
const { validateLogin } = require('../middlewares/validationLoginMiddleware');


router.get('/register', controllerUsuarios.register);
router.post('/register',upload.single('avatar'), validateUser, controllerUsuarios.processRegister)


router.get('/login',guestMiddleware, controllerUsuarios.login);
console.log('info de ruta login ');
 router.post('/log', validateLogin, controllerUsuarios.log)



router.get('/profile', authMiddleware, controllerUsuarios.profile);
router.get('/edit/:id', controllerUsuarios.edit);
router.post('/editUser/:id',upload.single('avatar'), validateUser, controllerUsuarios.editUser);

router.get('/deleteUser/:id', controllerUsuarios.deleteUser);
router.post('/delete/:id',upload.single('avatar'), validateUser,controllerUsuarios.delete);


router.get('/logout', controllerUsuarios.logout);
router.get('/prueba', controllerUsuarios.prueba);

 //api User

module.exports = router