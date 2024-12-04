import styled from "styled-components"
import { python } from "../aulas/python"
import { javascript } from "../aulas/javascript"
import { useNavigate, useParams } from "react-router-dom"
import CodeBlock from "./CodeBox"
import { useEffect, useState } from "react"
import set from '../_imgs/setaback.png'

export default function Subtopico({topSubtop}){
    const params=useParams()
    const materia=params.materia
    const topico=params.topico||topSubtop[0]
    const subtopico=params.subtopico||topSubtop[1]
    const materiaEscolhida=(
        materia=='python'?python:
        materia=='javascript'?javascript:[]
    )
    const top=materiaEscolhida[topico-1]
    const subtop=top?.subtopicos[subtopico-1]
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
        const letraLing=materia=='python'?'p':materia=='javascript'?'j':''
        if(letraLing){
          const promise=fetch(`/topicos/t${topico}/${letraLing}${subtopico}.txt`)
          const promise2=promise.then((response) => response.text())
          promise2.then((data) => setTexto(data));  
        }
      }, [topico,subtopico,materia]);
  
    return (!subtop?<Tudo vazio={true}></Tudo>:
        <Tudo >
              <Heder>
                <h1>{subtop.nome}</h1>
                
                
              </Heder>
              <Heder>
                <Escolhas>
                    <Bolinha>Resumo</Bolinha>
                    <Bolinha>Ex 1</Bolinha>
                </Escolhas>
                {texto?<Copiar onClick={copiarTexto}><p>{copiado ? 'Texto copiado!' : 'Copiar Texto'}</p></Copiar>:<></>}
              </Heder>
              <CodeBlock texto={texto} />
     
            
        </Tudo>
    )
}
const Bolinha=styled.div`
cursor:pointer;
padding:5px;
background-color:blue;color:white;
border-radius:5px;
margin:0 5px 0 5px;
`
const Escolhas=styled.div`
`
const Heder=styled.div`
;position:sticky;top:0;
height:50px;width:100%;justify-content:space-between;
h1{
font-size:18px;font-weight:500;
}p{color:#35A5AD};
background-color:;
padding:0 15px 0 15px;
box-sizing:border-box;
display:flex;align-items:center;
  main{
  display:flex;
  align-items:center;
  }

`
const Tudo=styled.div`
width:100%;height:100%;

flex-direction:column;
justify-content:flex-start;
align-items:center;

overflow:auto;
@media(min-width:750px){
height:100%;
width:${p=>p.vazio?'0px':'calc(100% - 270px)'};
margin:${p=>p.vazio?'0 0px 0 0px':'0 20px 0 40px'};
}
@media(min-width:1100px){
width:${p=>p.vazio?'0px':'calc(100% - 220px)'};
}

`
const Copiar=styled.section`cursor:pointer;
align-items:center;
display:flex;
flex-direction:column;
padding:8px;
background-color: #19848c;
p{margin:0;
color:white;
display: inline-block;
}
border-radius:10px;
width:130px;
box-sizing:border-box;
`


