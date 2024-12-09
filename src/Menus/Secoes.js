import { useLocation, useNavigate, useParams } from "react-router-dom"
import styled, { ThemeConsumer } from "styled-components"
import { useState } from "react"
import { useContext } from "react"
import MyContext from '../utils/context'
import Botao from "./Botao"
import js from '../_imgs/js.png'
import re from '../_imgs/react.png'
import nd from '../_imgs/node.png'
import py from '../_imgs/python.png'
import hc from '../_imgs/html3.jpg'
import sq from '../_imgs/sql.jpg'
import wpp from '../_imgs/wpp.png'
import dayjs from 'dayjs'
export default function Secoes({align}){
    const aluno=JSON.parse(localStorage.getItem('usuario'))||'sem-usuario'
    const navigate=useNavigate()
    const {aba,setAba}=useContext(MyContext)
    const {pathname} = useLocation();
    function mandarWpp(){
        const telefone = 5521984636151;
        const horaStr=dayjs().format('HH:mm')
        const hora=parseInt(`${horaStr[0]}${horaStr[1]}`)
        let texto
        if(hora<5){
            texto='Boa noite! Cheguei através do site Portal Aulas'
        }else if(hora<12){
            texto='Bom dia! Cheguei através do site Portal Aulas'
        }else if(hora<18){
            texto='Boa tarde! Cheguei através do site Portal Aulas'
        }else{
            texto='Boa noite! Cheguei através do site Portal Aulas'
        }
        const encodedText = encodeURIComponent(texto);
        const urlWhatsapp = `https://wa.me/${telefone}?text=${encodedText}`;
        window.open(urlWhatsapp);
    }
    return (
        <Tudo align={align}>

            <h1>Conteúdo</h1>
            <Botao tex={'FrontEnd vs BackEnd'} sel={pathname.includes('linguagens')} path={`/linguagens`} /> 
            <Botao tex={'Javascript'} sel={pathname.includes(`javascript`)} path={`/cursos/javascript`} img={js} />
            <Botao tex={'Python'} sel={pathname.includes(`python`)} path={`/cursos/python`} img={py} />

            <h1>Meu Material</h1>
            <Botao tex={'Arquivos de aulas'} sel={pathname.includes(`aulas`)} path={`/aulas`} />
            <Botao tex={'Minhas Perguntas'} sel={pathname.includes(`perguntas`)} path={`/perguntas`} />

            <h1>Agendamento</h1>
            {/*<Botao tex={'Horários Disponíveis'} sel={pathname.includes(`horarios`)} path={`/horarios`} />*/}
            {/*<Botao tex={'Valor de Pacotes'} sel={pathname.includes(`pacotes`)} path={`/pacotes`} />*/}

            <BtWpp onClick={mandarWpp}>
                <img src={wpp} />
                <p>Enviar Mensagem</p>
            </BtWpp>
        </Tudo>
    )}
const BtLing=styled.div`
flex-direction:column;
cursor:pointer;
background-color:${p=>!p.sel?'#278389':'#096368'};
color:white;
margin:7px 0px 0 0px;
border-radius:5px;
max-width:180px;
min-width:180px;
padding:5px;
p{width:100%;display:flex;margin:0px;}
img{
    height:25px;border-radius:5px;
    margin:3px 7px 3px 3px;
}
`
const Tudo=styled.div`background-color:;
flex-direction:column;
align-items:center;
h1{
    font-size:20px;
    margin:19px 0 0 0px;
    text-align:${p=>p.align?';':'left;'} ;
    color:#53541d
}
width:100%;
align-items:${p=>p.align?'center;':';'};
`
const BtWpp=styled.div`
cursor:pointer;
background-color:#29AD17;
color:white;
margin:8px 0px 0 0px;
border-radius:5px;
max-width:180px;
min-width:180px;
p{margin:5px;}
img{
    height:25px;border-radius:5px;
    margin:3px 7px 3px 3px;
}
`


