import {useState,useEffect,useContext} from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Preco from './Preco'

export default function Agendar({pag}){
    const navigate=useNavigate()
    return(
        pag==0?
        <Content>
            <h1>Escolha um dos tipos de pacote:</h1>
            <Tipos>
                <Tipo onClick={()=>navigate(`/pacotes/mensal`)} >
                    <h2>Mensal</h2>
                    <h3>Você escolhe a frequência semanal de aulas</h3>
                    <h4>(Quanto maior a frequência, maior o desconto)</h4>
                </Tipo>
                <Tipo onClick={()=>navigate(`/pacotes/quantidade`)} >
                    <h2>Quantidade</h2>
                    <h3>Você escolhe quantas aulas quer no pacote</h3>
                    <h4>(Quanto mais aulas, maior o desconto)</h4>
                </Tipo>
                <Tipo onClick={()=>navigate(`/pacotes/cursos`)} >
                    <h2>Cursos</h2>
                    <h3>O valor é fixo para você aprender cada tecnologia</h3>
                    <h4>(Encerramos cada curso quando você decidir que aprendeu)</h4>
                </Tipo>
            </Tipos>
           
        </Content>
        :pag==1?
        <Content>
            <Preco/>
        </Content>
        :pag==2?
        <Content>
            <Preco/>
        </Content>
        :
        <Content>
            <Preco/>
        </Content>
        
    )
}

const Content=styled.div`
width: 100%;height:100vh;
display: flex;flex-direction:column;
justify-content:space-evenly;
button{cursor:pointer}
    align-items: center;
h1{color:#404F11;margin:10px 0 10px 0;font-size:22px;}
`
const Tipos=styled.div`
width:100%;height:80%;
flex-direction:column;
align-items:center;
justify-content:flex-start;

`
const Tipo=styled.div`
margin-bottom:15px;cursor:pointer;
border-radius:15px;
width:90%;height:120px;
flex-direction:column;
align-items:center;background:var(--caixa);
justify-content:flex-start;
max-width:600px;
h2{color:white;;margin:10px 0 10px 0}
h3{color:#404F11;margin:0;font-weight:500;}
h4{color:#404F11;margin:0;font-weight:400;font-size:}
`
