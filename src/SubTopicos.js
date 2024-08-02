import styled from "styled-components"
import { materia } from "./materia/topicos"
import { useNavigate, useParams } from "react-router-dom"
import CodeBlock from "./CodeBox"
import Menu from "./Menu"

export default function SubTopicos(){
    const {topico}=useParams()
    const topicoSelec=materia[topico-1]
    const {subtopicos}=topicoSelec
    const essenciais=subtopicos.filter((top)=>!top[1])
    const tamanhoPrim=essenciais.length
    const navigate=useNavigate()
    function buscarQtd(top){
        if(!top[3])return 0
        return top[3].length
    }
    return (
        <Tudo>
            <Menu numeros={[parseInt(topico)]}/>
            <h2>ESSENCIAIS:</h2>
            {essenciais.map((top,i)=><Topico liberado={top.length>=3} onClick={()=>{if(top.length>=3)navigate(`/${topico}/${i+1}`)}}>
            <section>{buscarQtd(top)||''}{buscarQtd(top)==0?'':' exercícios'}</section>
                <p>{top[0]}</p>
            </Topico>)}
            <h2>EXTRAS:</h2>
            {subtopicos.filter(t=>t[1]).map((top,i)=><Topico onClick={()=>{if(top.length>=3)navigate(`/${topico}/${i+1+tamanhoPrim}`)}}>
            <section>{buscarQtd(top)||''}{buscarQtd(top)==0?'':' exercícios'}</section>
                <p>{top[0]}</p>
            </Topico>)}
        </Tudo>
    )
}
const Tudo=styled.div`
width:100%;height:100%;
flex-direction:column;
h2{
color:#35A5AD;
font-size:18px;
margin:15px 0 0 0;;
}
`
const Topico=styled.div`
cursor:pointer;
position:relative;
width:90%;max-width:400px;
background-color:${p=>p.liberado?'white':'gray'};
height:80px;margin:20px 0 0 0;
border-radius:15px;
p{
margin-left:20px;font-size:19px;
}

section{color:blue;font-size:14px;font-weight:500;
position:absolute;bottom:10px;right:10px;
}
`