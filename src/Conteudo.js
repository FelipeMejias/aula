import styled from "styled-components"
import { python } from "./aulas/python"
import { javascript } from "./aulas/javascript"
import { react } from "./aulas/react"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ch from './_imgs/check.png'
import { useContext } from "react"
import MyContext from "./utils/context"
import Pastas from "./Mostrador/Pastas"
export default function Topicos(){
    const {aba,setAba,
        centralChecks
    }=useContext(MyContext)
    const {materia}=useParams()
    const [checks,setChecks]=centralChecks[materia]
    const navigate=useNavigate()
    
    const materiaEscolhida=(
        materia=='python'?python:
        materia=='javascript'?javascript:
        materia=='react'?react:[]
    )

    function setarChecks(iTop,iSubtop){
        const n=[]
        for(let k=0;k<9;k++){
            const m=[]
            for(let j=0;j<9;j++)m.push(checks[k]?(k==iTop&&j==iSubtop?!checks[k][j]:checks[k][j]):false)
            n.push(m)
        }
        setChecks(n)
        localStorage.setItem(`ch-${materia}`, JSON.stringify(n))
    }
    function temAlgoNaString(str){
        for(let car of str){
          if(car!=' ' && car!='\n'){
            return true
        }
        }return false
      }
    return (
        <Tudo >
            <Janela >
            {materiaEscolhida.map((top,index)=>!top.pastas?
            <Topico>
                <Cab ><h6>{top.nome}</h6></Cab>
                <Caixa>
                {top.arquivos.map(
                    (sub,ind)=>{
                        const {nome}=sub
                        const bonus=false
                        const ativo=false//temAlgoNaString(sub.texto)
                        const marcado=checks[index][ind]
                    return(
                    <HoldSub>
                        <Quadrado func={()=>setarChecks(index,ind)} marcado={marcado}/>
                        <Sub onClick={()=>{if(ativo){navigate(`/cursos/${materia}/${index+1}/${ind+1}`)}}}
                        color={ativo?(bonus?(marcado?'b2e8b8':'B4D4EA'):(marcado?'46af48':'4787b2')):marcado?'d6d6d6':'d6d6d6'} 
                        tex={!ativo?'black':'white'}>
                        <p>{nome}</p>
                        </Sub>
                    </HoldSub>
                    )}
                )
                }</Caixa>
                
            </Topico>:
                <Pastas top={top} topico={index}/>
            )}
            </Janela>
           
        </Tudo>
    )
}
function Quadrado({func,marcado}){
    return(
        <Qua onClick={func}>{marcado?<img src={ch}/>:<button/>}</Qua>
    )
}

const Tudo=styled.div`
align-items:center;
width:100%;
height:calc(100% - 75px);
position:relative;
@media(min-width:750px){height:100%;}
`
const Janela=styled.article`
display:flex;
align-items:center;
width:100%;
height:100%;
padding:0px 0 20px 0;
box-sizing:border-box;
flex-direction:column;

@media(min-width:750px){
display:flex;
overflow:auto;
width:100%;
flex-direction:row;
align-items:flex-start;
}

`
const Topico=styled.article`
align-items:flex-start;
display:flex;
flex-direction:column;
cursor:pointer;
position:relative;
margin:15px 0 0 0;
background-color:#9fbf3f;
width:90%;max-width:400px;
min-width:270px;
max-width:270px;
border-radius:15px;
p{
margin:0px 0 0 0px;text-align:left;
}
h6{color:white;
margin:0 0 5px 0px;font-size:19px;font-weight:500;
}
aside{
display:flex;align-items:flex-end;justify-content:flex-start;
position:absolute;top:0px;right:0px;
height:40px;width:40px;img{height:18px;}
}
@media(max-width:500px){
margin:15px 0 0 5%;
}
@media(min-width:750px){
margin:15px 0 0 25px;
min-width:270px;
max-width:270px;
}

`
const Sub=styled.article`
background-color:#${p=>p.color};
color:${p=>p.tex};
width:180px;
padding:9px;
border-radius:4px;position:relative;
display:flex;align-items:center;

`





const Qua=styled.div`background-color:;
cursor:pointer;
display:flex;
align-items:center;justify-content:center;
height:48px;width:48px;
img{height:48px;}
button{
cursor:pointer;background-color:transparent;
    border-radius:50%;width:30px;height:30px;
    border: 4px #d3d3d3 solid;margin:0;
}
`
const HoldSub=styled.div`background-color:;
display:flex;
margin:0px 0 10px 5px;
`



const Cab=styled.div`width:100%;background-color:;
height:60px;padding-left:15px;align-items:center;
`
const Caixa=styled.div`background-color:;
flex-direction:column;
`