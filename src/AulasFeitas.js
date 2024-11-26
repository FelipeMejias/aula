import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom"
import Identifique from "./Componentes/Identifique"
import { gaveta, listaAlunos } from "./aulas/gaveta"
import { useEffect } from "react"
import novoExercicio from './imgs/novo.png'
import file from './imgs/file.png'
export default function AulasFeitas(){
    const navigate=useNavigate()
    const aluno=JSON.parse(localStorage.getItem('usuario'))
    const info=gaveta[listaAlunos.indexOf(aluno)]
    const exercicios=JSON.parse(localStorage.getItem('exercicios'))||[]
    function tamanho(qtd){
        if(qtd<5){
            return 1
        }else if(qtd<9){
            return 2
        }else{
            return 3
        }
    }
    return (
        listaAlunos.includes(aluno)?
<Tudo>
        {aluno=='clarissa'?<Aula ab={20+tamanho(exercicios.length+1)*120}>
            <Cab>
                <p>Exercícios</p>
            </Cab>
            <section>
                <Arq onClick={()=>navigate(`/aulas/${aluno}/adicionar`)}>
                    <img src={novoExercicio}></img>
                    <h3>Adicionar exercício</h3> 
                </Arq>
                {exercicios.map((arquivo,iArquivo)=>
                    <Arq onClick={()=>navigate(`/aulas/${aluno}/exercicios/arquivo${iArquivo+1}`)}>
                        <img src={file}></img>
                        <h3>{arquivo.titulo}</h3>
                    </Arq>)}
            </section>
        </Aula>:<></>}
        {info.map((aula,iAula)=>
            <Aula ab={20+tamanho(aula.arquivos.length)*120}>
                <Cab>
                    <p>{aula.titulo}</p>
                    <p><small>{aula.data}</small></p>
                </Cab>
                <section>
                    {aula.arquivos.map((arquivo,iArquivo)=>
                        <Arq onClick={()=>navigate(`/aulas/${aluno}/aula${iAula+1}/arquivo${iArquivo+1}`)}>
                            <img src={arquivo.icone}></img>
                            <h3>{arquivo.titulo}</h3>
                        </Arq>)}
                </section>
            </Aula>
        )}
</Tudo>
:
<Identifique nomeTentado={aluno}/>
    )
}
const Tudo=styled.div`
width:100%;height:100%;
flex-direction:column;
`
const Cab=styled.div`
align-items:center;
background-color:#d9dbad;width:100%;
border-top-left-radius:15px;
border-top-right-radius:15px;
justify-content:space-between;
padding:0 10px 0 10px;
p{small{13px}
font-size:18px;margin:5px 0 7px 0px;
}
`
const Aula=styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;

min-height:${p=>p.ab}px;
width:90%;max-width:450px;
margin:15px 0 0 calc(50% - 225px);
background-color:white;
border-radius:15px;

section{width:100%;background-color:;
display:flex;min-height:80px;
align-items:center;margin:5px 0 5px 0;
flex-wrap:wrap;
}
@media(max-width:500px){
margin:15px 0 0 5%;
}
@media(min-width:750px){
margin:15px 0 0 calc(50% - 225px);
}
`

const Arq=styled.div`background-color:;
display:flex;
align-items:center;
flex-direction:column;
align-items:center;
justify-content:center;
cursor:pointer;
width:90px;
height:100px;
border-radius:15px;
margin-left:10px;
img{
height:40px;margin-bottom:5px;
}
h3{margin:0 0 0 0;line-height:14px;height:30px;
font-size:14px;font-weight:300;min-width:100%;
strong{
color:green;font-weight:300;
}
}
`
const Resto=styled.div`
align-items:flex-start;
height:calc(100vh - 75px);width:100%;
flex-direction:column;
overflow:hidden;
overflow-y:scroll;
@media(min-width:750px){
height:100%;
}
`
/*[][iAula].map((arquivo,iArquivo)=><Arq onClick={()=>navigate(`/${aluno}/aula${iAula+1}/arquivo${iArquivo+1}`)}>
                    <img src={papel}></img>
                    <h3>{arquivo.titulo}</h3>
                </Arq>)}
                <Arq onClick={()=>navigate(`/`)}>
                    <img src={novo}></img>
                    <h3><strong></strong></h3>
                </Arq>*/