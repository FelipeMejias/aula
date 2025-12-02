import { useLocation, useNavigate, useParams } from "react-router-dom"
import styled, { ThemeConsumer } from "styled-components"
import { useState } from "react"
import { useContext } from "react"
import MyContext from '../utils/context'

import Botao from "./Botao"
import Secoes from "./Secoes"
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
                <h4>{'<PC>'}</h4>
                <Secoes height={'calc(100% - 70px)'}/>
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
height:15px;
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
background-color:var(--menu);
`
const Janela=styled.div`
flex-direction:column;
position:absolute;
background-color:var(--menu);
height:100%;max-width:440px;
left:calc(50vw - 260px);
width:280px;
@media(max-width:440px){
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
h4{color:var(--h1Menu);
font-size:45px;margin:10px 0 0 0;width:100%;text-align:center;
font-family: "Roboto Mono", monospace;
}
`


