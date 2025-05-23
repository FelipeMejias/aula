import { useLocation, useNavigate, useParams } from "react-router-dom"
import styled, { ThemeConsumer } from "styled-components"
import { useState } from "react"
import { useContext } from "react"
import MyContext from '../utils/context'
import { RiQuestionnaireFill } from "react-icons/ri";
export default function Botao({transport,inativo,sel,tex,img,path,subtext}){
    const aluno=JSON.parse(localStorage.getItem('usuario'))||'sem-usuario'
    const navigate=useNavigate()
    const {aba,setAba}=useContext(MyContext)
    return (
        <Bt sel={sel} inativo={inativo}
        onClick={()=>{if(!inativo){
            if(transport){
                window.location.href = `https://${transport}.vercel.app`;
            }else{
                setAba(false);
            navigate(path)
            }
            
        }
            }}>
            {img?<img src={img}/>:<></>}
            <Resto>
            <p>{tex}</p>
            <h6>{subtext}</h6>
            </Resto>
            
            
        </Bt>  
    )}
const Bt=styled.div`
opacity:${p=>p.inativo?' 0.3':'1'};
cursor:${p=>p.inativo?'':'pointer'};
background-color:${p=>!p.sel?'transparent':'var(--caixa)'};
color:${p=>!p.sel?'var(--h1Menu)':'#2A0145'};
margin:0px 0px 4px 0px;
border-radius:50px;
max-width:180px;width:calc(100% - 20px);

transition: background-color 0.2s ease;
img{padding:5px;background-color:white;
    height:20px;border-radius:50%;
    margin:3px;
}
p{margin:0}
h6{margin:0;font-weight:300}
`

const Resto=styled.div`
margin:5px 5px 5px 9px;
max-width:180px;
min-width:180px;
flex-direction:column;
`