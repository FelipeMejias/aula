import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom"
import Menu from "./Menu"
import { useState } from "react"
import { centralAulas } from "./aulasPassadas/central"
import file from './imgs/file.png'
import CodeBlock from "./Materia/CodeBox"
const listaAlunos=['clarissa','antonio','victoria']
export default function Arquivo(){
    const navigate=useNavigate()
    const {aluno,aula,arquivo}=useParams()
    const iAula=parseInt(aula.replace('aula',''))-1
    const iArquivo=parseInt(arquivo.replace('arquivo',''))-1
    const info=centralAulas[listaAlunos.indexOf(aluno)][iAula].arquivos[iArquivo]
    return (
        <Tudo>
            <Menu copia={info.texto} />
            <Dir>
                <Nome>{info.titulo}</Nome>
                <CodeBlock texto={info.texto} />
            </Dir>
        </Tudo>
    )
}
const Nome=styled.div`
position:absolute;left:0;top:15px;height:20px;
border-top-left-radius:10px;
border-bottom-right-radius:10px;
background-color:#b7b7b7;padding:5px 10px 5px 10px;

`
const Tudo=styled.div`
width:100%;height:100vh;
flex-direction:column;
`
const Dir=styled.div`
position:relative;
max-height:calc(100vh - 70px);width:600px;max-width:96%;
flex-direction:column;
`
