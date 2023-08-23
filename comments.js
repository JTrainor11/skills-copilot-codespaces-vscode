// create web server
// npm install express
// npm install body-parser
// npm install cors
// npm install nodemon
// npm install mongoose
// npm install uuid
// npm install dotenv
// npm install bcrypt
// npm install jsonwebtoken
// npm install express-validator

// import express
const express = require('express');
// import body-parser
const bodyParser = require('body-parser');
// import cors
const cors = require('cors');
// import mongoose
const mongoose = require('mongoose');
// import uuid
const uuid = require('uuid');
// import dotenv
const dotenv = require('dotenv');
// import bcrypt
const bcrypt = require('bcrypt');
// import jsonwebtoken
const jwt = require('jsonwebtoken');
// import express-validator
const { check, validationResult } = require('express-validator');

// create express app
const app = express();
// use body-parser
app.use(bodyParser.json());
// use cors
app.use(cors());

// use dotenv
dotenv.config();

// create database connection
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected"));

// create user model
const User = mongoose.model('user', new mongoose.Schema({
    id: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String
}));

// create post model
const Post = mongoose.model('post', new mongoose.Schema({
    id: String,
    title: String,
    content: String}) ) 