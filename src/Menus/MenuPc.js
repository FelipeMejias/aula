import { useLocation, useNavigate, useParams } from "react-router-dom"
import styled, { ThemeConsumer } from "styled-components"
import { useState } from "react"
import { useContext } from "react"
import MyContext from '../utils/context'
import Botao from "./Botao"
import Secoes from "./Secoes"
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
            <Secoes/>
           </Abafixa>
    )
}
const Abafixa=styled.article`
flex-direction:column;
align-items:center;
color:white;
background-color:#999b57;
height:100%;

max-width:260px;
width:260px;
@media(max-width:750px){
display:none;
}

`
const Folga=styled.div`
height:15px;
padding-left:20px;
`