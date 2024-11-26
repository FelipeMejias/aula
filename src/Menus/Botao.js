import { useLocation, useNavigate, useParams } from "react-router-dom"
import styled, { ThemeConsumer } from "styled-components"
import { useState } from "react"
import { useContext } from "react"
import MyContext from '../Componentes/context'
export default function Botao({fixo,sel,tex,img,path}){
    const aluno=JSON.parse(localStorage.getItem('usuario'))||'sem-usuario'
    const navigate=useNavigate()
    const {aba,setAba}=useContext(MyContext)
    return (
        <Bt sel={sel} 
        onClick={()=>{
            if(fixo){
                navigate(path)
            }else{
                setAba(false)
                navigate(path)
            }}}>
            {img?<img src={img}/>:<></>}
            <p>{tex}</p>
            
        </Bt>  
    )}
const Bt=styled.div`
cursor:pointer;
background-color:${p=>!p.sel?'#278389':'#096368'};
color:white;
margin:10px 40px 0 40px;
border-radius:5px;

p{margin:5px;}
img{
    height:25px;border-radius:5px;
    margin:3px 7px 3px 3px;
}
`

