import styled from "styled-components"
import { python } from "../aulas/python"
import { javascript } from "../aulas/javascript"
import { react } from "../aulas/react"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ch from '../_imgs/check.png'
import setaBaixo from '../_imgs/seta.png'
import setaCima from '../_imgs/setacima.png'
import Subtopico from "./Subtopico"
import { useContext } from "react"
import MyContext from "../utils/context"
const listaFalses=Array(9).fill(true)
export default function Topicos(){
    const {aba,setAba,checks,setChecks}=useContext(MyContext)
    const navigate=useNavigate()
    const {materia}=useParams()
    const materiaEscolhida=(
        materia=='python'?python:
        materia=='javascript'?javascript:
        materia=='react'?react:[]
    )
    const qtdTopicos=materiaEscolhida.length

    function setarChecks(iTop,iSubtop){
        const n=[]
        for(let k=0;k<9;k++){
            const m=[]
            for(let j=0;j<9;j++)m.push(checks[k]?(k==iTop&&j==iSubtop?!checks[k][j]:checks[k][j]):false)
            n.push(m)
        }
        setChecks(n)
        localStorage.setItem(`checky-${materia}`, JSON.stringify(n))
    }
useEffect(()=>{
    const antigo=JSON.parse(localStorage.getItem(`checky-javascript`))
    if(antigo.length>=0)return
    localStorage.setItem(`checky-python`, JSON.stringify(listaDeListasFalses))
    localStorage.setItem(`checky-javascript`, JSON.stringify(listaDeListasFalses))
    localStorage.setItem(`checky-react`, JSON.stringify(listaDeListasFalses))
},[])
    
    return (
        <Tudo >
            <Janela >
            {materiaEscolhida.map((top,index)=>
            <Topico ult={index==materiaEscolhida.lenth-1}>
                <Cab ><h6>{top.nome}</h6></Cab>
                {/*<aside onClick={()=>setarAb(index)}><img src={ab[index]?setaCima:setaBaixo}/></aside>*/}
                <Caixa>
                {top.subtopicos.map(
                    (sub,ind)=>{
                        const {bonus,nome}=sub
                        const marcado=checks[index][ind]
                    return(
                    <HoldSub>
                        <Quadrado func={()=>setarChecks(index,ind)} marcado={marcado}/>
                        <Sub onClick={()=>{navigate(`/cursos/${materia}/${index+1}/${ind+1}`)}}
                        color={bonus&&false?(marcado?'b2e8b8':'B4D4EA'):(marcado?'46af48':'4787b2')} 
                        tex={bonus&&false?'black':'white'}>
                        <p>{nome}</p>
                        </Sub>
                    </HoldSub>
                    )}
                )
                }</Caixa>
                
            </Topico>
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
background-color:;
align-items:center;
width:100%;
height:100%;
flex-direction:column;
padding:0px 0 20px 0;
box-sizing:border-box;
@media(min-width:750px){
display:flex;
overflow:auto;
width:100%;
}


`
const Topico=styled.article`
align-items:flex-start;
display:flex;
flex-direction:column;
cursor:pointer;
position:relative;
width:90%;max-width:350px;
margin:15px 0 0 calc(50% - 225px);
background-color:white;
min-height:${p=>p.alt}px;

border-radius:15px;
p{
margin:0px 0 0 0px;text-align:left;
}
h6{
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
margin:15px 0 0 0;
max-width:320px
}

`
const Sub=styled.article`background-color:#${p=>p.color};
color:${p=>p.tex};
width:220px;
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