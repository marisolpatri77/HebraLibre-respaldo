const { body } = require('express-validator');


const validateLogin = [
    body('email').notEmpty().withMessage('Debe completar este campo.').bail().isEmail().withMessage('Debe ingresar un email válido') .custom(async (email) => {
        const existingUser = await User.findOne({ email: email });
        if (!existingUser) {
          throw new Error('El email no está registrado');
        }
        return true;
      }),
    body('password').notEmpty().withMessage('Debe ingresar una contraseña.')
];


module.exports = {validateLogin};
