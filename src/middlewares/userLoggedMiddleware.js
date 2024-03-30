function userLoggedMiddleware (req, res, next) {
  
    res.locals.userLogged = false;
    if(req.session.userLogged ){
     
        res.locals.userLogged = true;
        res.locals.userLogged = req.session.userLogged ;
       
    }
    next();

    
}

module.exports= userLoggedMiddleware;