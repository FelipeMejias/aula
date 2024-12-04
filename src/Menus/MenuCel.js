import { useNavigate, useParams } from "react-router-dom"
import styled, { ThemeConsumer } from "styled-components"
import { useContext, useState } from "react"
import menu from '../_imgs/menu.png'
import MyContext from '../utils/context'
export default function MenuCel(){
    const aluno=JSON.parse(localStorage.getItem('usuario'))||'sem-usuario'
    const navigate=useNavigate()
    const {aba,setAba}=useContext(MyContext)
    return (
        <Tudo>
            <QuadroCel>
                <BotaoMenu onClick={()=>setAba(true)}><img src={menu}></img></BotaoMenu>
            </QuadroCel>
        </Tudo>
    )
}
const BotaoMenu=styled.div`
display:flex;align-items:center;
cursor:pointer;
img{height:80%}height:100%;
`

const QuadroCel=styled.article`
background-color:;
padding-left:20px;box-sizing:border-box;
display:flex;align-items:center;
    width:100%;max-width:520px;height:100%;
    justify-content:space-between;


`

const Tudo=styled.article`
width:100%;height:60px;
justify-content:center;
background-color:#35A5AD;
display:none;

@media(max-width:750px){
display:flex;
}
`
/*

<QuadroPc>
            <Bt onClick={()=>navigate(`/conteudo`)}>Linguagens</Bt>  
                
                <Secao>
                <h1>Cursos</h1>
                    <Cur onClick={()=>navigate(`/conteudo/javascript`)}>
                        <img src={js}/>
                        Javascript
                    </Cur>
                    <Cur onClick={()=>navigate(`/conteudo/python`)}>
                    <img src={py}/>
                        Python
                    </Cur>
                </Secao>
                <Secao>
                <h1>Meu Material</h1>
                    <Bt onClick={()=>navigate(`/aulas/${aluno}`)}>
                        Arquivos das Aulas
                    </Bt>
                    <Bt>
                        Perguntas
                    </Bt>
                </Secao>
                <Secao>
                <h1>Agendamento</h1>
                    <Bt onClick={()=>navigate(`/agendar/${aluno}/horarios`)}>
                        Horários Disponíveis
                    </Bt>
                    <Bt onClick={()=>navigate(`/agendar/${aluno}/pacotes`)}>
                        Preço dos pacotes
                    </Bt>
                </Secao>
            </QuadroPc>
            */

/*
<Botao jus={'flex-start'}  im={36} top={'2px'} 
            onClick={()=>navigate(`/aulas/${aluno}`)}>
                <img src={iconeMateria}/>
                <h2>Arquivos</h2>
                <h3>meu material</h3>
            </Botao>
            <Botao jus={'center'}  im={42}  
            onClick={()=>navigate(`/conteudo`)}>
                <img src={iconeLivro}/>
                <h2>Linguagens</h2>
                <h3>veja tópicos</h3>
            </Botao>
            <Botao jus={'flex-end'} im={38}  top={'2px'} 
            onClick={()=>navigate(`/agendar/${aluno}`)}>
                <img src={iconeAgendar}/>
                <h2>Horários</h2>
                <h3>e pacotes</h3>
            </Botao>
            */

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

