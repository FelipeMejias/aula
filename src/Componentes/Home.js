import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom"
import Menu from "./Menu"
import Identifique from "./Identifique"
import { gaveta, listaAlunos } from "../aulas/gaveta"
export default function Home(){
    const navigate=useNavigate()
    const params=useParams()
    const aluno=params.aluno||''
    const info=gaveta[listaAlunos.indexOf(aluno)]
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
                    <img src={arquivo.icone}></img>
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
        <Identifique nomeTentado={aluno}/>
    )
}
const Tudo=styled.div`
width:100%;height:100%;
flex-direction:column;
div{
align-items:center;
}
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

width:90%;max-width:450px;
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
height:calc(100vh - 64px);width:100vw;
flex-direction:column;
overflow:hidden;
overflow-y:scroll;
`