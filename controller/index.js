const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const route = express.Router();

const {User, Product} = require('../model');

const user = new User();

const product = new Product();

route.get("^/$|/nu'eed", (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
})