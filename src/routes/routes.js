const express = require ('express')
router = express.Router();
const passport = require('passport');

router.get('/',(req,res,next)=>{
    res.render('index',{title:'Home'});
});

//SIGN UP
router.get('/signup',(req,res,next)=>{
    res.render('signup',{title:'Signup'});
});

router.post('/signup', passport.authenticate('local-signup',{
    successRedirect:'/profile',
    failureRedirect:'/signup',
    passReqToCallback:true
}));

//SIGN IN
router.get('/signin',(req,res,next)=>{
    res.render('signin',{title:'Signin'});
});
router.post('/signin', passport.authenticate('local-signin',{
    successRedirect:'/profile',
    failureRedirect:'/signin',
    passReqToCallback:true
}));

//LOG OUT
router.get('/logout',(req,res,next)=>{
    req.logout();
    res.redirect('/')
})



// router.use((req,res,next)=>{
//     isAuthenticated(req,res,next);
//     next();
// })

function isAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}

router.get('/profile',isAuthenticated,(req,res)=>{
    res.render('profile',{title:'Profile'});
})


router.get('/calas',(req,res,next)=>{
    res.render('calas',{title:'Calas'});
});

router.get('/rios',(req,res,next)=>{
    res.render('rios',{title:'Rios'});
});

router.get('/productos',(req,res,next)=>{
    res.render('productos',{title:'Productos'});
});

module.exports = router;