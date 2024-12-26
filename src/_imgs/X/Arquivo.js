import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import CodeBlock from "../Mostrador/CodeBox"
import { alunos } from "../aulas/gaveta"
import AulaP from "./AulaP"
export default function Arquivo({}){
  const navigate=useNavigate()
    const aluno=JSON.parse(localStorage.getItem('usuario'))||'convidado-js'
    const {linguagem,aulas}=alunos[aluno]
    const params=useParams()
    const aula=params.aula
    const arquivo=params.arquivo
    const infoArquivo=aulas[aula-1].arquivos[arquivo-1]
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
      if(infoArquivo?.texto){
        const promise=fetch(infoArquivo.texto)
        const promise2=promise.then((response) => response.text())
        promise2.then((data) => setTexto(data));  
      }else{
        setTexto('')
      }
    }, [infoArquivo]);
    return (
        <Tudo>
          <Meio>
              <Heder>
                <h1>{infoArquivo.nome}</h1>
                {texto?<Copiar onClick={copiarTexto}><p>{copiado ? 'Código copiado!' : 'Copiar código'}</p></Copiar>:<></>}
              </Heder>
              <HolderCode>
              
              {infoArquivo.img?<img src={infoArquivo.img}/>:<CodeBlock mat={linguagem} texto={texto} />}
              </HolderCode>
            </Meio>
            <Janela >
            {aulas?.map((a,iAula)=><AulaP a={a}iAula={iAula}aula={aula}arquivo={arquivo}/>)}
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

