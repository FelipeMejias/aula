import styled from "styled-components"
import { materia } from "../materiaPython/topics"
import { useNavigate } from "react-router-dom"
import Menu from "../Menu"

export default function Topicos(){
    function buscarQtd(subs){
        let soma=0
        for(let sub of subs){
            if(sub[3]){
                soma+=sub[3].length
            }
        }
        return soma
    }
    const navigate=useNavigate()
    return (
        <Tudo>
            <Menu numeros={[]}/>
            {materia.map((top,index)=><Topico onClick={()=>navigate(`/${index+1}`)}>
                <p>{top.nome}</p>
                <aside>{top.tempo} min</aside>
                <section>{buscarQtd(top.subtopicos)||''}{buscarQtd(top.subtopicos)==0?'':' exercícios'}</section>
            </Topico>)}
        </Tudo>
    )
}
const Tudo=styled.div`
width:100%;height:100%;
flex-direction:column;
`
const Topico=styled.div`
cursor:pointer;
position:relative;
width:90%;max-width:400px;
background-color:white;
height:80px;margin:15px 0 0 0;
border-radius:15px;
p{
margin-left:20px;font-size:19px;
}
aside{color:gray;font-size:14px;font-weight:500;
position:absolute;top:10px;right:10px;
}
section{color:blue;font-size:14px;font-weight:500;
position:absolute;bottom:10px;right:10px;
}
`