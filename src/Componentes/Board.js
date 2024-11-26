import { useState,useEffect, useContext } from "react"
import styled from 'styled-components'
import { graphicMark } from "./timeUtils"


export default function Board({now,big,disponiveis,eventos}){

const daysNames=[/*'SUN',*/'SEG','TER','QUA','QUI','SEX',/*'SAT'*/]
const hours=[];for(let i=7;i<24;i++){hours.push(i)}
function separateHabits(){
        const habits=gerarEventos()
        let days=daysNames.map((name,index)=>({
            name,content:habits.filter((habit)=>habit.day===index+1)
        }))
        setDaysData(days)

}
function gerarEventos(){
    const l=[]
    for(let codigo of disponiveis){
        const dia=parseInt(codigo[0])
        const horaString=`${codigo[1]}${codigo[2]}`
        const horaInt=parseInt(horaString)
        const termino=horaInt+2
        const ocupado=eventos.includes(codigo)
        const habitData={
            title:[horaString,termino],
            begin:`${horaString}:05`,
            end:`${(horaInt+1).toString()}:55`,
            day:dia,
            ocupado}
        const data=graphicMark(habitData)
        if(dia>now.day||(dia==now.day&&data.floor>now.level*100))l.push(data)
    }
    return l
}
    const [daysData,setDaysData]=useState([])
    useEffect(separateHabits,[now])
    function definirData(day){
        const {d,m}=now.weeks[day]
        return`${d} / ${m}`
    }
    return (
        <Content big={big?100:50} bigH={big?50:100}>
            {daysData.map((day,index)=><Day>
                <Data>{definirData(index)}</Data>
                <h6>{daysNames[index]}</h6>
                {index===(now.day-1)?<NowIndicator level={now.level*5.88+10}><Tag>AGORA</Tag></NowIndicator>:<></>}
                {day.content.map((habit,i)=>{
                    const {floor,size,ocupado,title}=habit
                    return(
                    <Habit opac={ocupado?40:100} level={floor*0.0588+10} size={size*0.0588} 
                    color={'#719ef7'} 
                        onClick={()=>{}} >
                        <h1>{title[0]}<small>h - </small>{title[1]}<small>h</small></h1>
                    </Habit>
                )})}
            </Day>)}
        </Content>
    )
}
const Data=styled.div`
position:absolute;top:px;
`
const NowIndicator=styled.div`
height:5px;width:92%;background-color:red;
position:absolute;top:calc(${props=>props.level}% - 1.5px);z-index:4;
border-radius:2.5px

`
const Tag=styled.div`
position:absolute;color:red;
bottom:3px;font-weight:700;
`
const Habit=styled.div`
cursor:pointer;
border:0;opacity:${props=>props.opac}%;
background-color:${props=>props.color};
width:92%;height:${props=>props.size}%;
border-radius:7px;
display:flex;flex-direction:column;align-items:center;justify-content:center;
position:absolute;top:${props=>props.level}%;z-index:2;
h1{ text-align: center;font-family: 'PT Sans Narrow', sans-serif;
    font-size:14px;font-weight:500;
    small{font-size:10px;}
}
`

const Day =styled.div`
    width: 21.4%;
    height: 100%;
    margin-left: 0.9px;margin-right: 0.9px;
    
    background-color:#f7debb;
    display:flex;flex-direction:column;align-items:center;
    position:relative;
h6{font-size:16px;font-weight:500;margin:18px 0 0 0}

`
const Content=styled.div`
width:90%;max-width:450px;height:${p=>p.bigH}%;
box-sizing:border-box;
background-color: #d3b28b;
padding-left:11px;padding-right:11px;
position:relative;
overflow-y:hidden;


button{cursor:pointer}
`