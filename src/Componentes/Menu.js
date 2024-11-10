import { useNavigate, useParams } from "react-router-dom"
import styled, { ThemeConsumer } from "styled-components"
import { useState } from "react"
import iconeAgendar from '../imgs/agendar.png'
import iconeMateria from '../imgs/materia.png'
import iconeLivro from '../imgs/livro.png'
export default function Menu({copia}){
    const {aluno}=useParams()
    let alunoM=aluno[0].toUpperCase()
    for(let k=1;k<aluno.length;k++)alunoM+=aluno[k]
    const navigate=useNavigate()
        const [copiado, setCopiado] = useState(false);
        function copiarTexto(){
          navigator.clipboard.writeText(copia)
            .then(() => {
              setCopiado(true);
              setTimeout(() => setCopiado(false), 2000); // Reset feedback após 2 segundos
            })
            .catch(err => console.error('Erro ao copiar o texto: ', err));
        };
    return (
        <Tudo transp={copia}>
            {/*
            <Botao onClick={()=>navigate(`/horarios`)}>
                <p>Horários</p>
            </Botao>
            <Botao onClick={()=>navigate(`/`)}>
                <p>Matéria</p>
            </Botao>
            {numeros.length>=1?
            <Seta>{'>'}</Seta>:<></>}
            {numeros.length>=1?
            <Botao onClick={()=>navigate(`/${numeros[0]}`)}>
                <p>{materia[numeros[0]-1].nome}</p>
            </Botao>:<></>}
            {numeros.length>=2?
            <Seta>{'>'}</Seta>:<></>}
            {numeros.length>=2?
            <Botao onClick={()=>navigate(`/${numeros[0]}/${numeros[1]}`)}>
                <p>{materia[numeros[0]-1].subtopicos[numeros[1]-1][0]}</p>
            </Botao>:<></>}
*/}


        {!copia?
        <Real>
            <Botao im={36} onClick={()=>navigate(`/${aluno}`)}>
                <img src={iconeMateria}/>
                <h2>Aulas Feitas</h2>
                <h3>ver material</h3>
            </Botao>
            <Botao im={42} onClick={()=>navigate(`/${aluno}/materia`)}>
                <img src={iconeLivro}/>
                <h2>Conteúdo</h2>
                <h3>{
aluno=='antonio'?'javascript':
aluno=='victoria'?'javascript':
aluno=='clarissa'?'python':''
            }</h3>
            </Botao>
            {/*<Botao im={42} onClick={()=>navigate(`/${aluno}/horarios`)}>
                <img src={iconeAgendar}/>
                <h2>Aulas Marcadas</h2>
                <h3>horários disponíveis</h3>
            </Botao>*/}
        </Real>:
        <ButCop onClick={copiarTexto}>
            {copiado ? 'Texto copiado!' : 'Copiar Texto'}
        </ButCop>}
    </Tudo>
    )
}
const ButCop=styled.div`
justify-content:center;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
width:120px;
:hover {
  background-color: #45a049;
}
`
const Tudo=styled.div`
div{
align-items:center;
}
width:100%;height:100%;height:75px;
background-color:${props=>props.transp?'transparent':'#35a5ad'};
justify-content:center;
`
const Real=styled.div`
width:100%;max-width:320px;height:100%;
justify-content:space-between;
`
const Botao=styled.div`background-color:;flex-direction:column;
cursor:pointer;width:150px;line-height:19px;
margin:0 10px 0 10px;
justify-content:${props=>props.im==71?'flex-start':'flex-end'};
color:white;font-size:17px;height:75px;

img{max-height:${props=>props.im}px;position:fixed;top:${props=>props.im==42?3:5}px}

h2{height:15px;color:white;display:flex;font-size:16px;font-weight:500;margin:0 0 0 0;justify-content:${props=>props.im==70?'flex-start':'flex-end'};}
h3{display:flex;font-size:14px;font-weight:300;margin:0 0 0 0;justify-content:${props=>props.im==70?'flex-start':'flex-end'};}


aside{
    display:flex;flex-direction:column;
    justify-content:${props=>props.im==70?'flex-start':'flex-end'};
    height:60%;width:150px;
    
}
`
