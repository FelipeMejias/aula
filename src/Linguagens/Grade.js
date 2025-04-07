import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import js from '../_imgs/js.png'
import re from '../_imgs/react.png'
import nd from '../_imgs/node.png'
import py from '../_imgs/python.png'
import fe from '../_imgs/posts.png'
import fe2 from '../_imgs/posts2.png'
import fe3 from '../_imgs/posts3.png'
import fe4 from '../_imgs/posts4.png'
import sq from '../_imgs/sql.jpg'
import Arrow from './Arrow'

export default function Grade({}){

  const navigate=useNavigate()
  const {aluno}=useParams()||'convidado'
  return (
    <Tudo>
        <Bloco>
            <h1>Variáveis</h1>
            <Rota t={120} l={30}>Number</Rota>
            <Rota t={120} l={30}>String</Rota>
            <Rota t={120} l={30}>Boolean</Rota>
        </Bloco>
        <Bloco>
            <h1>Função</h1>
            <Rota t={120} l={30}>Number</Rota>
        </Bloco>
        <Bloco>
            <h1>Direcionadores</h1>
            <Rota t={120} l={30}>if/else</Rota>
            <Rota t={120} l={30}>return</Rota>
            <Rota t={120} l={30}>Loops</Rota>
            <Rota t={120} l={30}>try/Catch</Rota>
            <Rota t={120} l={30}>async/await</Rota>
        </Bloco>
    </Tudo>
  )
}

const Tudo=styled.div`
position:;background:;border-radius:70px;
left:0;
height:100%;
min-width:160vh;
min-width:1090px;
h2{margin:10px 0 10px 0;font-size:18px;font-weight:500;
}
`
const Holder=styled.div`
width:42%;height:30%;max-width:300px;
justify-content:space-between;
`
const Rota=styled.div`
justify-content:center;
align-items:center;
width:250px;height:50px;
border-radius:10px;
background-color:white;
position:absolute;
bottom:${p=>p.t}px;left:${p=>p.l}px;
`