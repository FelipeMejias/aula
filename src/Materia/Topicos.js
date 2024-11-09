import styled from "styled-components"
import { materia } from "./python"
import { useNavigate, useParams } from "react-router-dom"
import Menu from "../Menu"
import { useState } from "react"
import ch from '../imgs/check.png'
import setaBaixo from '../imgs/seta.png'
import setaCima from '../imgs/setacima.png'
const listaFalses=[
    [false,false,false,false],
    [false,false,false,false],
    [false,false,false,false],
    [false,false,false,false],
    [false,false,false,false],
]
export default function Topicos(){
    const {aluno}=useParams()
    const [ab,setAbertos]=useState([true,false,false,false,false])
    
    const navigate=useNavigate()
    function setarAb(i){
        const n=[]
        for(let k=0;k<5;k++)n.push(i==k?!ab[k]:ab[k])
        setAbertos(n)
    }

    const [checks,setChecks]=useState(JSON.parse(localStorage.getItem('checks'))||listaFalses)
    function setarChecks(iTop,iSubtop){
        const n=[]
        for(let k=0;k<5;k++){
            const m=[]
            for(let j=0;j<4;j++)m.push(k==iTop&&j==iSubtop?!checks[k][j]:checks[k][j])
            n.push(m)
        }
        setChecks(n)
        localStorage.setItem('checks', JSON.stringify(n))
    }
    return (
        <Tudo>
            <Menu numeros={[]}/>
            <Resto>
            {materia.map((top,index)=>
            <Topico ab={ab[index]} ult={index==materia.lenth-1}>
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
                        <Sub onClick={()=>{/*navigate(`/${aluno}/${index+1}/${ind+1}`)*/}} 
                        color={bonus?(marcado?'b2e8b8':'B4D4EA'):(marcado?'46af48':'4787b2')} 
                        tex={bonus?'black':'white'}>
                        <p>{nome}</p>
                        </Sub>
                    </HoldSub>
                    )}
                )
                }</Caixa>:<></>}
                
            </Topico>
            )}
            <Fantasma/>
             </Resto>
        </Tudo>
    )
}
function Quadrado({func,marcado}){
    return(
        <Qua onClick={func}>{marcado?<img src={ch}/>:<button/>}</Qua>
    )
}
const Qua=styled.div`
cursor:pointer;
display:flex;
align-items:center;justify-content:center;
height:48px;width:48px;
img{height:48px;}
button{
cursor:pointer;background-color:transparent;
    border-radius:50%;width:30px;height:30px;
    border: 4px #d3d3d3 solid;
}
`
const HoldSub=styled.div`background-color:;
display:flex;
margin:0px 0 10px 20px;
`
const Fantasma=styled.div`min-height:50px;width:100%;`
const Resto=styled.div`
width:100%;height:calc(100% - 75px);
flex-direction:column;overflow:auto;
aside{background-color:;
display:flex;
align-items:flex-end;justify-content:flex-start;
    font-size:14px;font-weight:500;
    position:absolute;top:0px;right:0px;
    height:40px;width:40px;
    img{height:18px;}
}
`
const Tudo=styled.div`
align-items:center;
width:100%;
height:100%;
flex-direction:column;
h6{
    margin:0 0 5px 0px;font-size:19px;font-weight:500;
}
    
`

const Topico=styled.div`
align-items:flex-start;
display:flex;
flex-direction:column;
cursor:pointer;
position:relative;
width:90%; 
max-width:400px;
background-color:white;
min-height:${p=>p.ab?295:60}px;
margin:15px 0 0 calc(50vw - 200px);
border-radius:15px;
p{
    margin:0px 0 0 0px;text-align:left;
}
`
const Caixa=styled.div`background-color:;
flex-direction:column;
`
const Sub=styled.div`background-color:#${p=>p.color};
color:${p=>p.tex};width:240px;
padding:9px;
border-radius:4px;position:relative;
display:flex;align-items:center;
`
const Cab=styled.div`width:100%;background-color:;
height:60px;padding-left:15px;align-items:center;
`