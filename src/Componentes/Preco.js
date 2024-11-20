import { useState } from "react"
import styled from "styled-components"

export default function Preco(){
    const aul=[4,5,6,7,8,9,10]
    const sem= [8,6,4,2,1]
    const [aulas,setAulas]=useState(6)
    
    const [semanas,setSemanas]=useState(2)
    const tabela=[null,2.0,1.6,null,1.2,null,0.9,null,0.6]
    /////////////////// 1 // 2 ////// 4 /////// 6 /////// 8 
    const d_aulas=0.022*(aulas)
    const d_semanas=tabela[semanas]
    const total=75*aulas
    const desconto=Math.ceil((total*d_aulas*d_semanas))
    const pacote=total-desconto
    const preco=pacote/aulas
    
    return (
        <Tudo>
                <h2>Quantidade de Aulas</h2>
                <Listinha wid={250}>
                    {aul.map((a,i)=><Option numero={a} selec={aulas==a} funcao={()=>setAulas(a)}>{a}</Option>)}
                </Listinha>
                
                <h2>Duração em Semanas</h2>
                <Listinha wid={180}>
                    {sem.map((a,i)=><Option numero={a} selec={semanas==a} funcao={()=>setSemanas(a)}/>)}
                </Listinha>
                <Quadro>
                    <h2>$75 x {aulas} = ${total} </h2>
                    <h4>desconto: ${desconto}</h4>
                    <h3>novo valor: ${pacote}</h3>
                    <h2>cada aula sai a: ${(preco).toFixed(2)}</h2>
                </Quadro>
                <Quadro color={'#b5edad'}>
                    <p>O valor é pago da seguinte forma:</p> 
                    <p><strong>metade</strong> após a primeira aula</p>
                    <p><strong>metade</strong> após o prazo de duração</p>
                </Quadro>
        </Tudo>
    )
}//{}
const Quadro=styled.div`
flex-direction:column;padding-bottom:10px;
background-color:${p=>p.color||'white'};width:90%;
border-radius:10px;margin:25px 0 0 0;
`
function Option({selec,funcao,numero}){
    return(
        <Ope selec={selec} onClick={funcao}>
            {numero}
        </Ope>
    )
}
const Ope=styled.div`
background-color:${p=>p.selec?'blue':'gray'};
width:30px;height:30px;border-radius:50%;
display:flex;cursor:pointer;color:white;
justify-content:center;align-items:center;
`

const Tudo=styled.div`max-width:450px;
width:90%;height:100%;
flex-direction:column;align-items:center;
h2{font-weight:600;margin:7px 0 7px 0;font-size:18px;}
h3{font-weight:600;margin:7px 0 7px 0;color:blue;font-size:18px;}
h4{font-weight:600;margin:7px 0 7px 0;;color:green;font-size:18px;}
p{font-weight:400;margin:7px 0 7px 0;font-size:18px;
strong{font-weight:700;}
}
`
const Listinha=styled.div`
max-width:${props=>props.wid}px;
width:95%;display:flex;justify-content:space-evenly;
`