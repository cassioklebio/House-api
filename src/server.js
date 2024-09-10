const express = require('express')
const MongoClient = require('mongodb').MongoClient
const app = express()


//aqui vai a URI de sua conexão(que você pega no mongo atlas)
const uri = 'mongodb+srv://cassiotr2009:t2r2z31n1@devhouse.abzdy.mongodb.net/?retryWrites=true&w=majority&appName=devHouse'


//iniciando servidor
app.listen(3333, () => {
    console.log('Rodando na porta 3333')
    //colocamos aqui dentro do listen, para poder fazer a conexão com banco de dados assim que iniciarmos o nosso servidor
    MongoClient.connect(uri, {
        
    }, (err, response) => {
        if (err) throw err
        console.log('Conectado') //retorna um 'conectado' no console caso a conexão dê certo
    })
})