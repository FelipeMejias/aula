import styled from "styled-components"
import { alunos } from "../aulas/gaveta"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { user } from "./storageDict"
import dayjs from 'dayjs'
import wpp from '../_imgs/wpp.png'
export default function SalaEspera({setAluno}){
    const [tentando,setTentando]=useState(false)
    const [escolhido,setEscolhido]=useState(-1)
    const [texto,setTexto]=useState('')
    const [errado,setErrado]=useState('')
    const navigate=useNavigate()
    function mandarWpp(){
            const telefone = 5521984636151;
            const horaStr=dayjs().format('HH:mm')
            const hora=parseInt(`${horaStr[0]}${horaStr[1]}`)
            let texto
            if(hora<5){
                texto='Boa noite! Gostaria de ter uma conta na plataforma Portal Code'
            }else if(hora<12){
                texto='Bom dia! Gostaria de ter uma conta na plataforma Portal Code'
            }else if(hora<18){
                texto='Boa tarde! Gostaria de ter uma conta na plataforma Portal Code'
            }else{
                texto='Boa noite! Gostaria de ter uma conta na plataforma Portal Code'
            }
            const encodedText = encodeURIComponent(texto);
            const urlWhatsapp = `https://wa.me/${telefone}?text=${encodedText}`;
            window.open(urlWhatsapp);
        }
    function enviar(){
        const objAlunoDesafiante=alunos[escolhido]
        if(objAlunoDesafiante.senha==texto){
            localStorage.setItem(user, JSON.stringify(objAlunoDesafiante));
            setAluno(objAlunoDesafiante)
        }else{
            setErrado(true)
            setTimeout(() => {
                setErrado(false)
            }, 1.5*1000);
        }
    }
    {/*useEffect(()=>{
        const input = document.getElementById("meu-input");       
        input?.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                enviar()
            }
            })
    },[escolhido])*/}
    return (
        <Tela>
            <Quadro>
            {alunos.map((al,i)=><Al onClick={()=>{
                setEscolhido(i)
                setTentando(true)
            }}>
                {`${al.nome}`}
              
                {tentando&&i==escolhido?
                errado?<Holder><p>Codigo errado!</p></Holder>:
                <Holder><input
                onChange={(e)=>{if(e.target.value.length<=4){setTexto(e.target.value)}}}
                value={texto}
                placeholder="0000" id="meu-input"
                />
              <Botao onClick={enviar}>
                    OK
                </Botao></Holder>:<></>}
            </Al>)}
            </Quadro>
            <Wpp onClick={mandarWpp}>
                <img src={wpp}/>
                <p>Solicitar uma conta</p>
            </Wpp>
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
    height:28px;width:46px;border-radius:5px;
    background-color:white;color:black;
    font-size:14px;border:0px solid #6B491A;
    padding:3px 0 0 6px;font-size:17px;
}
`
const Quadro=styled.article`
height:calc(100% - 120px);
width:calc(100% - 30px);
max-width:550px;
flex-wrap:wrap;display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:flex-start;
`
const Holder=styled.div`
height:40px;
width:100px;background:;
justify-content:space-between;
align-items:center;
p{color:yellow;
margin:0;font-size:16px;
}
`
const Al=styled.div`margin:20px 0 0 20px;cursor:pointer;
width:250px;text-align:center;
height:65px;border-radius:100px;
background:#5D7219;color:white;
font-size:17px;font-weight:500;
display:flex;justify-content:space-evenly;
align-items:center;
`
const Wpp=styled.div`margin:20px 0 0 20px;cursor:pointer;
width:250px;text-align:center;
height:65px;border-radius:100px;
background:#2AB200;color:white;
font-size:17px;font-weight:500;
border:3px solid white;
display:flex;justify-content:space-evenly;
align-items:center;img{height:80%;}
`

const Botao=styled.div`cursor:pointer;
width:36px;height:36px;text-align:center;
border-radius:50%;
background:#91d655;color:#5D7219;
font-size:17px;font-weight:500;
display:flex;justify-content:space-evenly;
align-items:center;
`
