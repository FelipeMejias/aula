import styled from "styled-components"
import { python } from "../aulas/python"
import { javascript } from "../aulas/javascript"
import { useParams } from "react-router-dom"
import CodeBlock from "../Cursos/CodeBox"
import { useState } from "react"
export default function Explicacao(){
    const {topico,subtopico,materia}=useParams()
    const materiaEscolhida=(
        materia=='python'?python:
        materia=='javascript'?javascript:[]
    )
    const top=materiaEscolhida[topico-1]
    const subtop=top.subtopicos[subtopico-1]
    const [num,setNum]=useState(0)
    
    
    return (
        <Tudo>
            <h1>{subtop.nome}</h1>
            <main>
            <Esq>
                <ListaEx>
                {subtop.exer?.map((tex,index)=><Exercicio aberto={num==index} onClick={()=>setNum(index)}>
                    <p>Exercicio {index+1}</p>
                </Exercicio>)}
                </ListaEx>
                {subtop.exer?<Aberto>
                    <p>{subtop.exer[num]}</p>
                </Aberto>:<></>}
            </Esq>
            <Dir>
                <CodeBlock texto={texto} />
            </Dir>
            </main>
        </Tudo>
    )
}
const Tudo=styled.div`
width:100%;height:100%;
flex-direction:column;
main{
width:100%;
height:calc(100% - 50px);
display:flex;
align-items:center;
}
h2{
color:#35A5AD;
font-size:18px;
margin:15px 0 0 0;;
}
h1{height:40px;
font-size:22px;
margin:15px 0 0 0;;
}

@media(max-width:1000px){
main{flex-direction: column-reverse}
}

`
const Esq=styled.article`
background-color:green;
max-height:100vh;width:calc(100% - 610px);
flex-direction:column;height:100px;

display:none;
`
const Resto=styled.div`
height:calc(100% - 75px);width:100%;
flex-direction:column;
overflow:auto;
`
const Dir=styled.div`
max-height:100%;width:600px;
flex-direction:column;
`
const ListaEx=styled.div`
width:90%
`
const Exercicio=styled.div`
cursor:pointer;
position:relative;
width:140px;
background-color:${p=>p.aberto?'#216d72':'white'};
color:${p=>p.aberto?'white':'black'};
height:80px;margin:20px 10px 0 0;
border-radius:15px;
p{
margin-left:20px;font-size:19px;
}

`
const Aberto=styled.div`
flex-direction:column;
cursor:pointer;
position:relative;
width:90%;
text-align: left;
line-height:18px;
box-sizing:border-box;
background-color:white;
height:280px;margin:20px 10px 0 0;
border-radius:15px;
p{
margin-left:0px;font-size:19px;
}
`
