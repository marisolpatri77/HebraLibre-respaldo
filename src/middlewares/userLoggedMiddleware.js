const User = require('../Models/user');

function userLoggedMiddleware (req, res, next) {
     res.locals.userLogged = false;
    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = User.findByField('email', emailInCookie);
    console.log('info del user userFromCookie  ---->',  userFromCookie ) ;    
    if(userFromCookie){
        req.session.userLogged = userFromCookie;
    }
    if(req.session.userLogged ){    
        res.locals.userLogged = true;
        res.locals.userLogged = req.session.userLogged   
    console.log('info del user res.locals.userLogged  ---->',  res.locals.userLogged) ;               
    }
    next();  
}

module.exports= userLoggedMiddleware;