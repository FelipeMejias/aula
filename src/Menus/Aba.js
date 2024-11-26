import { useLocation, useNavigate, useParams } from "react-router-dom"
import styled, { ThemeConsumer } from "styled-components"
import { useState } from "react"
import { useContext } from "react"
import menu from '../imgs/menu.png'
import MyContext from '../Componentes/context'
import js from '../imgs/js.png'
import re from '../imgs/react.png'
import nd from '../imgs/node.png'
import py from '../imgs/python.png'
import hc from '../imgs/html3.jpg'
import sq from '../imgs/sql.jpg'
import Botao from "./Botao"
export default function Aba(){
    const aluno=JSON.parse(localStorage.getItem('usuario'))||'sem-usuario'
    const navigate=useNavigate()
    const {pathname} = useLocation();
    const {aba,setAba}=useContext(MyContext)
    function navegar(path){
        setAba(false)
        navigate(path)
    }
    return (
        <Tudo>
            <Barrinha/>
            <Janela>
            <Folga>
                <BtVoltar onClick={()=>setAba(false)}>
                    <img src={menu}></img>
                </BtVoltar>
            </Folga>

                <Botao tex={'Linguagens'}  
                sel={pathname=='/conteudo'}
                path={`/conteudo`} />

                <h1>Cursos</h1>

                    <Botao tex={'Javascript'}  
                    sel={pathname.includes(`javascript`)}
                    path={`/conteudo/javascript`} img={js} />

                    <Botao tex={'Python'}  
                    sel={pathname.includes(`python`)}
                    path={`/conteudo/python`} img={py} />

                <h1>Meu Material</h1>

                    <Botao tex={'Arquivos de aulas'}  
                    sel={pathname.includes(`aulas`)}
                    path={`/aulas/${aluno}`} />
                 
                   {/*} <Botao tex={'Perguntas'}  
                    sel={pathname.includes(`ewe`)}
                    path={`/`} />*/}

                <h1>Agendamento</h1>

                    <Botao tex={'Horários Disponíveis'}  
                    sel={pathname.includes(`horarios`)}
                    path={`/agendar/${aluno}/horarios`} />
           </Janela>
           <Clicavel onClick={()=>setAba(false)}>

           </Clicavel>
        </Tudo>
    )
}
const Clicavel=styled.div`
width:50vw - 150px;height:100%;cursor:pointer;
`
const Folga=styled.div`
height:75px;
padding-left:20px;
`
const BtVoltar=styled.div`
cursor:pointer;
height:100%;background-color:;
display:flex;align-items:center;
justify-content:center;
img{height:80%;}
`

const Barrinha=styled.article`
width:calc(50vw - 250px);height:100%;
position:fixed;left:0;
background-color:#103134
`
const Janela=styled.div`
flex-direction:column;
position:absolute;
background-color:#35A5AD;
height:100%;width:350px;
left:calc(50vw - 250px);
h1{
    font-size:20px;margin:15px 0 0 30px;
    text-align: left;color:#084f54
}
@media(max-width:500px){
left:0;
}
`

const Tudo=styled.article`
position:fixed;
z-index:5;
width:100%;height:100%;
justify-content:center;
background-color:rgb(0,0,0,0.7);
@media(min-width:750px){
display:none;
}
`


