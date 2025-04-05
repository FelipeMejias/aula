import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { python } from "../aulas/python"
import { javascript } from "../aulas/javascript"
import { react } from "../aulas/react"
import ch from '../_imgs/check.png'
import Pastas from "./Pastas"
import { alunos } from "../aulas/gaveta"
import { user } from "../utils/storageDict"
const listaFalses = Array.from({ length: 9 }, () => Array(5).fill(false));

export default function Canto({}){
    const {materia,pasta,arquivo}=useParams()
    const checks=JSON.parse(localStorage.getItem(`ch-${materia}`))||listaFalses
    const navigate=useNavigate()
    const materiaEscolhida=(
        materia=='python'?python:
        materia=='javascript'?javascript:
        materia=='react'?react:null
    )
    const aluno=JSON.parse(localStorage.getItem(user))||{nome:'convidado',aulas:[]}
      const {aulas}=aluno
      const referencia=materiaEscolhida||aulas
      function temAlgoNaString(str){
        for(let car of str){
          if(car!=' ' && car!='\n'){
            return true
        }
        }return false
      }
    return(materiaEscolhida?
        <Tudo>
            {referencia.map((top,index)=>
            top.pastas?
            <Pastas small={true} topico={index} top={top}/>:
            <Topico >
                <Cab ><h6>{top.nome}</h6></Cab>
                <Caixa>
                {top.arquivos.map(
                    (arq,ind)=>{
                        const {nome}=arq
                        const marcado=checks[index][ind]
                        const ativo=temAlgoNaString(arq.texto)
                    return(
                        <Sub checkado={true} onClick={()=>{if(ativo){navigate(`/cursos/${materia}/${index+1}/${ind+1}`)}}}
                        sel={pasta==index+1&&arquivo==ind+1}>
                        {marcado?<img style={{height:'28px',position:'absolute',left:'-28px',top:'4px'}} src={ch}/>:<></>}
                        <p>{nome}</p>
                        </Sub>
                    )}
                )
                }</Caixa>
                
            </Topico>
            )}
        </Tudo>:
        <Tudo>
        {referencia.map((top,index)=>
        top.pastas?
        <Pastas pasta={index}/>:
        <Topico >
            <Cab ><h6>{top.nome}</h6></Cab>
            <Caixa>
            {top.arquivos.map(
                (arq,ind)=>{
                    const {nome}=arq
                return(
                    <Arq onClick={()=>navigate(`/aulas/${index+1}/${ind+1}/${arq.ling}`)}
                    sel={pasta==index+1&&arquivo==ind+1}>
                    <img style={{padding:'5px',backgroundColor:'white',height:'20px',borderRadius:'50%',marginRight:'7px'}} src={arq.icone}></img>
                    <p>{nome}</p>
                    </Arq>
                )}
            )
            }</Caixa>
            
        </Topico>
        )}
    </Tudo>
    )
}
const Tudo=styled.article`
display:flex;
background-color:;
align-items:center;
width:100%;
height:100%;
flex-direction:column;
padding-bottom:10px;box-sizing:border-box;




@media(min-width:750px){
position:absolute;right:0;
display:flex;
overflow:auto;
width:240px

}

@media(max-width:1050px){
display:none;}


`

const Topico=styled.article`
align-items:center;
display:flex;
flex-direction:column;
cursor:pointer;
position:relative;
width:90%;max-width:350px;
max-width:200px;
margin:15px 0 0 0;
background-color:var(--caixa);
min-height:${p=>p.alt}px;
padding-bottom:7px;
border-radius:15px;
p{
margin:0px 0 0 0px;text-align:left;
}
h6{
color:black;
margin:0 0 5px 0px;font-size:19px;font-weight:500;
}
aside{
display:flex;align-items:flex-end;justify-content:flex-start;
position:absolute;top:0px;right:0px;
height:40px;width:40px;img{height:18px;}
}


`
const Sub=styled.article`
box-sizing:border-box;margin-bottom:3px;
text-align:left;text-align: left;
width:150px;position:relative;
border-radius:4px;padding:6px;
display:flex;align-items:center;
background:${p=>p.sel?'#748e25': 'transparent'};color:${p=>p.sel?'white': 'black'} ;
border-radius: 12px;margin-left:15px;
transition: background-color 0.2s ease;
`
const Arq=styled.article`
box-sizing:border-box;
text-align:left;text-align: left;
width:180px;position:relative;
border-radius:4px;padding:6px;
display:flex;align-items:center;
background:${p=>p.sel?'#748e25': 'transparent'};color:${p=>p.sel?'white': 'black'} ;
border-radius: 12px;margin:0;
transition: background-color 0.2s ease;
`
const HoldSub=styled.div`background-color:;
display:flex;
margin:0px 0 7px 5px;
`

const Caixa=styled.div`background-color:;
flex-direction:column;align-items:center;
`

const Cab=styled.div`width:100%;background-color:;
height:40px;padding-left:15px;align-items:center;
`