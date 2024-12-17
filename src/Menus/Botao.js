import { useLocation, useNavigate, useParams } from "react-router-dom"
import styled, { ThemeConsumer } from "styled-components"
import { useState } from "react"
import { useContext } from "react"
import MyContext from '../utils/context'
import { RiQuestionnaireFill } from "react-icons/ri";
export default function Botao({sel,tex,img,path}){
    const aluno=JSON.parse(localStorage.getItem('usuario'))||'sem-usuario'
    const navigate=useNavigate()
    const {aba,setAba,setChecks}=useContext(MyContext)
    return (
        <Bt sel={sel} 
        onClick={()=>{
            setAba(false);
            
            navigate(path)
            const palavras=path.split('/')
            if(palavras[1]=='cursos'){
                setChecks(JSON.parse(localStorage.getItem(`check-${palavras[2]}`)))
            }
            }}>
            {img?<img src={img}/>:<></>}
            <p>{tex}</p>
            
        </Bt>  
    )}
const Bt=styled.div`
cursor:pointer;
background-color:${p=>!p.sel?'transparent':'#6c6d36'};
color:${p=>!p.sel?'white':'white'};
margin:8px 0px 0 0px;
border-radius:5px;
max-width:180px;
min-width:180px;
p{margin:5px;}
transition: background-color 0.2s ease;
img{
    height:25px;border-radius:5px;
    margin:3px 7px 3px 3px;
}
`

