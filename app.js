const express = require('express');
const app = express();

//middleware
app.use(express.json())
require('dotenv').config()
const session = require('express-session');
const passport = require('passport');
require('./middleware/Passport.js')(passport)
// important packages
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json({ limit: '16MB' }));
app.use(express.urlencoded({ extended: false }));
// app.use(session()); // session middleware
app.use(require('flash')());
 
app.use((req, res, next) => {
    // flash a message
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
})

app.use(express.json());
// set the view engine to ejs
app.set('view engine', 'ejs');

app.use("/styles",express.static(__dirname + "/views/styles"));
app.use("/scripts",express.static(__dirname + "/views/scripts"));
app.use("/assets",express.static(__dirname + "/views/assets"));

app.use('/', require('./routes/navigation'))
app.use('/api/v1/resources', require('./routes/resourceRoutes'));
app.use('/api/v1/user', require('./routes/loginRoutes.js'))

const connectDB = require('./db/connect');
const populateProducts = require('./populate');

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        // await populateProducts()
        app.listen(port, console.log(`server is listening on port ${port}`));
    } catch (error) { console.log(error) }
}
start();