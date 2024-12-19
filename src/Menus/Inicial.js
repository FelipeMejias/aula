import { useNavigate, useParams } from "react-router-dom"
import styled, { ThemeConsumer } from "styled-components"
import { useContext, useState } from "react"
import MyContext from '../utils/context'
import Secoes from "./Secoes"
export default function Inicial(){
    const aluno=JSON.parse(localStorage.getItem('usuario'))||'sem-usuario'
    const navigate=useNavigate()
    const {aba,setAba}=useContext(MyContext)
    return (
        <Tudo>
            <Meio>
                <Folga/>
                <Secoes align={true}/>
            </Meio>
        </Tudo>
    )
}

const Folga=styled.div`
height:15px;
`
const Meio=styled.div`
max-width:440px;
`
const Tudo=styled.div`
position:fixed;
width:100vw;height:100vh;
top:0;left:0;
justify-content:center;
background-color:#35A5AD;

`