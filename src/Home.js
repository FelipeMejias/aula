import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom"
import Menu from "./Menu"
import { useState } from "react"
import { centralAulas } from "./aulasPassadas/central"
import file from './imgs/file.png'
import papel from './imgs/notass.jpg'
import novo from './imgs/novo.png'
const listaAlunos=['clarissa','antonio','victoria']
export default function Home(){
    const navigate=useNavigate()
    
    const {aluno}=useParams()
    const info=centralAulas[listaAlunos.indexOf(aluno)]
    console.log(info)
    function listaVazios(){
        const resp=[]
        for(let k=0;k<info.length;k++)resp.push([])
            return resp
    }
    const [title,setTitle]=useState('')
    //const [notas,setNotas]=useState(JSON.parse(listaAlunos.includes(aluno)?(localStorage.getItem("notas")||listaVazios()):false))
    return (
        listaAlunos.includes(aluno)?
        <Tudo>
            <Menu />
            <Resto>
            {info.map((aula,iAula)=>
            <Aula>
                <Cab>
                <p>{aula.titulo}</p>
                <p><small>{aula.data}</small></p>
                </Cab>
                
                <section>
                {aula.arquivos.map((arquivo,iArquivo)=><Arq onClick={()=>navigate(`/${aluno}/aula${iAula+1}/arquivo${iArquivo+1}`)}>
                    <img src={file}></img>
                    <h3>{arquivo.titulo}</h3>
                </Arq>)}
                {/*[][iAula].map((arquivo,iArquivo)=><Arq onClick={()=>navigate(`/${aluno}/aula${iAula+1}/arquivo${iArquivo+1}`)}>
                    <img src={papel}></img>
                    <h3>{arquivo.titulo}</h3>
                </Arq>)}
                <Arq onClick={()=>navigate(`/`)}>
                    <img src={novo}></img>
                    <h3><strong></strong></h3>
                </Arq>*/}
                </section>
                
            </Aula>)}
            </Resto>
        </Tudo>
        :
        <Tudo>
            <Novo>
                <h1>Seu nome:</h1>
                <input onChange={(e)=>setTitle(e.target.value)} placeholder='' value={title}></input>
                <button onClick={()=>navigate(`/${title.toLowerCase()}`)}>Entrar</button>
            </Novo>
        </Tudo>
    )
}
const Tudo=styled.div`
width:100%;height:100%;
flex-direction:column;
`
const Novo=styled.div`
height:80%;width:80%;margin-top:10%;
border-radius:25px;color:white;
flex-direction:column;justify-content:center;
input{
    height:28px;width:200px;border-radius:5px;
        background-color:white;color:black;
        font-size:17px;border:0px solid #6B491A;
        padding-left:6px}
button{cursor:pointer;
    height:28px;width:100px;border-radius:5px;
        background-color:green;color:white;
        font-size:17px;border:0px;margin:30px 0 0 0;}
background-color:#35a5ad;
`
const Cab=styled.div`
background-color:#d9dbad;width:100%;
border-top-left-radius:15px;
border-top-right-radius:15px;
justify-content:space-between;
padding:0 10px 0 10px;
p{small{13px}
font-size:18px;margin:5px 0 7px 0px;
}
`
const Aula=styled.article`
display:flex;
flex-direction:column;
align-items:flex-start;

width:90%;max-width:500px;
background-color:white;
margin:15px 0 0 0;
border-radius:15px;

section{width:100%;background-color:;
display:flex;min-height:80px;
align-items:center;margin:5px 0 5px 0;
flex-wrap:wrap;
}
`

const Arq=styled.div`background-color:;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:center;
cursor:pointer;
width:100px;
height:70px;
border-radius:15px;
margin-left:10px;
img{
height:50%;
}
h3{margin:0 0 0 0;
font-size:16px;font-weight:300;min-width:100%;
strong{
color:green;font-weight:300;
}
}
`
const Resto=styled.div`
height:calc(100vh - 64px);width:100vw;
flex-direction:column;
overflow:hidden;
overflow-y:scroll;
`