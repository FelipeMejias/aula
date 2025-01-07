import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom"
import { alunos } from "./aulas/gaveta"
import { useEffect, useState } from "react"
import novoExercicio from './_imgs/novo.png'
//const exercicios=JSON.parse(localStorage.getItem('exercicios'))||[]

export default function AulasFeitas(){
    const navigate=useNavigate()
    const aluno=JSON.parse(localStorage.getItem('usuario'))||'convidado-js'
    const {linguagem,aulas}=alunos[aluno]
   console.log(aluno)
    return (
        <Tudo>
            <Janela vazio={true}>
            {aulas.map((a,iAula)=>
                <Aula >
                <Cab>
                    <p>{a.nome}</p>
                    <p><small>{a.data}</small></p>
                </Cab>
                <section>
                    {a.arquivos.map((arquivo,iArquivo)=>
                        <Arq onClick={()=>navigate(`/aulas/${iAula+1}/${iArquivo+1}`)}>
                            <img src={arquivo.icone}></img>
                            <h3>{arquivo.nome}</h3>
                        </Arq>)}
                    
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
margin:15px 0 0 0;
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
h3{margin:0 0 0 0;line-height:14px;
font-size:14px;font-weight:300;
strong{
color:green;font-weight:300;
}
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

