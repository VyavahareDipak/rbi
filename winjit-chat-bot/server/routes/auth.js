
const express = require('express');

const authRoute = express.Router();

const {signUp , login } = require('../controller/auth');

// routes for login and signup
authRoute.post('/signup' , signUp);
authRoute.post('/login' , login);

module.exports={authRoute}