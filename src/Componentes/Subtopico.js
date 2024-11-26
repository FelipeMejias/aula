import styled from "styled-components"
import { python } from "../aulas/python"
import { javascript } from "../aulas/javascript"
import { useParams } from "react-router-dom"
import CodeBlock from "./CodeBox"
import { useState } from "react"
export default function Subtopico(){
    const {topico,subtopico,materia}=useParams()
    const materiaEscolhida=(
        materia=='python'?python:
        materia=='javascript'?javascript:[]
    )
    const top=materiaEscolhida[topico-1]
    const subtop=top.subtopicos[subtopico-1]
    return (
        <Tudo>
            <Resto>
                <h1>{subtop.nome}</h1>
            </Resto>
        </Tudo>
    )
}
const Tudo=styled.div`
width:100%;height:100%;
flex-direction:column;
`

const Resto=styled.div`
height:calc(100% - 75px);width:100%;
flex-direction:column;
overflow:auto;
`
