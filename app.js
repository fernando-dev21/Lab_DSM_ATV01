const express = require("express")
const app = express()

app.get("/",function(req,res){
    res.send("Seja bem vindo ao Node JS")
})

app.get("/cadastro/:nome/:sobrenome/:idade", function(req, res){
    res.send("Nome: " + req.params.nome + "<br>Sobrenome: " + req.params.sobrenome + "<br>Idade: " + req.params.idade) 
})

app.listen(8081, function(){
    console.log("Servidor rodando!")
})