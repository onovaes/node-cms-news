const express = require("express")

const app = express()

const port =  process.env.PORT || 3000;

app.get("/", function(req,res){
    res.send('Hello Heroku! Tio Chegou')
})

app.get("/sobre/:nome", function(req,res){ 
    res.sendFile(__dirname + '/html/index.html')
    console.log(req.params.nome);
})

// Exemplo com queri string 
app.get("/ola", function(req,res){
    
    var nome = req.query.teste
    res.send('olahhh' + nome)
} )

app.listen(port, function() { console.log("Servidor rodando na http://localhost:"+port) })  