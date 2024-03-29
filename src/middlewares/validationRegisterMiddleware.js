const path = require('path');
const {body,validationResult}=require('express-validator');
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

let validaciones = (req,res,next)=>{
    console.log(' lo que llega al middleware',req.body);

    if (!req.file) {
        return res.render('register', {
            errors: [{ msg: 'Debe seleccionar una imagen' }],
            old: req.body
        });
    }
    validations =[
        body('firstName').notEmpty().withMessage('Debe ingresar nombre'),
        body('lastName').notEmpty().withMessage('debe ingresar apellido'),
        // body('img').notEmpty().withMessage('debe seleccionar imagen'),
        body('email').isEmail().withMessage('debe ingresar email valido'),
        body('password').trim().notEmpty().isLength({ min: 3})
    ];
    Promise.all(validations.map(validation => validation.run(req)))
    .then(() => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // return res.status(400).json({ errors: errors.array() });
            return res.render('register',{errors: errors.array() , old: req.body});            
        }
        next();
    })
    .catch(next); 
}

