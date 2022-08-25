var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose= require('mongoose');
require('dotenv').config()
const routerEvents= require('./routes/stories.route.js')
const routerUsers= require('./routes/users.route.js')
const routerBlogs= require('./routes/blogs.route.js');


var app = express();
const cors= require("cors");
app.use (cors ({
    origin: "http://localhost:3000",
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('db connected')).catch(err=>console.log(err.message))

app.use('/api', routerEvents);
app.use('/api_user',routerUsers);
app.use('/api_blog',routerBlogs);

module.exports = app;
