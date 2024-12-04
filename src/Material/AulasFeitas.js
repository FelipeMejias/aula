import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom"
import Identifique from "../utils/Identifique"
import { gaveta, listaAlunos } from "../aulas/gaveta"
import { useEffect, useState } from "react"
import novoExercicio from '../_imgs/novo.png'
import file from '../_imgs/file.png'
import Arquivo from "./Arquivo"
//const exercicios=JSON.parse(localStorage.getItem('exercicios'))||[]

export default function AulasFeitas(){
    const navigate=useNavigate()
    const aluno=JSON.parse(localStorage.getItem('usuario'))
    const info=gaveta[listaAlunos.indexOf(aluno)]
   
    const [aulaArq,setAulaArq]=useState([0,0])
    return (
        <Tudo>
            <Arquivo aulaArq={aulaArq}/>
            <Janela vazio={aulaArq[0]==0}>
            {info.map((aula,iAula)=>
                <Aula vazio={aulaArq[0]==0}>
                    <Cab>
                        <p>{aula.titulo}</p>
                        <p><small>{aula.data}</small></p>
                    </Cab>
                    <section>
                        {aula.arquivos.map((arquivo,iArquivo)=>
                            <Arq onClick={()=>navigate(`/aulas/${iAula+1}/${iArquivo+1}`)}>
                                <img src={arquivo.icone}></img>
                                <h3>{arquivo.titulo}</h3>
                            </Arq>)}
                        {aula.arquivos.map((arquivo,iArquivo)=>
                            <ArqG tam={aulaArq[0]==0?33:50} onClick={()=>setAulaArq([iAula+1,iArquivo+1])}>
                                <img src={arquivo.icone}></img>
                                <h3>{arquivo.titulo}</h3>
                            </ArqG>)}
                    </section>
                </Aula>
            )}
            </Janela>
        </Tudo>
    )
}
const Janela=styled.div`background-color:;
align-items:center;
width:100%;
height:100%;
flex-direction:column;
h6{
    margin:0 0 5px 0px;font-size:19px;font-weight:500;
}
@media(min-width:750px){
overflow:auto;
width:${p=>p.vazio?'100%;':'370px;'}
}
`
const Tudo=styled.div`
width:100%;height:100%;
`
const Cab=styled.div`
align-items:center;
background-color:#d9dbad;width:100%;
border-top-left-radius:15px;
border-top-right-radius:15px;
justify-content:space-between;
padding:0 10px 0 10px;
p{small{13px}
font-size:18px;margin:5px 0 7px 0px;
}
`
const Aula=styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;

width:90%;max-width:450px;
margin:15px 0 0 calc(50% - 225px);
background-color:white;
border-radius:15px;

section{width:100%;background-color:;
display:flex;min-height:80px;
align-items:center;margin:5px 0 5px 0;
flex-wrap:wrap;
}
@media(max-width:500px){
margin:15px 0 0 5%;
}
@media(min-width:750px){
margin:15px 0 0 0;
max-width:${p=>p.vazio?'450px':'320px'};
}
`

const Arq=styled.article`background-color:;
display:flex;
align-items:center;
flex-direction:column;
align-items:center;
justify-content:center;
cursor:pointer;
width:25%;
height:100px;
border-radius:15px;
margin-left:10px;
img{
height:40px;margin-bottom:5px;
}
h3{margin:0 0 0 0;line-height:14px;height:30px;
font-size:14px;font-weight:300;min-width:100%;
strong{
color:green;font-weight:300;
}
}
@media(min-width:750px){
display:none;
}
`
const ArqG=styled.article`background-color:;
display:flex;
align-items:center;
flex-direction:column;
align-items:center;
justify-content:center;
cursor:pointer;
max-width:${p=>p.tam}%;
min-width:${p=>p.tam}%;
height:100px;
border-radius:15px;
img{
height:40px;margin-bottom:5px;
}
h3{margin:0 0 0 0;line-height:14px;height:30px;
font-size:14px;font-weight:300;max-width:80%;
strong{
color:green;font-weight:300;
}
}
@media(max-width:750px){
display:none;
}
`
const Resto=styled.div`
align-items:flex-start;
height:calc(100vh - 75px);width:100%;
flex-direction:column;
overflow:hidden;
overflow-y:scroll;
@media(min-width:750px){
height:100%;
}
`

/*
{aluno=='clarissa'?<Aula ab={20+tamanho(exercicios.length+1)*120}>
            <Cab>
                <p>Exercícios</p>
            </Cab>
            <section>
                <Arq onClick={()=>navigate(`/aulas/adicionar`)}>
                    <img src={novoExercicio}></img>
                    <h3>Adicionar exercício</h3> 
                </Arq>
                {exercicios.map((arquivo,iArquivo)=>
                    <Arq onClick={()=>navigate(`/aulas/exercicios/arquivo${iArquivo+1}`)}>
                        <img src={file}></img>
                        <h3>{arquivo.titulo}</h3>
                    </Arq>)}
            </section>
        </Aula>:<></>}
        */

/*[][iAula].map((arquivo,iArquivo)=><Arq onClick={()=>navigate(`/${aluno}/aula${iAula+1}/arquivo${iArquivo+1}`)}>
                    <img src={papel}></img>
                    <h3>{arquivo.titulo}</h3>
                </Arq>)}
                <Arq onClick={()=>navigate(`/`)}>
                    <img src={novo}></img>
                    <h3><strong></strong></h3>
                </Arq>*/

