const { body } = require('express-validator');

console.log(' INGRESO info del middleware validationLoginMiddleware');

const validateLogin = [
    body('email').notEmpty().withMessage('Debe completar este campo.').bail().isEmail().withMessage('Debe ingresar un email válido'),
    body('password').notEmpty().withMessage('Debe ingresar una contraseña.')
];
// console.log('SALIDA info del middleware validationLoginMiddleware');
// console.log('SALIDA info --->', existingUser);

module.exports = {validateLogin};

