import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function AulaG({a,iAula,path}){
    const navigate=useNavigate()
    return(
        <Aula >
            <Cab>
                <p>{a.nome}</p>
                <p><small>{a.data}</small></p>
            </Cab>
            <section>
                {a.arquivos.map((arquivo,iArquivo)=>
                    <Arq onClick={()=>navigate(path?`/cursos/react/${iAula+1}/${iArquivo+1}`:`/aulas/${iAula+1}/${iArquivo+1}`)}>
                        <img src={arquivo.icone}></img>
                        <h3>{arquivo.nome}</h3>
                    </Arq>)}
                
            </section>
        </Aula>
      
    )
}
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

width:90%;max-width:450px;
margin:15px 0 0 0;
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
max-width:${p=>p.vazio?'450px':'320px'};
}
`

const Arq=styled.article`background-color:;
display:flex;
align-items:center;
flex-direction:column;
align-items:center;
justify-content:center;
cursor:pointer;
width:25%;
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