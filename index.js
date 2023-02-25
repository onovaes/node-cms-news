
const express = require("express")
const app = express()
const bodyParser = require("body-parser");

const port =  process.env.PORT || 3000;

app.set('view engine','ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())




// HOME
app.get("/", function(req,res){
    res.render('index')
})

// ADMIN
app.get("/admin", function(req,res){
    res.render('admin/index')
})

// ADMIN
app.post("/admin/salvar-noticia", function(req,res){
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    
    res.send('titulo: ' + titulo + ' <Br>----descricao: '+ descricao)
})


app.listen(port, function() { 
    console.log("Servidor rodando na http://localhost:"+port) 
})  