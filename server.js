const express = require("express");
const app = express();
const connection = require('./database/database')
const Cadastro = require('./database/Cadastro')

const upload = multer({dest:"uploads/"})

connection
    .authenticate()
    .then(()=>{
        console.log('Conexão feita com o banco de dados!')
    })
    .catch((msgErro) =>{
        console.log(msgErro)
    })

app.set('view engine', 'ejs')
app.use(express.static('public'));

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get("/", (req,res) => res.render('index'));

app.post("/fimcadastro", (req,res)=>{
    let nome = req.body.nome
    let sobrenome = req.body.sobrenome
    let sexo = req.body.sexo
    let email = req.body.email
    let idade = req.body.idade
    let cpf = req.body.cpf
    let formacao = req.body.formacao
    let tecnologia = req.body.tecnologia
    let cargo = req.body.cargo
    let resumo = req.body.resumo
    Cadastro.create({
        nome: nome,
        sobrenome: sobrenome,
        sexo: sexo,
        email: email,
        idade: idade,
        cpf: cpf,
        formacao: formacao,
        tecnologia: tecnologia,
        cargo: cargo,
        resumo: resumo
    }).then(()=>{res.redirect('/cadastrosalvo')}).catch((err)=>{console.log(err)})
})

app.get("/cadastrosalvo", (req,res)=> res.render('cadastrado'))

app.listen(8080);