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

export default function FEvsBE({}){

  const navigate=useNavigate()
  const {aluno}=useParams()||'convidado'
  return (
    <Tudao>
    <Tudo>
    
      <Back >
        <h2>Back-end</h2>
        <Rota t={100} l={30}>
          Rota: POST publicacoes
        </Rota>
        <Rota t={27} l={465}>
        Rota: GET publicacoes
        </Rota>
      </Back>
      <Fronts>
      <Arrow x1={9} x2={9} y1={45} y2={65} />
      <Arrow x1={31} x2={31} y1={65} y2={45} />
      <Arrow x1={69} x2={69} y1={45} y2={80} />    
      <Arrow x1={91} x2={91} y1={80} y2={45} />        <Holder>
        <Front>
          <h2>Front-end</h2>
          <Quadrado>
            <img src={fe3}/>
          </Quadrado>
        </Front>
        <Front>
          <h2>Front-end</h2>
          <Quadrado>
            <img src={fe4}/>
          </Quadrado>
          
        </Front>
        </Holder>
        <Holder>
        <Front>
          <h2>Front-end</h2>
          <Quadrado>
            <img src={fe}/>
          </Quadrado>
        </Front>
        <Front>
          <h2>Front-end</h2>
          <Quadrado>
            <img src={fe2}/>
          </Quadrado>
        </Front>
        </Holder>
      </Fronts>
      <Bancao>
      <Banco>
        <h2>Banco de Dados</h2>
      </Banco>
      <Arrow x1={28} x2={16} y1={39} y2={39} />
      <Arrow x1={71} x2={16} y1={74} y2={74} />
      </Bancao>
      
    </Tudo>
    </Tudao>
  )
}
const Quadrado=styled.div`
border-radius:5px;
flex-direction:column;
align-items:center;
position:relative;
width:100%;height:calc(100% - 30px);
background:#55C64F;
img{
width:100%;
border-bottom-right-radius:10px;
border-bottom-left-radius:10px;
}
`
const Tudo=styled.div`
position:;background:;border-radius:70px;
left:0;
height:100%;
min-width:160vh;
min-width:1090px;
h2{margin:10px 0 10px 0;font-size:18px;font-weight:500;
width:100%;
}
`
const Tudao=styled.div`
justify-content:center;
position:relative;
overflow:auto;
width:100%;height:100%;
`
const Holder=styled.div`
width:42%;height:30%;max-width:300px;
justify-content:space-between;
`
const Back=styled.div`
width:740px;height:40%;
border-radius:10px;
background-color:#eaa63f;
position:absolute;bottom:30px;left:300px;
`
const Fronts=styled.div`
width:740px;height:90%;
justify-content:space-between;
position:absolute;top:30px;left:300px;
`
const Front=styled.div`
width:47.5%;height:100%;
border-radius:10px;
flex-direction:column;
align-items:center;
background-color:#74ea6e;
`
const Banco=styled.div`
width:200px;height:100%;
border-radius:10px;
background-color:#45d1d8;
position:absolute;bottom:0px;left:0px;
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
const Bancao=styled.div`
width:1010px;height:40%;background:;
position:absolute;bottom:30px;left:30px;
`