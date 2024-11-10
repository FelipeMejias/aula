import { useState,useEffect, useContext } from "react"
import styled from 'styled-components'
import { graphicMark } from "./timeUtils"

export default function Board({now}){

    const colorCodes=['#f7a471','#e8d361','#67e57e','#719ef7','#d3a1e0','#fca50f','#f45ace','#53ceed']
    const colorCodesDentro=['#f2bfa2','#e2d9aa','#aee5b7','#9db8ea','#debbe8','#fca50f','#f45ace','#53ceed']
    const colorNames=['red','yellow','green','blue','purple','orange','pink','aqua']

    const daysNames=['SUN','MON','TUE','WED','THU','FRI','SAT']
    const hours=[];for(let i=7;i<24;i++){hours.push(i)}
    function separateHabits(){
        const habits=gerarEventos()
        let days=daysNames.map((name,index)=>({
            name,content:habits.filter((habit)=>habit.day===index)
        }))
        setDaysData(days)

    }
    const eventos=[
        '317','516'
    ]
function gerarEventos(){
    const l=[]
    for(let k=1;k<6;k++){
        for(let w=8;w<23;w++){
            if(w!=12){
                const ocupado=eventos.includes(`${k}${w<10?`0${w}`:w}`)
                const habitData={
                    type:'every',
                    title:ocupado?null:`${w}`,
                    begin:`${w}:05`,//w.toString(),
                    end:`${w}:55`,//(w+1).toString(),
                    day:k,
                    color:ocupado?'red':'blue'}
                let data=graphicMark(habitData)
                console.log(data.floor,now.level)
                if(k>now.day||(k==now.day&&data.floor>now.level*100))l.push(data)
            }
        }
    }
    return l
}


const [daysData,setDaysData]=useState([])
    const days=daysData.map((day,index)=>{

        return(
            <Day >

                {index===(now.day)?<NowIndicator className="nowIndicator" level={now.level*5.88}></NowIndicator>:<></>}

                {day.content.map((habit,i)=>{
                    const {floor,size,color,title,tag,unic}=habit
                    const width='92'
                    const position=''
                    return(
                    <Habit unic={habit.unic?true:false} width={width} position={position} level={floor*0.0588} size={size*0.0588} color={colorCodes[colorNames.indexOf(color)]} colorInside={colorCodesDentro[colorNames.indexOf(color)]}
                        onClick={()=>{}} >
                        {title?<h1>{title}<small> h</small></h1>:<h1><small>x</small></h1>}
                    </Habit>
                )})}
            </Day>)
    })
    useEffect(separateHabits,[])
    return (
        <Content className="board">
            <ul>
                {days}
            </ul>
        </Content>
    )
}
const NowIndicator=styled.div`
height:3px;width:92%;background-color:red;
position:absolute;top:calc(${props=>props.level}% - 1.5px);z-index:5;
border-radius:1.5px
`
const Marks=styled.div`height:0.9px;width:100%;background-color:#d3b28b;
position:absolute;top:${props=>props.level}%;z-index:1;left:0;
span{color:#6b491a;position:absolute;top:3px;font-size:8px}
`

const Habit=styled.button`
box-shadow: -1.5px 1.5px 1.5px rgba(0, 0, 0, 0.15);
border:${props=>props.unic?`6px`:'0'} solid ${props=>props.color};
background-color:${props=>props.unic?props=>props.colorInside:props=>props.color};
    width:${props=>props.width}%;height:${props=>props.size}%;
    border-radius:7px;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    position:absolute;top:${props=>props.level}%;${props=>props.position};z-index:2;
    h1{ text-align: center;font-family: 'PT Sans Narrow', sans-serif;
    font-size:18px;font-weight:500;
    
    small{font-size:12px;}
    }
`

const Day =styled.div`
    width: 21.4%;
    height: 100%;
    margin-left: 0.9px;margin-right: 0.9px;
    
    background-color:#f7debb;
    display:flex;flex-direction:column;align-items:center;
    position:relative;


`
const Content=styled.div`
width:100%;height:100%;
box-sizing:border-box;
background-color: #d3b28b;
border:1.7px solid #6b491a;
border-top:14.5px solid #6b491a;
padding-left:11px;padding-right:11px;
border-radius: 1.5vh;
position:relative;
overflow-y:hidden;

ul{display:flex;width:90%;height:100%;
justify-content:center;align-items:flex-end;
}
button{cursor:pointer}
`