const path = require('path');
const { body } = require('express-validator');
const bcryptjs = require('bcryptjs');

const validateUser = [
    body('firstName').notEmpty().withMessage('Debes completar el campo.').bail().isLength({ min: 3 }).withMessage('El nombre debe ser más largo'),
    body('lastName').notEmpty().withMessage('Debes completar el campo.'),
    body('category').notEmpty().withMessage('Debes elegir una categoría.'),
    body('email').notEmpty().withMessage('Debes completar con un email.').bail().isEmail().withMessage('Debes completar con un email válido'),
    body('password').notEmpty().withMessage('Debes completar el campo.').bail().isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres.'),
    body('avatar').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = [ '.jpg', '.png', '.gif'];

        if(!file) {
            return true;
        }else{
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extensiones de arhivos permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }

        return true;
    })
   
];

module.exports = {
    validateUser
};

