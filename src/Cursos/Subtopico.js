import styled from "styled-components"
import { python } from "../aulas/python"
import { javascript } from "../aulas/javascript"
import { useNavigate, useParams } from "react-router-dom"
import CodeBlock from "./CodeBox"
import { useEffect, useState } from "react"
import ch from '../_imgs/check.png'
import { react } from "../aulas/react"
import AulaP from "../Material/AulaP"
const listaFalses = Array.from({ length: 9 }, () => Array(5).fill(false));
export default function Subtopico(){
    const {materia,topico,subtopico}=useParams()

    const materiaEscolhida=(
            materia=='python'?python:
            materia=='javascript'?javascript:
            materia=='react'?react:[]
        )
    const checks=JSON.parse(localStorage.getItem(`ch-${materia}`))||listaFalses
    const top=materiaEscolhida[topico-1]
    const temTop=top?.subtopicos
    const subtop=temTop?temTop[subtopico-1]:top.arquivos[subtopico-1]
    const navigate=useNavigate()

    const [copiado, setCopiado] = useState(false);
    function copiarTexto(){
      navigator.clipboard.writeText(texto)
        .then(() => {
          setCopiado(true);
          setTimeout(() => setCopiado(false), 2000); // Reset feedback após 2 segundos
        })
        .catch(err => console.error('Erro ao copiar o texto: ', err));
    };
    const [texto,setTexto]=useState('')
    useEffect(() => {
        const letraLing=materia[0]
        if(letraLing){
          const promise=fetch(`/topicos/t${topico}/${letraLing}${subtopico}.txt`)
          const promise2=promise.then((response) => response.text())
          promise2.then((data) => {console.log(data);setTexto(data)});  
        }
      }, [topico,subtopico,materia]);
  console.log(subtop)
    return (!subtop?<Tudo vazio={true}></Tudo>:
        <Tudo >
          <Meio>
              <Heder>
                <h1>{subtop.nome}</h1>
                {texto?<Copiar onClick={copiarTexto}><p>{copiado ? 'Código copiado!' : 'Copiar código'}</p></Copiar>:<></>}
              </Heder>
              
              {subtop.texto?<Coment><p>{subtop.texto}</p></Coment>:<></>}
              
              
              {subtop.noCode?<></>:<HolderCode><CodeBlock texto={texto} mat={subtop.linguagem} /></HolderCode>}
              {subtop.img?<img src={subtop.img}/>:<></>}
            </Meio>
            <Janela>
            {materiaEscolhida.map((top,index)=>!top.modoAulas?
            <Topico  ult={index==materiaEscolhida.lenth-1}>
                <Cab ><h6>{top.nome}</h6></Cab>
                <Caixa>
                {top.subtopicos.map(
                    (sub,ind)=>{
                        const {bonus,nome}=sub
                        const marcado=checks[index][ind]
                    return(
                        <Sub onClick={()=>{navigate(`/cursos/${materia}/${index+1}/${ind+1}`)}}
                        sel={topico==index+1&&subtopico==ind+1}
                        color={bonus&&false?('B4D4EA'):('4787b2')} 
                        tex={bonus&&false?'black':'white'}>
                        {marcado?<img src={ch}/>:<></>}
                        <p>{nome}</p>
                        </Sub>
                    )}
                )
                }</Caixa>
                
            </Topico>:<AulaP a={top}iAula={index} aula={topico}arquivo={subtopico}path={true}/>
            )}
            </Janela>
        </Tudo>
    )
}
const Coment=styled.div`
margin-bottom:5px;
border-radius:10px;
padding:0 20px 0px 20px;
flex-direction:column;width:100%;
justify-content:flex-start;background-color:white;
position:sticky;top:50px;
white-space: pre-wrap;
text-align: left;
word-wrap: break-word;
p{
margin:0;
font-size:15px;
}
`
const Heder=styled.div`
background-color:#F0F2B8;
position:sticky;top:0;
min-height:50px;width:100%;
justify-content:space-between;
h1{
font-size:18px;font-weight:500;
}p{color:#35A5AD};
background-color:;
padding:0 15px 0 15px;
box-sizing:border-box;
display:flex;align-items:center;
`
const HolderCode=styled.div`padding-top:16px;
flex-direction:column;width:100%;
justify-content:flex-start;background-color:;
position:relative;
border-radius:10px;
overflow:auto;
`

const Meio=styled.div`background-color:;
padding:0 30px 0 45px;
width:100%;
height: 100%;
flex-direction:column;
justify-content:flex-start;
align-items:center;
@media(min-width:1050px){
width:calc(100% - 240px)
}
`
const Tudo=styled.div`
width:100%;height:100%;
flex-direction:row;
justify-content:flex-start;
align-items:center;
overflow:auto;
`
const Copiar=styled.section`cursor:pointer;
align-items:center;
display:flex;
flex-direction:column;
padding:6px;
background-color:#03B654;
p{margin:0;
color:white;
display: inline-block;
}
border-radius:10px;
width:130px;
box-sizing:border-box;
`
const Janela=styled.article`
display:flex;
background-color:;
align-items:center;
width:100%;
height:100%;
flex-direction:column;

@media(min-width:750px){
position:absolute;right:0;
display:flex;
overflow:auto;
width:240px}

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
background-color:white;
min-height:${p=>p.alt}px;
padding-bottom:7px;
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


`
const Sub=styled.article`
box-sizing:border-box;margin-bottom:3px;
text-align:left;text-align: left;
width:150px;position:relative;
border-radius:4px;padding:6px;
display:flex;align-items:center;
background:${p=>p.sel?'#4787B2': 'transparent'};color:${p=>p.sel?'white': 'black'} ;
border-radius: 12px;margin-left:15px;
transition: background-color 0.2s ease;
img{height:28px;position:absolute;left:-28px;top:4px;}
:hover {

}
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