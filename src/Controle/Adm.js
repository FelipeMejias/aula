import {useState,useEffect,useContext} from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { alunos } from "../aulas/gaveta"
export default function Adm(){
    
    const [tentando,setTentando]=useState(false)
    const [escolhido,setEscolhido]=useState(-1)
    const [texto,setTexto]=useState('')
    const [errado,setErrado]=useState('')
    const navigate=useNavigate()
    return(
        <Content>
            <Quadro>
               {alunos.map((al,i)=><Al 
               onClick={()=>{navigate(`/adm/${al.nome}`)}}>
                   {`${al.nome}`}
                 
                   {tentando&&i==escolhido?
                   <Holder>
                 <Botao >
                       OK
                   </Botao></Holder>:<></>}
               </Al>)}
            </Quadro>
        </Content>
        
    )
}

const Content=styled.div`
width: 100%;height:100vh;
display: flex;flex-direction:column;
justify-content:space-evenly;
align-items: center;
h1{color:#404F11;margin:10px 0 10px 0;font-size:22px;}
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
