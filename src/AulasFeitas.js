import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom"
import { alunos } from "./aulas/gaveta"
import { useEffect, useState } from "react"
import SalaEspera from "./utils/SalaEspera"
import { user } from "./utils/storageDict"
//const exercicios=JSON.parse(localStorage.getItem('exercicios'))||[]
const alunoGenerico={nome:'convidado',aulas:[]}

export default function AulasFeitas(){
    const [aluno,setAluno]=useState(JSON.parse(localStorage.getItem(user))||alunoGenerico  )
      const navigate=useNavigate()
    return (aluno.nome=='convidado'?

        <SalaEspera setAluno={setAluno}/>:
        <Tudo>
            <Janela >
            {aluno.aulas.map((a,iAula)=><Topico>
                <Cab ><h6>{a.nome}</h6></Cab>
                <Caixa>
                {a.arquivos.map((arquivo,iArquivo)=>
                    <HoldSub>
                        <HoldImg><img src={arquivo.icone}/></HoldImg>
                        <Sub onClick={()=>navigate(`/aulas/${iAula+1}/${iArquivo+1}/${arquivo.linguagem}`)}>
                        <p>{arquivo.nome}</p>
                        </Sub>
                    </HoldSub>
                    )}
                </Caixa>
                
            </Topico>)}
              <ButSair onClick={()=>{
                 localStorage.setItem(user, JSON.stringify(alunoGenerico));
                 setAluno(alunoGenerico)
              }}>Sair</ButSair>
           </Janela>
        </Tudo>
    )
}
const ButSair=styled.div`
background-color:black;color:yellow;
width:100px;height:70px;border-radius:15px;
justify-content:center;align-items:center;
margin:15px 0 0 15px;cursor:pointer;
`
const Tudo=styled.div`
align-items:center;
width:100%;
height:calc(100% - 75px);
position:relative;
@media(min-width:750px){height:100%;}
`
const Janela=styled.article`
display:flex;
align-items:center;
width:100%;
height:100%;
padding:0px 0 20px 0;
box-sizing:border-box;
flex-direction:column;

@media(min-width:750px){
display:flex;
overflow:auto;
width:100%;
flex-direction:row;
align-items:flex-start;
}

`
const Topico=styled.article`
align-items:flex-start;
display:flex;
flex-direction:column;
cursor:pointer;
position:relative;
margin:15px 0 0 0;
background-color:#9fbf3f;
width:90%;max-width:400px;
min-width:250px;
max-width:250px;
border-radius:15px;
p{
margin:0px 0 0 0px;text-align:left;
}
h6{
margin:0 0 5px 0px;font-size:19px;font-weight:500;
}
aside{
display:flex;align-items:flex-end;justify-content:flex-start;
position:absolute;top:0px;right:0px;
height:40px;width:40px;img{height:18px;}
}
@media(max-width:500px){
margin:15px 0 0 5%;
}
@media(min-width:750px){
margin:15px 0 0 25px;
min-width:270px;
max-width:270px;
}

`
const Sub=styled.article`
background-color:#${p=>p.color};
color:${p=>p.tex};
width:180px;
padding:9px;
border-radius:4px;position:relative;
display:flex;align-items:center;

`

const HoldSub=styled.div`background-color:;
display:flex;
margin:0px 0 10px 5px;
`
const HoldImg=styled.div`
height:48px;width:48px;
justify-content:flex-end;align-items:center;
img{height:30px;}
`

const Cab=styled.div`width:100%;background-color:;
height:60px;padding-left:15px;align-items:center;
`
const Caixa=styled.div`background-color:;
flex-direction:column;
`

