import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { gaveta, listaAlunos } from "../aulas/gaveta"
import CodeBlock from "../Cursos/CodeBox"

export default function Postado(){
    const {aluno,arquivo}=useParams()
    const iArquivo=parseInt(arquivo.replace('arquivo',''))-1
    const exercicios=JSON.parse(localStorage.getItem('exercicios'))
    const info=exercicios[iArquivo]

    const [copiado, setCopiado] = useState(false);
    function copiarTexto(){
      navigator.clipboard.writeText(info.texto)
        .then(() => {
          setCopiado(true);
          setTimeout(() => setCopiado(false), 2000); // Reset feedback após 2 segundos
        })
        .catch(err => console.error('Erro ao copiar o texto: ', err));
    };
  return (
    <Tudo>
       <Novo>
            <h1>{info.titulo}</h1>
            {info.comentario?<Balao><p>{info.comentario}</p></Balao>:<></>}
            <Copiar onClick={copiarTexto}>
               <p>{copiado ? 'Texto copiado!' : 'Copiar Texto'}</p> 
            </Copiar>
            <Dir>
                <CodeBlock texto={info.texto} />
            </Dir>
            
       </Novo>
    </Tudo>
)
}
const Copiar=styled.section`cursor:pointer;
align-items:flex-start;
display:flex;
flex-direction:column;
padding:20px;
background-color: green;
p{margin:0;
color:white;
display: inline-block;
}
border-radius:10px;
box-sizing:border-box;
`
const Balao=styled.section`
align-items:flex-start;
display:flex;
flex-direction:column;
padding:15px;width:90%;
background-color: #1f797f;
p{margin:0;color:white;
display: inline-block;
}
border-radius:10px;
box-sizing:border-box;
`
const Dir=styled.div`
max-height:50%;min-height:50%;width:90%;
position:relative;

`
const Novo=styled.div`
position:relative;align-items:center;
height:90%;width:90%;max-width:450px;
border-radius:25px;
flex-direction:column;justify-content:space-evenly;
background-color:#35a5ad;
h1{margin:0;
color:white;
display: inline-block;
}
`
const Tudo=styled.div`
width:100%;height:100%;
flex-direction:column;
justify-content:center;
align-items:center;
div{
align-items:center;
}
`
