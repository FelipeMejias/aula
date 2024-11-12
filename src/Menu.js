import { useNavigate, useParams } from "react-router-dom"
import styled, { ThemeConsumer } from "styled-components"
import { useState } from "react"
import iconeAgendar from './imgs/agendar.png'
import iconeMateria from './imgs/materia.png'
import iconeLivro from './imgs/livro.png'
export default function Menu({aluno}){
    const navigate=useNavigate()
    return (
        <Tudo>
             <main>
            <Botao jus={'flex-start'}  im={36} top={'2px'} 
            onClick={()=>navigate(`/aulas/nome-de-acesso`)}>
                <img src={iconeMateria}/>
                <h2>Aulas Feitas</h2>
                <h3>ver material</h3>
            </Botao>
            <Botao jus={'center'}  im={42}  
            onClick={()=>navigate(`/conteudo`)}>
                <img src={iconeLivro}/>
                <h2>Conteúdo</h2>
                <h3>explicação e exercícios</h3>
            </Botao>
            <Botao jus={'flex-end'} im={38}  top={'2px'} 
            onClick={()=>navigate(`/horarios`)}>
                <img src={iconeAgendar}/>
                <h2>Agendar Aulas</h2>
                <h3>preços e horários</h3>
            </Botao>
            </main>
        </Tudo>
    )
}
const Tudo=styled.div`

width:100%;height:75px;
justify-content:center;
background-color:#35A5AD;
main{background-color:;
padding:0 35px 0 35px;box-sizing:border-box;
display:flex;align-items:center;
    width:100%;max-width:500px;height:100%;
    justify-content:space-between;
}
`

const Botao=styled.div`background-color:;
align-items:center;
flex-direction:column;
cursor:pointer;line-height:19px;
margin:0 0px 0 0%;
justify-content:flex-end;
color:white;font-size:17px;height:75px;
position:relative;
img{max-height:${props=>props.im}px;
position:absolute;
top:${props=>props.top||'0px'}}

h2{display:flex;font-size:16px;font-weight:500;margin:0 0 0 0;justify-content:flex-end;height:15px;}
h3{display:flex;font-size:14px;font-weight:300;margin:0 0 4px 0;justify-content:flex-end;}
`
/*
            <Botao onClick={()=>navigate(`/horarios`)}>
                <p>Horários</p>
            </Botao>
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
*/