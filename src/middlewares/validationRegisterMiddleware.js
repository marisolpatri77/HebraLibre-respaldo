const path = require('path');
const { body } = require('express-validator');
const bcryptjs = require('bcryptjs');

let validaciones = (req, res, next) => {
    const validaciones = [
        body('firstName').notEmpty().withMessage('Debes completar el campo').bail().isLength({ min: 3 }).withMessage('El nombre debe ser más largo'),
        body('lastName').notEmpty().withMessage('Debes completar el campo'),
        body('email').notEmpty().withMessage('Debes completar con un email').bail().isEmail().withMessage('Debes completar con un email valido'),
        body('password').notEmpty().withMessage('Debes completar el campo').bail().isLength({ min: 8 }).withMessage('La contraseña debe ser más larga'),
        body('image').optional()
    ];

    try {
        let file = req.file;

        if (!file) {
            // Si no se sube una imagen, asigna la imagen predeterminada
            req.file = { filename: 'default-avatar.jpg' }; 
        } else {
            let fileExtension = path.extname(file.originalname).toLowerCase(); //aca lo vuelve todo a minuscula para la extension
            let acceptedExtensions = ['.jpg', '.png', '.gif'];

            if (!acceptedExtensions.includes(fileExtension)) {
                return res.status(400).json({ error: `Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}` });
            }
        }
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }

    next();
}

module.exports = validaciones;
