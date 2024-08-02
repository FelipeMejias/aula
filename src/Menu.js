import { useNavigate } from "react-router-dom"
import styled, { ThemeConsumer } from "styled-components"
import { materia } from "./materia/topicos"

export default function Menu({numeros}){
    const navigate=useNavigate()
    return (
        <Tudo>
            <Botao onClick={()=>navigate(`/`)}>
                <p>Matéria</p>
            </Botao>
            {numeros.length>=1?
            <Seta>{'>'}</Seta>:<></>}
            {numeros.length>=1?
            <Botao onClick={()=>navigate(`/${numeros[0]}`)}>
                <p>{materia[numeros[0]-1].nome}</p>
            </Botao>:<></>}
            {numeros.length>=2?
            <Seta>{'>'}</Seta>:<></>}
            {numeros.length>=2?
            <Botao onClick={()=>navigate(`/${numeros[0]}/${numeros[1]}`)}>
                <p>{materia[numeros[0]-1].subtopicos[numeros[1]-1][0]}</p>
            </Botao>:<></>}
        </Tudo>
    )
}
const Tudo=styled.div`
width:100%;height:100%;height:64px;
background-color:#35a5ad;
`
const Botao=styled.div`
cursor:pointer;
color:white;font-size:22px;margin:0 20px 0 20px;
`
const Seta=styled.div`
color:white;
`