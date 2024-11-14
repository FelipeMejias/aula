import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Menu from "../Menu"
import CodeBlock from "./CodeBox"

export default function AdicionarEx(){
    const {aluno}=useParams()
    const navigate=useNavigate()
    const [titulo,setTitulo]=useState('')
    const [comentario,setComentario]=useState('')
    const [texto,setTexto]=useState('')
      const handleColar = async () => {
        try {
          // Tenta acessar a área de transferência e obter o conteúdo
          const textoColado = await navigator.clipboard.readText();
          setTexto(textoColado);
        } catch (err) {
          console.error('Erro ao acessar a área de transferência', err);
        }
      };
    function principal(){
        if(!texto)return
        const objeto={titulo,comentario,texto}
        const exercicios=JSON.parse(localStorage.getItem('exercicios'))||[]
        const novaLista=[...exercicios,objeto]
        localStorage.setItem(`exercicios`, JSON.stringify(novaLista))
        navigate(`/aulas/${aluno}`)
    }
    return (
        <Tudo>
           <Novo>
                <input 
                    onChange={(e)=>setTitulo(e.target.value)} placeholder='título' value={titulo}/>
                <textarea 
                    onChange={(e)=>setComentario(e.target.value)} placeholder='comentário' value={comentario}/>
                <Dir>
                    {texto?<CodeBlock texto={texto} />:<button onClick={handleColar}>Colar texto</button>}
                    
                </Dir>
                {texto?<Enviar onClick={principal}>
                    Enviar
                </Enviar>:<></>}
           </Novo>
        </Tudo>
    )
}
const Enviar=styled.div`
cursor:pointer;justify-content:center;
    height:50px;width:140px;border-radius:5px;
    background-color:green;color:white;
    font-size:17px;border:0px;
`
const Dir=styled.div`
max-height:50%;min-height:50%;width:90%;
position:relative;
button{
    cursor:pointer;position:absolute;
    top:calc(50% - 75px);left:calc(50% - 75px);
    height:150px;width:150px;border-radius:50%;
    background-color:green;color:white;
    font-size:20px;border:0px;
}
`
const Novo=styled.div`
position:relative;align-items:center;
height:90%;width:90%;
border-radius:25px;color:white;
flex-direction:column;justify-content:space-evenly;
textarea{
    max-height:80px;min-width:90%;
    min-height:80px;max-width:90%;
    border-radius:5px;
    background-color:white;color:black;
    font-size:17px;border:0px solid #6B491A;
    padding-left:6px;box-sizing:border-box;
}
input{
    height:28px;width:200px;border-radius:5px;
    background-color:white;color:black;
    font-size:17px;border:0px solid #6B491A;
    padding-left:6px
}
background-color:#35a5ad;
h2{
position:absolute;top:30px;color:yellow;
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