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

try{

    let file = req.file;
   
if (!file) {
    throw new Error('Tienes que subir una imagen');
} else {
    let fileExtension = path.extname(file.originalname);
    let acceptedExtensions = ['.jpg', '.png', '.gif'];

    if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error (`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')} `);
    }
}
} catch (error){

return res.status(400).json({ error: error.message });
}
next();
}
module.exports= validaciones;