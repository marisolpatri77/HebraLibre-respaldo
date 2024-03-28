const path = require('path');
const { body } = require('express-validator');

const validateProduct = [
    body('title').notEmpty().withMessage('Debes completar este campo.'),
    body('colors').notEmpty().withMessage('Debes completar este campo.'),
    body('category').notEmpty().withMessage('Debes elegir una categoría.'),
    body('price')
        .notEmpty().withMessage('Debes completar este campo.').bail()
        .isNumeric().withMessage('El precio debe ser un número.'),
    body('descuont')
        .notEmpty().withMessage('Debes completar este campo.').bail()
        .isNumeric().withMessage('El descuento debe ser un número.').bail()
        .isInt().withMessage('El número debe ser entero'),
    body('descripcion').notEmpty().withMessage('Debes completar este campo.'),
    body('img').custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = [ '.jpg', '.png'];

        if(!file) {
            throw new Error('Debes subir una imágen.');
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
    validateProduct
};
