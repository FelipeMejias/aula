import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { python } from "../aulas/python"
import { javascript } from "../aulas/javascript"
import { react } from "../aulas/react"
import ch from '../_imgs/check.png'
import Pastas from "./Pastas"
import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark"
import CodeBlock from "./CodeBox"
import { alunos } from "../aulas/gaveta"
import { useEffect, useState } from "react"

export default function Meio({}){
    const {materia,pasta,arquivo}=useParams()
    const navigate=useNavigate()
    const [copiado, setCopiado] = useState(false);
    const [texto,setTexto]=useState('')
    const materiaEscolhida=(
      materia=='python'?python:
      materia=='javascript'?javascript:
      materia=='react'?react:null
  )
  const aluno=JSON.parse(localStorage.getItem('usuario'))||'convidado-js'
  const {linguagem,aulas}=alunos[aluno]
  const referencia=materiaEscolhida||aulas
  const infos=referencia[pasta-1].arquivos[arquivo-1]

    function copiarTexto(){
      navigator.clipboard.writeText(texto).then(() => {setCopiado(true);setTimeout(() => setCopiado(false), 2000)}).catch(err => console.error('Erro ao copiar o texto: ', err));
    };
    useEffect(() => {
      const promise=fetch(infos.caminho)
      const promise2=promise.then((response) => response.text())
      promise2.then((data) => {setTexto(data)});  
    }, [pasta,arquivo,materia]);
    
    function temAlgoNaString(str){
      let tem=false
      for(let car of str){
        if(car!=' ')tem=true
      }return tem
    }
    
    const formatText = (text) => text.split('\n').map((line) =>temAlgoNaString(line)? (line[0]=='-'?
      <span><Triangulinho/><p>{line.slice(1)}</p></span>:
      <span><Bolinha/><p>{line}</p></span>
    ):<span></span>)
    return(
        <Tudo>
            <Heder>
            <Copiar cor={'#eda12f'} inativo={true} ><p>Fazer pergunta</p></Copiar>
            <h1>{infos.nome}</h1>
            {texto?<Copiar cor={'#03B654'} onClick={copiarTexto}><p>{copiado ? 'Código copiado!' : 'Copiar código'}</p></Copiar>:<FakeButton/>}
            </Heder>
            {infos.texto?<Coment>{formatText(infos.texto)}</Coment>:<></>}
            {infos.noCode?<></>:<HolderCode><CodeBlock texto={texto} mat={infos.linguagem||materia} /></HolderCode>}
            {infos.img?<img src={infos.img}/>:(infos.noCode===15?<Pastas />:<></>)}
        </Tudo>
    )
}
const Triangulinho = styled.div`
margin:7px 6px 0 15px;
  width: 0;
  height: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 8px solid brown;
`;
const Bolinha = styled.div`
margin-top:6px;
  width: 6.5px;
  height: 6.5px;
  border-radius:50%;
background: blue;
`;

const Copiar=styled.section`
opacity:${p=>p.inativo?' 0.3':'1'};
cursor:${p=>p.inativo?'':'pointer'};
align-items:center;
display:flex;
flex-direction:column;
padding:6px;
background-color:${p=>p.cor};
p{margin:0;font-size:13px;
color:white;
display: inline-block;
}
border-radius:10px;
width:110px;
box-sizing:border-box;
`
const FakeButton=styled.section`
width:110px;
`

const Coment = styled.div`
  margin-bottom: 0px;
  border-radius: 10px;
  padding: 0 20px 0px 10px;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  background-color: white;
  position: sticky;
  top: 50px;

  p {
    font-size: 15px;
    line-height: 20px; /* Espaçamento interno em uma linha */
    margin: 0; /* Remove a margem padrão */
    white-space: pre-wrap;
    text-align: left;
    word-wrap: break-word;
    width:calc(100% - 15px)
  }

  span + span {
    margin-top: 10px; /* Espaço entre parágrafos */
  }
  span{
    width:100%;
    display:flex;
    justify-content:space-between;
    }
`;
const Heder=styled.div`
background-color:#F0F2B8;
position:sticky;top:0;
min-height:50px;width:100%;
justify-content:space-between;
h1{
font-size:18px;font-weight:500;
}
background-color:;
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

const Tudo=styled.div`background-color:;
padding:0 15px 0 15px;
width:100%;
height: 100%;
flex-direction:column;
justify-content:flex-start;
align-items:center;
@media(min-width:1050px){
width:calc(100% - 240px)
}
`