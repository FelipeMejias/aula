import styled from "styled-components"
import { alunos } from "../aulas/gaveta"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { user } from "./storageDict"

export default function SalaEspera({setAluno}){
    const [tentando,setTentando]=useState(false)
    const [escolhido,setEscolhido]=useState(-1)
    const [texto,setTexto]=useState('')
    const navigate=useNavigate()
    function enviar(){
        const objAlunoDesafiante=alunos[escolhido]
        if(objAlunoDesafiante.senha==texto){
            localStorage.setItem(user, JSON.stringify(objAlunoDesafiante));
            setAluno(objAlunoDesafiante)
            console.log('oi')
        }else{
            console.log('tchau')
        }
    }
    return (
        <Tela>
            <Quadro>
            {alunos.map((al,i)=><Al onClick={()=>{
                setEscolhido(i)
                setTentando(true)
            }}>
                {`${al.nome}`}
                {tentando?(i==escolhido?<input
                onChange={(e)=>{if(e.target.value.length<=4){setTexto(e.target.value)}}}
                value={texto}
                placeholder="XXXX"
                />:<></>):<></>}
                {tentando?(i==escolhido?<Botao onClick={enviar}>
                    OK
                </Botao>:<></>):<></>}
            </Al>)}
            </Quadro>
        </Tela>
    )
}
const Tela=styled.div`
flex-direction:column;
align-items:center;
width:100%;
height:calc(100% - 75px);
position:relative;
@media(min-width:750px){height:100%;}
input{
    height:28px;width:42px;border-radius:5px;
    background-color:white;color:black;
    font-size:14px;border:0px solid #6B491A;
    padding-left:6px
}
`
const Quadro=styled.article`
height:calc(100% - 30px);
width:calc(100% - 30px);
flex-wrap:wrap;display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:flex-start;
`
const Al=styled.div`margin:20px 0 0 20px;cursor:pointer;
width:250px;text-align:center;
height:80px;border-radius:100px;
background:#5D7219;color:white;
font-size:17px;font-weight:500;
display:flex;justify-content:space-evenly;
align-items:center;
`


const Botao=styled.div`cursor:pointer;
width:36px;height:36px;text-align:center;
border-radius:50%;
background:green;color:white;
font-size:17px;font-weight:500;
display:flex;justify-content:space-evenly;
align-items:center;
`
