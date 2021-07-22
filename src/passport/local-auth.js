passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user.js');

passport.serializeUser((user,done)=>{
    done(null,user.id);
});

passport.deserializeUser(async(id,done)=>{
    const user = await User.findById(id);
    done(null,user);
});

passport.use('local-signup',new LocalStrategy({
    usernameField:'email',
    passwordField:'password',
    passReqToCallback:true

},async(req,email,password,done)=>{
    const user = await User.findOne({email:email});
    if (user){
        return done (null,false,req.flash('signupMessage','El email ya esta siendo usado'));
    
        
    }else{
        if (password.length>5){
            const newUser = new User();
            newUser.email = email;
            newUser.password = newUser.encryptPassword(password);
            await newUser.save()
            done(null,newUser);
        }else{
            return done (null,false,req.flash('signupMessage','La contraseña no puede ser inferior a 5 carácteres'));
        }
        
    }
    
}));

passport.use('local-signin',new LocalStrategy({
    usernameField:'email',
    passwordField:'password',
    passReqToCallback:true
},async(req,email,password,done)=>{

    const user = await User.findOne({email:email});
    if (!user){
        return done (null,false,req.flash('signinMessage','El email no esta registrado'));
    }
    if(!user.comparePassword(password)){
        return done (null,false,req.flash('signinMessage','Contraseña incorrecta'));
    }
    return done(null,user);
}));