import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function AulaP({a,iAula,aula,arquivo,path}){
    console.log(a,iAula,aula,arquivo,path)
    const navigate=useNavigate()
    return(
        <Aula >
            <Cab>
                <p>{a.nome}</p>
                <p><small>{a.data}</small></p>
            </Cab>
            <Caixa>
                {a.arquivos.map((arq,iArquivo)=>
                    <Arq onClick={()=>navigate(path?`/cursos/react/${iAula+1}/${iArquivo+1}`:`/aulas/${iAula+1}/${iArquivo+1}`)} sel={aula==iAula+1&&arquivo==iArquivo+1}>
                        <img src={arq.icone}></img>
                        <p>{arq.nome}</p>
                    </Arq>)}
            </Caixa>
        </Aula>
    )
}

const Caixa=styled.div`background-color:;
flex-direction:column;align-items:center;
width:100%;
flex-direction:column;
display:flex;align-items:center;
justify-content:flex-start;
`
const Arq=styled.article`
box-sizing:border-box;margin-top:3px;
text-align:left;text-align: left;
width:92%;
border-radius:4px;padding:6px;
display:flex;align-items:center;
background:${p=>p.sel?'#4787B2': 'transparent'};color:${p=>p.sel?'white': 'black'} ;
border-radius: 60px;
transition: background-color 0.2s ease;
img{padding:5px;background-color:white;
    height:20px;border-radius:50%;
    margin-right:7px;
}
:hover {

}
`
const Aula=styled.div`
align-items:center;
display:flex;
flex-direction:column;
cursor:pointer;
position:relative;
width:90%;max-width:350px;
max-width:200px;
margin:15px 0 0 0;
background-color:white;
min-height:${p=>p.alt}px;
padding-bottom:7px;
border-radius:15px;
p{
margin:0px 0 0 0px;text-align:left;
}
h6{
margin:0 0 5px 0px;font-size:19px;font-weight:500;
}
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