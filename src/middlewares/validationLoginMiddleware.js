const { body } = require('express-validator');
const validateLogin = [
    body('email').notEmpty().withMessage('Debe completar este campo.').bail().isEmail().withMessage('Debe ingresar un email válido'),
    body('password').notEmpty().withMessage('Debe ingresar una contraseña.')
];

module.exports = {validateLogin};

