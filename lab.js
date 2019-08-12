/*
const getConnection = require('./getConnection')
const getObject = require('./getObject')
const insertObject = require('./insertObject')
const updateObject = require('./updateObject')
const Posting = require('./Posting')
const deleteObject = require('./deleteObject')
const getGeneric = require('./getGeneric')

getConnection(client => {
    console.log('Doing something...')
    client.end()
})

class Pessoa
{
    constructor(id = null, nome = null)
    {
        this.id = id
        this.nome = nome
    }
}

getObject(new Pessoa(1, null), res => {
    console.log(res)
})

getObject(new Pessoa(null, 'Inexistente'), res => {
    console.log(res)
})

getObject(new Pessoa(), res => {
    console.log(res)
})

class Aluno extends Posting
{
    constructor(id = null, nome = null, curso = null)
    {
        super()
        this.id = id
        this.nome = nome
        this.curso = curso
        this.setAuto('id')
        this.setKey('id')
    }
}

insertObject(new Aluno(null, 'Mauro', 'ADS'), resp => {
    resp.nome = 'Victor'
    updateObject(resp, resp => {
        console.log('Processo finalizado.')
    })
})

class Carro extends Posting
{
    constructor(id = null, marca = null, linha = null, modelo = null, ano_modelo = null)
    {
        super()
        this.id = id
        this.marca = marca
        this.linha = linha
        this.modelo = modelo
        this.ano_modelo = ano_modelo
        this.setAuto('id')
    }
}

let carros = []

const altera = () => {
    carros[0].ano_modelo = '2015'
    updateObject(carros[0], resp => {
        getObject(new Carro(carros[1].id), resp => {
            console.log(resp)
        })
    })
}

insertObject(new Carro(null, 'GM', 'Onix', '1.4 Flex', '2014'), resp => { 
    carros.push(resp) 
    insertObject(new Carro(null, 'GM', 'Celta', '1.0 Flex', '2009'), resp => { 
        carros.push(resp) 
        altera()
    })
})

class Filial extends Posting
{
    constructor(id = null, logradouro = null, endereco = null, numero = null, bairro = null)
    {
        super()
        this.id = id
        this.logradouro = logradouro
        this.endereco = endereco
        this.numero = numero
        this.bairro = bairro
        this.setAuto('id')
        this.setKey('id', 'logradouro', 'endereco', 'numero', 'bairro')
    }
}

let objeto = new Filial()

const callback = resp => {
     console.log(resp)
}

const update = (instance) => {
    updateObject(instance, resp => {
        getObject(new Filial(resp.id), callback)
    })
}

insertObject(new Filial(null, 'Rua', 'das Conchas', 10, 'Vila Aurora'), resp => {
    objeto.id = resp.id
    objeto.logradouro = resp.logradouro
    objeto.endereco = resp.endereco
    objeto.numero = resp.numero
    objeto.bairro = resp.bairro

    resp.logradouro = 'Avenida'
    resp.endereco = 'da Nação'
    resp.numero = 1012
    resp.bairro = 'Pátria Amada'
    update(resp)
})

class Conta extends Posting
{
    constructor(id = null, email = null, senha = null)
    {
        super()
        this.id = id
        this.email = email
        this.senha = senha
        this.setAuto('id')
        this.setKey('id', 'email')
    }
}

insertObject(new Conta(null, 'teste@teste.com', 'password01'), resp => {
    resp.senha = 'password02'
    updateObject(resp, resp => {
        getObject(new Conta(resp.id), resp => {
            console.log(resp)
        })
    })
})

class Livro extends Posting
{
    constructor(id = null, titulo = null, autor = null)
    {
        super()
        this.id = id
        this.titulo = titulo
        this.autor = autor
        this.setAuto('id')
        this.setKey('titulo')
    }
}

deleteObject(new Livro(5, 'titulo do livro', null), resp => {
    console.log(resp)
})

let query = 'select * from atleta'

getGeneric(query, null, resp => {
    console.log(resp)
})

query = 'select * from atleta where modalidade = $1'
let values = ['Futebol']

getGeneric(query, values, resp => {
    console.log(resp)
})

query = 'select * from atleta where modalidade in ($1, $2)'
values = ['Basquete', 'Poker']

getGeneric(query, values, resp => {
    console.log(resp)
})

let query = 'select * from atleta where modalidade = $1'
let values = ['Poker', 'Daniel Negreanu']

getGeneric(query, values, (resp, err) => {
    if(err)
    {
        throw err
    }
})
*/

/*
const orm = require('./index')

class Aluno extends orm.PostingClass
{
    constructor(id = null, nome = null, curso = null)
    {
        super()
        this.id = id
        this.nome = nome
        this.curso = curso
        Object.defineProperty(this, 'teste', {
            value: 'teste2',
            enumerable: false,
            configurable: true
        })
        this.setAuto('id')
        this.setKey('id')
    }
}

const aluno = new Aluno(null, 'Mauro', 'ADS')

console.log(aluno)
console.log(aluno.teste)

orm.getObject(aluno, (resp, err) => {
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log(resp)
        console.log(resp._Auto)
        console.log(resp.teste)
    }
})

*/

/*
const getObjects = require('./getObjects')

class Jogo
{
    constructor(id = null, nome = null)
    {
        this.id = id
        this.nome = nome
    }
}

getObjects(new Jogo(1, 'Uncharted'), (res, err) => {
    
    if (!err)
    {
        console.log(res)
    }
    
})
*/

/*
const getObjects = require('./getObjects')

class Jogo
{
    constructor(id = null, nome = null)
    {
        this.id = id
        this.nome = nome
    }
}

getObjects(new Jogo(), (res, err) => {
    
    if (!err)
    {
        console.log(res)
    }
    
})
*/

const getObjects = require('./getObjects')

class Pessoa
{
    constructor(id = null, nome = null)
    {
        this.id = id
        this.nome = nome
    }
}

getObjects(new Pessoa(null, 'Inexistente'), res => {
    console.log(res)
})
