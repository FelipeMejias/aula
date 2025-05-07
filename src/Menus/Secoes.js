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
import hc from '../_imgs/react.png'
import sq from '../_imgs/sql.jpg'
import wpp from '../_imgs/wpp.png'

import Secao from "./Secao"
export default function Secoes({align,height}){
    const aluno=JSON.parse(localStorage.getItem('usuario'))||'sem-usuario'
    const navigate=useNavigate()
    const {aba,setAba}=useContext(MyContext)
    const {pathname} = useLocation();
    
    return (
    <Tudo height={height} align={align}>
    <Leva>
        <Secao puro={true}
        titulo={'Meu Material'}
        filhos={
            {tex:'Arquivos das aulas',sel:pathname.includes(`aulas`),path:`/aulas`}
            //{tex:'Perguntas',sel:pathname=='/perguntas',path:`/peguntas`,inativo:true},
        }
        />
        <Secao
        titulo={'Conteúdos'}
        filhos={[
            {tex:'FrontEnd vs BackEnd',sel:pathname=='/',path:`/`},
            //{tex:'Grade Js / Py',sel:pathname=='/grade',path:`/grade`,inativo:true},
            {tex:'Javascript',sel:pathname.includes(`javascript`),path:`/cursos/javascript`,img:js},
            {tex:'React',sel:pathname.includes(`react`),path:`/cursos/react`,img:re,inativo:true},
            //<Botao tex={'Python'} sel={pathname.includes(`python`)} path={`/cursos/python`} img={py} inativo={true} />
            //<Botao tex={'SQL'} sel={pathname.includes(`bancos`)} path={`/bancos`} img={sq} />
            //<Botao tex={'Node'} sel={pathname.includes(`node`)} path={`/cursos/node`} img={nd} inativo={true} />
        ]}
        />
    </Leva>
    <Leva>
        {/*<Secao puro={true}
        titulo={'Valor pacotes'}
        filhos={
            {tex:'Valor pacotes',sel:pathname=='/pacotes',path:`/pacotes`}
        }
        />*/}
         <Secao eterno={true}
        titulo={'Plataformas'}
        filhos={[
            {tex:'Banco de Dados',sel:pathname.includes(`banco`),img:sq,subtext:'Treinar SQL',transport:`portalsql`,inativo:true},
            {tex:'Front End',sel:pathname.includes(`front`),img:re,subtext:'Treinar HTML + CSS',transport:`portalreact`,inativo:true},
        ]}
        />
           
            {/*
            <h1>Contato</h1>
            <Botao tex={'Horários Disponíveis'} sel={pathname.includes(`horarios`)} path={`/horarios`} />
            <Botao tex={'Valor de Pacotes'} sel={pathname.includes(`pacotes`)} path={`/pacotes`} />
            <BtWpp onClick={mandarWpp}><img src={wpp} /><p>Enviar Mensagem</p></BtWpp>
            */}
    </Leva>
    </Tudo>
    )}

const Leva=styled.div`
width:100%;flex-direction:column;
`
const Tudo=styled.div`background-color:;
flex-direction:column;
justify-content:space-between;
h1{
    font-size:20px;
    margin:0;
    text-align:${p=>p.align?';':'left;'} ;
    color:var(--h1Menu)
};

width:100%;
height:${p=>p.height};
align-items:${p=>p.align?'center;':';'};
`

/*
overflow-x:hidden;
overflow-y:scroll;
*/

