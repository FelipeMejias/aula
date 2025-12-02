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
            <h4>Portal Code</h4>
            <Secoes height={'calc(100% - 70px)'}/>
           </Abafixa>
    )
}
const Abafixa=styled.article`
flex-direction:column;
align-items:center;
color:white;
background-color:var(--menu);
height:100%;
h4{color:white;
font-size:26px;margin:10px 0 20px 0;width:100%;text-align:center;
font-family: "Audiowide", sans-serif;
}

width:260px;max-width:260px;
@media(max-width:750px){
display:none;
}

`
