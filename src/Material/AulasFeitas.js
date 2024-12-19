import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom"
import { alunos } from "../aulas/gaveta"
import { useEffect, useState } from "react"
import novoExercicio from '../_imgs/novo.png'
import Arquivo from "./Arquivo"
import AulaG from "./AulaG"
//const exercicios=JSON.parse(localStorage.getItem('exercicios'))||[]

export default function AulasFeitas(){
    const navigate=useNavigate()
    const aluno=JSON.parse(localStorage.getItem('usuario'))||'convidado-js'
    const {linguagem,aulas}=alunos[aluno]
   
    return (
        <Tudo>
            <Janela vazio={true}>
            {aulas.map((aula,iAula)=>
                <AulaG a={aula}iAula={iAula}/>
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

