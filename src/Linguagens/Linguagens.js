import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import js from '../_imgs/js.png'
import re from '../_imgs/react.png'
import nd from '../_imgs/node.png'
import py from '../_imgs/python.png'
import sq from '../_imgs/sql.jpg'
export default function Linguagens({}){
    const navigate=useNavigate()
    const {aluno}=useParams()||'convidado'
    const rodagem=`As linguagens de rodagem são essenciais para qualquer programa. Reúnem as lógicas de programação e fazem o código funcionar. `
    const opcoes=[
        /*{
            passe:'html-css',
            area:'',
            titulo:'HTML + CSS',
            img:hc,
            desc:``
        },*/{
            passe:'react',
            area:'Front-End',
            usadas:'Utiliza: Javascript + HTML + CSS',
            titulo:'React',
            img:re,
            desc:`Constrói a interface vista pelo usuário nos sites. Dita onde cada informação deve ficar e seus estilos, além de fazer alterações na página. Pode se comunicar com o back-end.`
        },{
            passe:'node',
            area:'Back-End',
            usadas:'Utiliza: Javascript',
            titulo:'Node',
            img:nd,
            desc:`Recebe as requisições de dados vindas do front-end, busca a resposta e envia de volta. É um programa único que faz a comunicação entre os front-ends de cada usuario. Pode se comunicar com o banco de dados.`
        },{
            passe:'sql',
            area:'Banco de Dados',
            titulo:'SQL',
            img:sq,
            desc:`Faz a modelagem das tabelas. E recebe 'querys' do back-end para buscar, adicionar, alterar ou deletar itens de cada tabela.`
        },
    ]/*
    {
        passe:'javascript',
        area:'Rodagem',
        titulo:'Javascript',
        img:js,
        desc:rodagem
    },{
        passe:'python',
        area:'Rodagem',
        titulo:'Python',
        img:py,
        desc:rodagem
    },*/
    return (
        <Tudo>
                <main>
                    <Ope>
                        <Cab><h6>Rodagem</h6></Cab>
                        <Especial>
                            <Novo onClick={()=>navigate(`/cursos/javascript`)}>
                                <img src={js}/>
                                <article>
                                    <h1>Javascript</h1>
                                </article>
                            </Novo>
                            <Novo onClick={()=>navigate(`/cursos/python`)}>
                                <article>
                                    <h1>Python</h1>
                                </article>
                                <img src={py}/>
                            </Novo>
                        </Especial>
                        <p>{rodagem}</p>
                    </Ope>
                {opcoes.map(({usadas,titulo,area,img,desc,passe})=><Option 
                titulo={titulo} img={img} 
                desc={desc} area={area}
                usadas={usadas}
                func={()=>{navigate(`/cursos/${passe}`)}} />
                )}
                </main>
        </Tudo>
    )
}
function Option({titulo,img,desc,func,area,usadas}){
    const pequeno=titulo=='Python'||titulo=='Javascript'
    //onClick={func}
    const navigate=useNavigate()
    return(
        <Ope  tam={pequeno?48:100} max={pequeno?230:450}>
            <Cab>
                <h6>{area}</h6>
            </Cab>
            <Nov util={titulo=='React'} onClick={()=>{if(titulo=='React'){navigate(`/cursos/react`)}}}>
                <img src={img}/>
                <article>
                    <h1>{titulo}</h1>
                    <h2>{usadas}</h2>
                </article>
            </Nov>
            <p>{desc}</p>
        </Ope>
    )
}

const Ope=styled.div`
background-color:white;
width:${p=>p.tam}%;max-width:${p=>p.max}px;
min-height:150px;border-radius:10px;
flex-direction:column;
display:flex;cursor:pointer;
align-items:;
margin-top:15px;
h1{margin:0;font-size:16px;font-weight:500;}
h2{margin:0;font-size:14px;font-weight:300;color:#31330c;}

article{background-color:;
display:flex;flex-direction:column;
align-items:flex-start;
}

img{width:40px;margin:0 0px 0 0px}
`
const Nov=styled.div`
background-color:${p=>p.util?'#dbdbdb':'transparent'};
display:flex;align-items:center;
border-radius:5px;
    margin:15px 0 0 0;padding:7px;
     h1{margin:0 15px 0 15px;}
     h2{margin:0 15px 0 15px;}
`
const Novo=styled.div`
background-color:#dbdbdb;
display:flex;align-items:center;
border-radius:5px;
    margin:15px 0 0 0;
    padding:7px;
    h1{margin:0 15px 0 15px;}
`
const Especial=styled.div`
align-items:center;
background-color:;width:100%;
justify-content:space-between;
padding:0 10px 0 10px;
p{
font-size:14px;margin:5px 0 7px 0px;
}

`
const Cab=styled.div`
align-items:center;
background-color:#d9dbad;width:100%;
border-top-left-radius:10px;
border-top-right-radius:10px;
justify-content:space-between;
padding:0 10px 0 10px;
h6{
font-weight:400;
font-size:14px;margin:5px 0 7px 0px;
}
`

const Tudo=styled.div`
width:100%;height:100%;
flex-direction:column;
align-items:center;
div{
align-items:center;
}
p{
    font-size:15px;margin:20px 0 25px 0;
    width:90%;
}
    justify-content:space-evenly;
main{
    width:90%;max-width:450px;
    flex-direction:row;
    flex-wrap:wrap;
    display:flex;
    align-items:center;
    background-color:;
    justify-content:space-between;
    padding-bottom:30px;box-sizing:border-box;
}
@media(min-width:750px){
height:100%;
}
`
const Resto=styled.div`
width:100%;height:calc(100% - 75px);
flex-direction:column;
flex-wrap:wrap;
overflow:auto;
display:flex;
align-items:center;
background-color:;

`