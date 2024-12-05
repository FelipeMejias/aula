import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import js from '../_imgs/js.png'
import re from '../_imgs/react.png'
import nd from '../_imgs/node.png'
import py from '../_imgs/python.png'
import fe from '../_imgs/fe.png'
import sq from '../_imgs/sql.jpg'
import Arrow from './Arrow'

export default function FEvsBE({}){
    const navigate=useNavigate()
    const {aluno}=useParams()||'convidado'
    return (
        <Tudo>
             <div
      style={{
        position: "relative",
        width: "500px",
        height: "300px",
      }}
    >
      {/* Renderizando duas setas */}
      <Arrow x1={50} y1={50} x2={200} y2={150} />
      <Arrow x1={200} y1={150} x2={300} y2={50} />
    </div>
           <Back>
            <h2>Back-end</h2>

           </Back>
           <Fronts>
                <Front>
                <h2>Front-end</h2>
                <img src={fe}/>
                </Front>
                <Front>
                <h2>Front-end</h2>
                </Front>
           </Fronts>
           <Banco>
           <h2>Banco de Dados</h2>
            </Banco>
        </Tudo>
    )
}

const Tudo=styled.div`
position:relative;
width:100%;height:100%;
h2{margin:10px 0 10px 0;font-size:18px;font-weight:500;
width:100%;
}
`
const Back=styled.div`
width:60%;height:40%;
border-radius:10px;
background-color:#eaa63f;
position:absolute;bottom:30px;right:30px;
`
const Fronts=styled.div`
width:60%;height:40%;
justify-content:space-evenly;
position:absolute;top:30px;right:30px;
`
const Front=styled.div`
img{width:80%}
width:30%;height:100%;
border-radius:10px;
flex-direction:column;
align-items:center;
background-color:#74ea6e;
`
const Banco=styled.div`
width:25%;height:40%;
border-radius:10px;
background-color:#45d1d8;
position:absolute;bottom:30px;left:30px;
`
