const express = require('express')
const app = express()
const saudacao = require('./saudacaoMid')
const { json, urlencoded, text } = require('body-parser')
const usuarioApi = require('./api/usuario')
require('./api/produto')(app, 'com param')

app.post('/usuario', usuarioApi.salvar )
app.get('/usuario', usuarioApi.obter)

app.use(text())
app.use(json())
app.use(urlencoded({extended: true}))
app.use(saudacao('Vinicius'))

app.use('/opa', (req, res, next) => {
    console.log('Antes')
    next()
})

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function (parte) {
    //     corpo += parte
    // })

    // req.on('end', function () {
    //     res.send(corpo)
    // })
    res.send(JSON.stringify(req.body))
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Clente ${req.params.id} selecionado`)
})


app.get('/opa', (req, res, next) => {
    console.log('Durante...')
    res.json([
        { id: 1, nome: 'Carlos', idade: 21 },
        { id: 2, nome: 'Bia', idade: 31 },
        { id: 3, nome: 'Lola', idade: 43 },
    ])

    next()

    // res.send('<h1>Estou bem<h1/>')
    // res.json({
    //     name: 'PS4 Slim',
    //     price: 2500,
    //     discount: 0.12
    // })
})

app.use('/opa', (req, res) => {
    console.log('Depois')
})



app.listen(3000, () => {
    console.log('Backend executando...')
})
