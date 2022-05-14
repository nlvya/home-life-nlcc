const express = require('express');
const navigation = express.Router();
//authentication middleware
const {ensureAuthenticated} = require('../middleware/auth.js');
users = ['geddy', 'neil', 'alex'];

//home page
navigation.get('/', (req, res) => {
  res.render('pages/index')
})
//log in page
navigation.get('/login', (req, res) => {
  res.render('pages/login', {expressFlash: req.flash('error_msg')})
})

navigation.get('/resource', function(req, res) {
  res.render('pages/resource');
});

//ADMIN ROUTING
navigation.get('/adminHome', ensureAuthenticated, (req, res) => {
  res.render('pages/adminHome')
})
module.exports = navigation;