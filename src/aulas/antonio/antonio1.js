import js from '../../imgs/js.png'
import nd from '../../imgs/node.png'
import re from '../../imgs/react.png'
import i1 from './a1/i1.png'
import i2 from './a1/i2.png'
import i3 from './a1/i3.png'
import i4 from './a1/i4.png'

import i5 from './a1/i5.png'
import i6 from './a1/i6.png'
import i7 from './a1/i7.png'
import i8 from './a1/i8.png'
import i9 from './a1/i9.png'

export const antonio1=[
{   
    titulo:'package.json',
    icone:nd,img:i1,texto:'',coment:[
'Adicionar o texto da 1ª linha',
'Adicionar o texto da 8ª linha e a vírgula no final da 7ª',
'Instalar as dependências: npm install express cors nodemon',
'Rodar o código: npm start'
    ]
},{
    titulo:'index.js',
    icone:nd,img:i2,texto:'/textos/antonio/a1/t2.txt'
},{
    titulo:'funcoes.js',
    icone:nd,img:i3,texto:'/textos/antonio/a1/t3.txt'
},{
    titulo:'cardapio.js',
    icone:nd,img:i4,texto:'/textos/antonio/a1/t4.txt'
},{
    titulo:'App.css',
    icone:re,img:i5,texto:'',coment:[
'Só colei o que estava no index.css',
'Instalar as dependências: npm install styled-components axios',
'Rodar o código: npm start'
    ]
},{
    titulo:'index.js',
    icone:re,img:i6,texto:'/textos/antonio/a1/t6.txt'
},{
    titulo:'App.js',
    icone:re,img:i7,texto:'/textos/antonio/a1/t7.txt'
},{
    titulo:'Item.js',
    icone:re,img:i8,texto:'/textos/antonio/a1/t8.txt'
},{
    titulo:'api.js',
    icone:re,img:i9,texto:'/textos/antonio/a1/t9.txt'
}
]



   /* {
        titulo:'função',
        icone:js,
texto:`
// Funcao e um bloco de codigo executado quando seu nome e chamado

 

// Criar funcao

function minhaFuncao(){
    console.log( "Fui chamada" )
}
 

// Chamar funcao

minhaFuncao()
    `},{
        titulo:'função-parâmetro',
        icone:js,
texto:`
// Os parametros sao escolhidos na criacao da funcao

// E sao passados na hora de chamar a funcao, a ordem importa

 

// Criar funcao

function compareOsDois( num1 , num2 ){

    if( num1 > num2 ){
        console.log( 'o primeiro e maior' )
    }else if( num1 == num2 ){
        console.log( 'sao iguais' )
    }else{
        console.log( 'o segundo e maior' )
    }
}

// Chamar funcao

compareOsDois( 7 , 5 )

compareOsDois( 4 , 4 )
        `
    },{
        titulo:'variáveis',
        icone:js,
texto:`
// Varaveis são criadas para guardarem um valor

// As 3 variáveis simples são:

 

// inteiro

const minhaQua_1_idade = 6

 

// string (palavra)

const minhaFruta = 'melancia'

 

// booleano (True ou False)

const statusAtivo = True
        `
    },{
        titulo:'condicionais',
        icone:js,
texto:`
// If executa o bloco de código caso a condicao seja True

// Esse bloco e definido pelo que tem 1 Tab a mais que ele

const qua_1_idade = 13

if( qua_1_idade > 10 ){
    console.log('maior que 10' )
    }
 

// Else if executa o bloco de código caso:

// Nao tenha entrado no bloco de cima & a condicao seja True

const qua_1_idade = 7

if( qua_1_idade > 10 ){
    console.log( 'maior que 10' )
}else if( qua_1_idade > 5 ){
    console.log( 'maior que 5' )
}
 

// Else executa o bloco de código caso todos os blocos derem False

const qua_1_idade = 7

if( qua_1_idade > 10 ){
    console.log( 'maior que 10' )
}else{
    console.log( 'menor ou igual a 10' )
}
        `
    },{
        titulo:'Funções dentro de funções',
        icone:js,
texto:`
function calcularMedia(p1,p2){
    const somaTotal=soma(p1,p2)
    const resposta=divide(somaTotal,2)
    return resposta
}

function soma(n1,n2){
    return n1+n2
}
function divide(n1,n2){
    return n1/n2
}

const notaDaP1=8
const notaDaP2=7

const media=calcularMedia(notaDaP1, notaDaP2 )

console.log(media)
        `
    },{
        titulo:'Componente React',
        icone:re,
        texto:`
import styled from "styled-components"

export default function Item({}){
    return(
        <Conteudo>

        </Conteudo>
    )
}
const Conteudo=styled.div'

'
        `
    },{
        titulo:'Rect-index.js',
        icone:re,
texto:`
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import styled from 'styled-components';
import Item from './Item';
import { getComidas } from './api';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

function App(){

  const [itens,setItens]=useState([])
/* Como nossos itens vem do back-end, temos que fazer uma variavel que pode mudar
para isso usamos useState, ele é escrito dessa forma:
const [nomeDaVariavel,funçãoQueMudaAVariavel]=useState(valorDaVariavelNoInicio)
Ou seja, ela começa vazia pois nao temos itens

  function buscarComidas(){
    const promise=getComidas()
    /* essa funçao getComidas é uma Função Assíncrona
    ela demora para receber sua resposta, pois vem do back-end
    colocamos ela na variavel promise, e escrevemos promise.then() para ser executado só quando a resposta chegar
    promise.then(res=>{
        //esse RES é tudo que vem do backend, a resposta que enviamos vem dentro de res.data
        setItens(res.data)
      //aqui estamos mudando a variavel item, definindo o novo valor como res.data
    })
  }
  useEffect(buscarComidas,[])
  /* para executar uma função logo que o site é iniciado, usamos useEffect, escrevemos assim:
  useEffect(funcaoQueSeraExecutada,[])
  return(
    <Container>
        {//itens é uma lista, existe uma função propria do javascript, a MAP que faz o seguinte:
        //faz uma nova lista, trocando cada item por uma nova coisa
        //no caso, ela pega o item e transforma em um componente react <Item />
        itens.map(item=><Item nome={item.nome} descricao={item.descricao} preco={item.preco}/>)}
      </Container>
  )
}
const Container=styled.div'
display:flex;flex-direction:column;align-items:center;
height:100vh;width:100vw;background-color:green;
overflow:auto;
'  
        
        `
    },{titulo:'React-Item.js',
    icone:re,    texto:`
import styled from "styled-components"

export default function Item({nome,descricao,preco}){
//Para inserirmos um pedaço de javascript dentro do html, usamos {}
    return(
        <Conteudo color={preco>20}>
            <h1>{nome}</h1>
            <p>{descricao}</p>
            <h6>{preco},00</h6>
        </Conteudo>
    )
}
const Conteudo=styled.div'align-items:center;display:flex;
flex-direction:column;
width:200px;height:150px;background-color:$ {props=>props.color?'white':'yellow'};
h1{margin:0}h2{margin:0}
h6{color:green;font-size:16px;margin:0}margin-bottom:20px;border-radius:15px;
'
/* explicação dessa linha: $ {props=>props.color?'white':'white'} 
Para inserirmos um pedaço de javascript dentro de uma string, usamos $ {}
E dentro é usado um ternario, que é um if/else reduzido, funciona assim:
CONDIÇÃO ? RESPOSTA1 : RESPOSTA2
Ou seja,
se a condição der True é usada a resposta1, se der False é usada a resposta2
        `
    },{
        titulo:'React- api.js',
        icone:re,
texto:`
import axios from "axios"

const api = axios.create({
  baseURL:'http://localhost:4000'
})
export const getComidas = async () => {
  return api.get('/comidas')
}
/* Nao se preocupe em entender esse arquivo, veja apenas que voce coloca a url do back-end
e coloca dentro de cada função o nome da rota igual o que voce escolheu no back-end: /comidas
        `
    },{titulo:'Node',
    icone:re,    texto:`
import cors from 'cors'
import Express, {json} from 'express'

const app=Express()
app.use(cors())
app.use(json())

const lista=[
    {nome:'Sorvete', descricao:'delicia gelada', preco:15},
    {nome:'Costela', descricao:'carnes boas', preco:18},
    {nome:'Guaraná', descricao:'mata a sede', preco:11},
    {nome:'Salada', descricao:'é fit', preco:54},
    {nome:'Agua', descricao:'é saudavel', preco:43}
]

app.get('/comidas',async(req,res)=>{
    res.status(200).send(lista)
})
const port =process.env.PORT||4000
app.listen(port,()=>console.log('listening on port 4000'))
`
    },*/