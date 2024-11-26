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
export default function MenuPc(){
    const aluno=JSON.parse(localStorage.getItem('usuario'))||'sem-usuario'
    const navigate=useNavigate()
    const {pathname} = useLocation();
    const {aba,setAba}=useContext(MyContext)
    function navegar(path){
        setAba(false)
        navigate(path)
    }
    return (
        <Abafixa>
            <Folga>
            </Folga>

                <Botao tex={'Linguagens'} fixo={true} 
                sel={pathname=='/conteudo'}
                path={`/conteudo`} />

                <h1>Cursos</h1>

                    <Botao tex={'Javascript'} fixo={true} 
                    sel={pathname.includes(`javascript`)}
                    path={`/conteudo/javascript`} img={js} />

                    <Botao tex={'Python'} fixo={true} 
                    sel={pathname.includes(`python`)}
                    path={`/conteudo/python`} img={py} />

                <h1>Meu Material</h1>

                    <Botao tex={'Arquivos de aulas'} fixo={true} 
                    sel={pathname.includes(`aulas`)}
                    path={`/aulas/${aluno}`} />
                 
                    {/*<Botao tex={'Perguntas'} fixo={true} 
                    sel={pathname.includes(`ewe`)}
                    path={`/`} />*/}

                <h1>Agendamento</h1>

                    <Botao tex={'Horários Disponíveis'} fixo={true} 
                    sel={pathname.includes(`horarios`)}
                    path={`/agendar/${aluno}/horarios`} />

           </Abafixa>
    )
}
const Abafixa=styled.article`
flex-direction:column;

background-color:#35A5AD;
height:100%;width:350px;
h1{
    font-size:20px;margin:15px 0 0 30px;
    text-align: left;color:#084f54
}
@media(max-width:750px){
display:none;
}

`
const Folga=styled.div`
height:75px;
padding-left:20px;
`