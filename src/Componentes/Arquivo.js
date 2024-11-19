import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { gaveta, listaAlunos } from "../aulas/gaveta"
import Menu from "../Menu"
import set from '../imgs/setaback.png'
export default function Arquivo(){
  const navigate=useNavigate()
    const {aluno,aula,arquivo}=useParams()
    const iAula=parseInt(aula.replace('aula',''))-1
    const iArquivo=parseInt(arquivo.replace('arquivo',''))-1
    const info=gaveta[listaAlunos.indexOf(aluno)][iAula].arquivos[iArquivo]

    const [fileContent, setFileContent] = useState('');
    const [copiado, setCopiado] = useState(false);
    function copiarTexto(){
      navigator.clipboard.writeText(fileContent)
        .then(() => {
          setCopiado(true);
          setTimeout(() => setCopiado(false), 2000); // Reset feedback após 2 segundos
        })
        .catch(err => console.error('Erro ao copiar o texto: ', err));
    };
    

  useEffect(() => {
    if(info.texto){
      fetch(info.texto).then((response) => response.text()).then((data) => setFileContent(data));  
    }
  }, []);
    return (
        <Tudo>
            <Menu/>
            <Resto>
              <Heder>
                <main>
                <Voltar onClick={()=>navigate(`/aulas/${aluno}`)}>
                    <img src={set}/>
                  </Voltar>
                <h1>{info.titulo}</h1>
                {fileContent?<Copiar onClick={copiarTexto}>
               <p>{copiado ? 'Texto copiado!' : 'Copiar Texto'}</p> 
            </Copiar>:<></>}
                </main>
                
              </Heder>
            <img src={info.img}/>
            {info.coment?<Balao>{info.coment.map(p=><p>{p}</p>)}</Balao>:<></>}
            
            {/*
            <Dir>
                <Nome>{info.titulo}</Nome>
                <CodeBlock texto={info.texto} />
            </Dir>
            */}
            </Resto>
            
        </Tudo>
    )
}
const Heder=styled.div`
background-color:#91e4ea;position:sticky;top:0;
height:50px;width:100%;justify-content:center;
h1{
font-size:18px;
}p{color:#35A5AD};
main{background-color:;
padding:0 35px 0 35px;box-sizing:border-box;
display:flex;align-items:center;
    width:100%;max-width:500px;height:100%;
    justify-content:space-between;
}
`
const Resto=styled.div`
height:calc(100vh - 75px);width:100vw;
overflow:hidden;
overflow-y:scroll;position:relative;
flex-direction:column;
justify-content:flex-start;
align-items:center;
img {
  width: calc( 100vw - 17px ); 
  max-width: 760px; 
  object-fit: cover; 
}
overflow:auto;
`
const Copiar=styled.section`cursor:pointer;
align-items:flex-start;
display:flex;
flex-direction:column;
padding:10px;
background-color: #19848c;
p{margin:0;
color:white;
display: inline-block;
}
border-radius:10px;margin:0 0 0 20px;
box-sizing:border-box;
`
const Voltar=styled.section`cursor:pointer;
align-items:flex-start;
display:flex;
flex-direction:column;
padding:10px;height:40px;width:40px;border-radius:50%;
color:white;
img{height:100%;width:100%;}
p{margin:0;

display: inline-block;
}
border-radius:10px;margin:0 20px 0 0px;
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
width:100%;height:100vh;
flex-direction:column;
justify-content:flex-start;
align-items:center;


`

const Dir=styled.div`
position:relative;
max-height:calc(100vh - 70px);width:600px;max-width:96%;
flex-direction:column;
`
const Nome=styled.div`
position:absolute;left:0;top:15px;height:20px;
border-top-left-radius:10px;
border-bottom-right-radius:10px;
background-color:#b7b7b7;padding:5px 10px 5px 10px;

`
