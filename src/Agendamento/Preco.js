import { useState } from "react"
import styled from "styled-components"

export default function Preco(){
    const tem= [1,2]
    const aul=[4,6,8,10,12,14]
    const sem= ['3 meses','2 meses','1 mês','2 semanas']
    const [tempo,setTempo]=useState(1)
    const [aulas,setAulas]=useState(6)
    const [semanas,setSemanas]=useState('1 mês')
    const tabela=[ 0.6 , 0.9 ,  1.2 , 1.6  ,]
    const precoAula=tempo==1?70:90
    const d_aulas=0.022*(aulas)
    const d_semanas=tabela[sem.indexOf(semanas)]
    const desconto=(d_aulas*d_semanas)*100
    const total=precoAula*aulas
    const descontoTotal=Math.ceil((total*d_aulas*d_semanas))
    const pacote=total-descontoTotal
    const preco=pacote/aulas
    
    return (
        <Tudo>
                <h2>Tempo de Aula</h2>
                <Listinha wid={110}>
                    {tem.map((a,i)=><Option wid={40} numero={a+'h'} selec={tempo==a} funcao={()=>setTempo(a)}/> )}
                </Listinha>
     
                <h2>Quantidade de Aulas</h2>
                <Listinha wid={250}>
                    {aul.map((a,i)=><Option wid={30} numero={a} selec={aulas==a} funcao={()=>setAulas(a)} />)}
                </Listinha>
                
                <h2>Duração</h2>
                <Listinha wid={390}>
                    {sem.map((a,i)=><Option wid={85} numero={a} selec={semanas==a} funcao={()=>setSemanas(a)}/>)}
                </Listinha>
                <Quadro>
                    <h4>desconto: {desconto.toFixed(0)}%</h4>
                    <h3>valor cada aula: <small>${precoAula}</small> ${(preco).toFixed(0)}</h3>
                    <h3>valor pacote: <small>${total}</small> ${pacote}</h3>
                    
                </Quadro>
                <Quadro color={'#b5edad'}>
                    <p>O valor é pago:</p> 
                    <p><strong>metade</strong> após a primeira aula</p>
                    <p><strong>metade</strong> após o prazo de duração</p>
                    <p><small>O prazo é apenas para o pagamento, as aulas podem ser realizadas sem tempo limite</small></p> 
                </Quadro>
        </Tudo>
    )
}//{}
const Quadro=styled.div`align-items:center;
flex-direction:column;padding-bottom:10px;
background-color:${p=>p.color||'white'};width:90%;
border-radius:10px;margin:25px 0 0 0;
`
function Option({selec,funcao,numero,wid}){
    return(
        <Ope wid={wid} selec={selec} onClick={funcao}>
            {numero}
        </Ope>
    )
}
const Ope=styled.div`
background-color:${p=>p.selec?'blue':'gray'};
width:${p=>p.wid}px;
height:30px;
border-radius:7px;
display:flex;cursor:pointer;color:white;
justify-content:center;align-items:center;
`

const Tudo=styled.div`max-width:450px;
width:90%;height:100%;
flex-direction:column;align-items:center;
h2{font-weight:600;margin:7px 0 7px 0;font-size:18px;
small{text-decoration: line-through;font-weight:600;font-size:18px;color:red}
}
h3{font-weight:600;margin:7px 0 7px 0;font-size:18px;
small{text-decoration: line-through;font-weight:600;font-size:18px;color:red}
}
h4{font-weight:600;margin:7px 0 7px 0;;color:green;font-size:18px;}
p{font-weight:400;margin:7px 0 7px 0;font-size:18px;
strong{font-weight:700;}
}
p{max-width:300px;
small{font-size:14px;}
}
`
const Listinha=styled.div`
max-width:${props=>props.wid}px;
width:95%;display:flex;justify-content:space-evenly;
`