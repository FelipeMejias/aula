import { useLocation, useNavigate, useParams } from "react-router-dom"
import styled, { ThemeConsumer } from "styled-components"
import { useState } from "react"
import { useContext } from "react"
import MyContext from '../utils/context'
import Botao from "./Botao"
export default function Secao({titulo,filhos,puro,eterno}){
    const [aberto,setAberto]=useState(false)
    const {pathname} = useLocation();
    const navigate=useNavigate()
    return (
        puro?
        <Etiqueta style={{padding:'0 25px 0 25px',marginTop:'10px'}}
        onClick={()=>{
            const {inativo,transport,path}=filhos
            if(!inativo){
                if(transport){
                    window.location.href = `https://${transport}.vercel.app`;
                }else{
                    navigate(path)
                }
        }}}>
            <h1>{titulo}</h1>
        </Etiqueta>
        :
        aberto||eterno?
        <Tudo height={filhos.length*40+50}>
            <Etiqueta onClick={()=>setAberto(false)}>
            <h1 style={puro?{}:{color:'#404f11'}}>{titulo}</h1>
            {eterno?<></>:<h1 style={{color:'#404f11'}} >{'^'}</h1>}
            </Etiqueta>
            {filhos.map(bot=> <Botao
             tex={bot.tex}
              sel={bot.sel} 
              path={bot.path} 
              img={bot.img} 
              subtext={bot.subtext}
              transport={bot.transport}
              inativo={bot.inativo}
              />)}
        </Tudo>:
        <Etiqueta style={{padding:'0 25px 0 25px',marginTop:'10px'}} onClick={()=>setAberto(true)}>
            <h1 style={{color:'#404f11'}}>{titulo}</h1>
            <h1 style={{color:'#404f11'}}>v</h1>
        </Etiqueta>
    )}

const Tudo=styled.div`
flex-direction:column;
height:${p=>p.height}px;margin:10px 0 10px 0;
padding:0 0 0 25px;align-items:flex-start;
cursor:pointer;background:;width:100%;
`
const Etiqueta=styled.div`width:100%;
height:50px;
padding:0 25px 0 0px;align-items:center;
cursor:pointer;justify-content:space-between;
background:;
`
