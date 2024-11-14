import {useState,useEffect,useContext} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import dayjs from 'dayjs'
import styled from 'styled-components'
import Board from './Componentes/Board'
import Preco from './Componentes/Preco'
import Menu from './Menu'
import { disponiveis2, eventos2, listaAlunos } from './aulas/gaveta'
import Identifique from './Componentes/Identifique'
import { disponiveis, eventos } from "./aulas/gaveta";
export default function Agendar({comPrecos}){
    const navigate=useNavigate()
    const aluno=JSON.parse(localStorage.getItem('usuario'))
    const [now,setNow]=useState({day:null})
    const [now2,setNow2]=useState({day:null})
    
    function defineNow(){
        const nh=dayjs().format('HH:mm-d');
        const day=parseInt(nh[6])
        const level=parseInt(nh[0]+nh[1])+parseInt(nh[3]+nh[4])/60-7
        const h = dayjs();
        const weeks=[]
        for(let k=1;k<6;k++){
            if(k<day){
                const criado=h.subtract(day-k, 'day')
                const d = criado.date(); // Dia do mês
                const m = criado.month() + 1;
                weeks.push({d,m})
            }else if(k>day){
                const criado=h.add(k-day, 'day')
                const d = criado.date(); // Dia do mês
                const m = criado.month() + 1;
                weeks.push({d,m})
            }else{
                const d = h.date(); // Dia do mês
                const m = h.month() + 1;
                weeks.push({d,m})
            }
        }
        const weeks2=[]
        for(let k=8;k<13;k++){
            const criado=h.add(k-day, 'day')
            const d = criado.date(); // Dia do mês
            const m = criado.month() + 1;
            weeks2.push({d,m})
        }
        setNow({level,day,weeks})
        setNow2({day:0,level:0,weeks:weeks2})
    }
    
    useEffect(()=>{
        defineNow();
    },[])
    return(
        comPrecos?
        (<Content>
            <Menu />
            <Resto>
                <Preco/>
                <Board now={now}  />
            </Resto>
        </Content>
    ):(listaAlunos.includes(aluno)?
    <Content>

            <Menu />
            <Resto>
                <Board now={now} disponiveis={disponiveis} eventos={eventos} big={!comPrecos} />
                <Board now={now2} disponiveis={disponiveis2} eventos={eventos2} big={!comPrecos} />
            </Resto>
        </Content>
        :
        <Identifique nomeTentado={aluno}/>)
    )
}

const Content=styled.div`
width: 100%;height:100vh;
display: flex;flex-direction:column;
justify-content:space-evenly;
button{cursor:pointer}
    align-items: center;
`
const Resto=styled.div`
width:100%;height:calc(100% - 75px);
flex-direction:column;overflow:auto;
display:flex;
align-items:center;
justify-content:flex-start;
}
`


//background-color:#ba7f2e;
/*
<Passador>
                    <button onClick={()=>{if(page>1)setPage(page-1)}}>{'<'}</button>
                    <p>semana {page}</p>
                    <button onClick={()=>{if(page<3)setPage(page+1)}}>{'>'}</button>
                </Passador>
const Passador=styled.div`
width: 100%;height:50px;
display: flex;flex-direction:row;
justify-content:space-evenly;
button{cursor:pointer}
    align-items: center;
`*/