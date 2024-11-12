import {useState,useEffect,useContext} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import dayjs from 'dayjs'
import styled from 'styled-components'
import Board from './Componentes/Board'
import Preco from './Componentes/Preco'
import Menu from './Menu'
	
export default function Agendar(){
    const navigate=useNavigate()
    const [page,setPage]=useState(1)
    const {aluno}=useParams()
    const [myHabits,setMyHabits]=useState([])
    const [now,setNow]=useState({day:null,scrollIndex:null})
    function defineNow(){
        const now=dayjs().format('HH:mm-d');
        const day=parseInt(now[6])
        const level=parseInt(now[0]+now[1])+parseInt(now[3]+now[4])/60-7
        setNow({level,day})
    }
    function findHabits(){
        const habits=JSON.parse(localStorage.getItem("habits"))||[]
        setMyHabits(habits)
    }
    useEffect(()=>{
        findHabits();defineNow();setInterval(defineNow,60000)
    },[])
    return(
        <Content>
            <Menu aluno={aluno||'convidado'}/>
            <Resto>
                <Preco/>
                <Board now={now} habits={myHabits}  />
            </Resto>
        </Content>
    )
}
//background-color:#ba7f2e;
const Content=styled.div`
width: 100%;height:100vh;
display: flex;flex-direction:column;
justify-content:space-evenly;
button{cursor:pointer}
    align-items: center;
`
const Resto=styled.div`
width:100%;height:calc(100% - 75px);
flex-direction:row;overflow:auto;
display:flex;
align-items:center;
justify-content:flex-start;
}
`