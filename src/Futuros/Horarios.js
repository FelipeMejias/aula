import {useState,useEffect,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import styled from 'styled-components'
import Board from './Board'
import Menu from '../Componentes/Menu'
	
export default function Horarios(){
    const navigate=useNavigate()
    const [myHabits,setMyHabits]=useState([])
    const [popUp,setPopUp]=useState('')
    const [error,setError]=useState('')
    const [loadingEvents,setLoadingEvents]=useState(false)

    function defineNow(){
        const now=dayjs().format('HH:mm-d');
        const day=parseInt(now[6])
        const level=parseInt(now[0]+now[1])+parseInt(now[3]+now[4])/60
        setNow({level,day})
        return {level,day}
    }
    const [now,setNow]=useState({day:null,scrollIndex:null})

    function findHabits(){
        setLoadingEvents(true)
        const habits=JSON.parse(localStorage.getItem("habits"))||[]
        
        setMyHabits(habits)
        setLoadingEvents(false)
    }
    

    useEffect(()=>{
        findHabits()
        defineNow()
        setInterval(defineNow,60000)
    },[])


    const [dayNames,setDayNames]=useState([])
    useEffect(()=>{
        setDayNames(['DOM','SEG','TER','QUA','QUI','SEX','SAB'])
    },[])

    return(
        <Content>
            
            <Menu/>
            <BoardContainer>
                    <NamesBoard>
                        {dayNames.map(word=>(
                            <div><p>{word}</p></div>
                        ))}
                    </NamesBoard>
                    <Board now={now} habits={myHabits}  setPopUp={setPopUp} />
            </BoardContainer>
        </Content>
    )
}
const NamesBoard=styled.div`
p{
    font-size:13px;
    color:#CC9139;
}
div{display:flex;justify-content:center;width:100%;margin:1.15px 0 0 0}
display:flex;
width:calc(100% - 25.4px);height:14.5px;position:absolute;z-index:12;left:12px;
`


//background-color:#ba7f2e;
const Button=styled.button`display:flex;justify-content:space-evenly;align-items:center;
width:100px;
height:68px;
border-radius:20px;position:relative;flex-direction:column;
background-color: transparent;
color:#6b491a;
font-size:20px;border:0vh solid black;
h6{font-size:15px;font-weight:700}
ion-icon{font-size:40px}
@media(min-width:900px){
    margin-bottom:10px
}
`
const Header=styled.section`height:90px;
;width:95vw;display:flex;margin:0 0 0px 0;
justify-content:space-between;align-items:center;
span{font-family: 'Amatic SC', cursive;};
h5{;font-size:50px;}
strong{
    font-size:40px
}

@media(min-width:900px){
    display:none
}
`
const HeaderBigScreen=styled.section`
width:140px;height:94vh;display:flex;margin:0 0 10px 0;flex-direction:column;
justify-content:flex-start;align-items:center;
span{font-family: 'Amatic SC', cursive;};
h5{;font-size:50px;}
strong{
    font-size:40px
}

@media(max-width:900px){
    display:none
}
`
const BoardContainer=styled.section`
width:95vw;height:calc(100vh - 30px);display:flex;justify-content:space-between;flex-wrap:wrap;

`
const Content=styled.div`
width: 100%;height:100vh;
background-color: #cc9139;
display: flex;flex-direction:column;
justify-content:space-evenly;
button{cursor:pointer}
    align-items: center;
`