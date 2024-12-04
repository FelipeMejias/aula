import { useLocation, useNavigate, useParams } from "react-router-dom"
import styled, { ThemeConsumer } from "styled-components"
import { useState } from "react"
import { useContext } from "react"
import MyContext from '../utils/context'
import { RiQuestionnaireFill } from "react-icons/ri";
export default function Botao({sel,tex,img,path}){
    const aluno=JSON.parse(localStorage.getItem('usuario'))||'sem-usuario'
    const navigate=useNavigate()
    const {aba,setAba}=useContext(MyContext)
    return (
        <Bt sel={sel} 
        onClick={()=>{setAba(false);navigate(path)}}>
            {img?<img src={img}/>:<></>}
            <p>{tex}</p>
            
        </Bt>  
    )}
const Bt=styled.div`
cursor:pointer;
background-color:${p=>!p.sel?'#278389':'#096368'};
color:white;
margin:8px 0px 0 0px;
border-radius:5px;
max-width:180px;
min-width:180px;
p{margin:5px;}
img{
    height:25px;border-radius:5px;
    margin:3px 7px 3px 3px;
}
`

