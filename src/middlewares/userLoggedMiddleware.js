const User = require('../Models/user');

function userLoggedMiddleware (req, res, next) {
     res.locals.userLogged = false;
    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = User.findByField('email', emailInCookie);
    if(userFromCookie){
        req.session.userLogged = userFromCookie;
    }
    if(req.session.userLogged ){    
        res.locals.userLogged = true;
        res.locals.userLogged = req.session.userLogged.roles_id;    
    //  console.log('info del user res.locals.userLogged  ---->',  res.locals.userLogged) ;               
    }
    next();  
}

module.exports= userLoggedMiddleware;