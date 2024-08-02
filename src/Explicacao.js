import styled from "styled-components"
import { materia } from "./materia/topicos"
import { useParams } from "react-router-dom"
import CodeBlock from "./CodeBox"
import { useState } from "react"
import Menu from "./Menu"
export default function Explicacao(){
    const {topico,subtopico}=useParams()
    const top=materia[topico-1]
    const subtop=top.subtopicos[subtopico-1]
    const [num,setNum]=useState(0)
    return (
        <Tudo>
            <Menu numeros={[parseInt(topico),parseInt(subtopico)]}/>
            <main>
            <Esq>
                <h1>{subtop[0]}</h1>
                <ListaEx>
                {subtop[3]?.map((tex,index)=><Exercicio aberto={num==index} onClick={()=>setNum(index)}>
                    <p>Exercicio {index+1}</p>
                </Exercicio>)}
                </ListaEx>
                {subtop[3]?<Aberto>
                    <p>{subtop[3][num]}</p>
                </Aberto>:<></>}
            </Esq>
            <Dir>
                <CodeBlock texto={subtop[2]} />
            </Dir>
            </main>
        </Tudo>
    )
}
const Tudo=styled.div`
width:100%;height:100%;
flex-direction:column;
main{width:100%;
height:calc(100% - 64px);
display:flex;
align-items:center;
}
h2{
color:#35A5AD;
font-size:18px;
margin:15px 0 0 0;;
}
`
const Esq=styled.div`
height:100%;width:calc(100% - 610px);
flex-direction:column;
`
const Dir=styled.div`
height:100%;width:600px;
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
