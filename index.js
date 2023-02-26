
const express = require("express")
const app = express()
const bodyParser = require("body-parser");
const connection = require("./src/config/db.config")
const port =  process.env.PORT || 3000;

// CONTROLLERS
const categoriesController = require("./src/controllers/categories.controllers")
const articlesController = require("./src/controllers/articles.controllers")

// MODELS
const Article = require("./src/models/article.models")
const Category = require("./src/models/category.models")

// EJS
app.set('view engine','ejs')
app.set('views', __dirname + '/src/views');
app.use(express.static('public'))

// BOODY PARSER
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

// USE CONTROLLERS
app.use("/",categoriesController);
app.use("/",articlesController);


// ADMIN HOME
app.get("/admin", function(req,res){
    res.render('admin/index');
})


// HOME GAZETA DOS DEVS
app.get("/", function(req,res){
    Category.findAll().then(categories => {
        res.render('index', { categories });
    }).catch(error => {
        console.error(error);
        res.status(500).send('Ocorreu um erro ao buscar os usuários.');
    });
})


app.listen(port, function() { 
    console.log("Servidor rodando na http://localhost:" + port) 
})  