import styled from "styled-components"
import { python } from "../aulas/python"
import { javascript } from "../aulas/javascript"
import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import ch from '../_imgs/check.png'
import setaBaixo from '../_imgs/seta.png'
import setaCima from '../_imgs/setacima.png'
import Subtopico from "./Subtopico"
const listaFalses = Array.from({ length: 9 }, () => Array(5).fill(false));
export default function Topicos(){
    const {materia}=useParams()
    const materiaEscolhida=(
        materia=='python'?python:
        materia=='javascript'?javascript:[]
    )
    const qtdTopicos=materiaEscolhida.length
    const [ab,setAbertos]=useState([true,false,false,false,false,false,false,false,false])
    
    const navigate=useNavigate()
    function setarAb(i){
        const n=[]
        for(let k=0;k<qtdTopicos;k++)n.push(i==k?!ab[k]:ab[k])
        setAbertos(n)
    }

    const [checks,setChecks]=useState(JSON.parse(localStorage.getItem(`check-${materia}`))||listaFalses)
    function setarChecks(iTop,iSubtop){
        const n=[]
        for(let k=0;k<qtdTopicos;k++){
            const m=[]
            for(let j=0;j<4;j++)m.push(checks[k]?(k==iTop&&j==iSubtop?!checks[k][j]:checks[k][j]):false)
            n.push(m)
        }
        setChecks(n)
        localStorage.setItem(`check-${materia}`, JSON.stringify(n))
    }
    const vazio=true
    return (
        <Tudo vazio={vazio}>
            <Janela vazio={vazio}>
            {materiaEscolhida.map((top,index)=>
            <Topico vazio={vazio} ab={ab[index]?50+50*top.subtopicos.length:60} ult={index==materiaEscolhida.lenth-1}>
                <Cab onClick={()=>setarAb(index)}><h6>{top.nome}</h6></Cab>
                <aside onClick={()=>setarAb(index)}><img src={ab[index]?setaCima:setaBaixo}/></aside>
                {ab[index]?<Caixa>
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
                }</Caixa>:<></>}
                
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
@media(min-width:750px){
display:flex;
overflow:auto;
width:${p=>p.vazio?'100%;':'280px;'}
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
max-width:${p=>p.vazio?'370px':'320px'};
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