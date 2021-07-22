const express = require ('express');
const engine = require ('ejs-mate')
const path = require ('path');
const morgan = require ('morgan');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');

//initialitazions
const server = express();
require('./database');
require('./passport/local-auth');

//settings
server.set('views',path.join(__dirname,'views'));
server.engine('ejs',engine);
server.set('view engine','ejs');





// server.set('port',process.env.Port || 3000);





//middlewares
server.use(morgan('dev'));
server.use(express.urlencoded({extended:false}));
server.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:false
}));
server.use(flash());
server.use(passport.initialize());
server.use(passport.session());

server.use((req,res,next)=>{
    server.locals.signupMessage = req.flash('signupMessage');
    server.locals.signinMessage = req.flash('signinMessage');
    
    server.locals.user = req.user;
    next();
});

//routes
server.use('/',require('./routes/routes'));

//static files

server.use(express.static(path.join(__dirname,'public')))

//starting server

server.listen((process.env.PORT || 3000), function(){
    console.log('server on port *:3000');
  });


// server.listen(server.get('port'),()=>{
//     console.log('server on port ',server.get('port'));
// });