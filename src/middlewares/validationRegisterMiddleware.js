const path = require('path');
const {body} = require('express-validator');

let validaciones = (req,res,next)=>{
const validaciones = [
    body('firstName').notEmpty().withMessage('Debes completar el campo').bail().isLength({ min: 3}).withMessage('El nombre debe ser mas largo'),
    body('lastName').notEmpty().withMessage('Debes completar el campo'),
    body('email').notEmpty().withMessage('Debes completar con un email').bail().isEmail().withMessage('Debes completar con un email valido'),
    body('password').notEmpty().withMessage('Debes completar el campo').bail().isLength({ min: 8}).withMessage('La contraseña debe ser mas larga'),
    body('image').notEmpty().withMessage('Debes completar el campo')
];

let file = req.file;
let acceptedExtensions = ['.jpg', '.png', '.gif'];

if (file) {
    throw new Error('Tienes que subir una imagen');
} else {
    let fileExtension = path.extname(file.image);
    if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error (`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')} `);
    }
}
return true;
}
module.exports= validaciones;