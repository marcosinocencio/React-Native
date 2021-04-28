function saudacao(nome) {
    return function name(req, res, next) {
        console.log(`Seja bem vindo ${nome}`)
        next()
    }
}

module.exports = saudacao