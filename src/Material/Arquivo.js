import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { gaveta, listaAlunos } from "../aulas/gaveta"
import set from '../_imgs/setaback.png'
export default function Arquivo({aulaArq}){
  const navigate=useNavigate()
  const aluno=JSON.parse(localStorage.getItem('usuario'))
    const params=useParams()
    const aula=params.aula||aulaArq[0]
    const arquivo=params.arquivo||aulaArq[1]
    const info=gaveta[listaAlunos.indexOf(aluno)][aula-1]?.arquivos[arquivo-1]

    const [copiado, setCopiado] = useState(false);
    

  
  function copiarTexto(){
    navigator.clipboard.writeText(texto)
      .then(() => {
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2000); // Reset feedback após 2 segundos
      })
      .catch(err => console.error('Erro ao copiar o texto: ', err));
  };
  const [texto,setTexto]=useState('')
  useEffect(() => {
      if(info?.texto){
        const promise=fetch(info.texto)
        const promise2=promise.then((response) => response.text())
        promise2.then((data) => setTexto(data));  
      }
    }, [info]);
    return (!info?<Tudo vazio={true}></Tudo>:
        <Tudo>
              <Heder>
                <h1>{info.titulo}</h1>
                {texto?<Copiar onClick={copiarTexto}><p>{copiado ? 'Texto copiado!' : 'Copiar Texto'}</p> </Copiar>:<></>}
              </Heder>
            <img style={{
              width: 'calc( 100% - 17px )',
              maxWidth: '760px', 
              objectFit: 'cover' 
            }} src={info.img}/>
            {info.coment?<Balao>{info.coment.map(p=><p>{p}</p>)}</Balao>:<></>}
     
            
        </Tudo>
    )
}
const Heder=styled.div`
background-color:#F0F2B8;
position:sticky;top:0;
height:50px;width:100%;justify-content:space-between;
h1{
font-size:18px;font-weight:500;
}p{color:#35A5AD};
background-color:;
padding:0 15px 0 15px;
box-sizing:border-box;
display:flex;align-items:center;
  main{
  display:flex;
  align-items:center;
  }

`

const Copiar=styled.section`cursor:pointer;
align-items:center;
display:flex;
flex-direction:column;
padding:8px;
background-color: #19848c;
p{margin:0;
color:white;
display: inline-block;
}
border-radius:10px;
width:130px;
box-sizing:border-box;
`

const Balao=styled.section`
align-items:flex-start;
display:flex;
position:fixed;left:30px;bottom:20px;
flex-direction:column;
padding:20px;
background-color: rgba(0, 0, 0, 0.6);;
p{margin:0;
color:white;
display: inline-block;
}
border-radius:10px;
box-sizing:border-box;
`
const Tudo=styled.div`
width:100%;height:100%;
position:relative;
flex-direction:column;
justify-content:flex-start;
align-items:center;

overflow:auto;
@media(min-width:750px){
overflow:auto;
height:100%;
width:${p=>p.vazio?'0px':'calc(100% - 270px)'};
margin:${p=>p.vazio?'0 0px 0 0px':'0 20px 0 40px'};
}
`

