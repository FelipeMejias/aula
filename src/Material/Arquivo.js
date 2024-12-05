import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { gaveta, listaAlunos } from "../aulas/gaveta"
import set from '../_imgs/setaback.png'
export default function Arquivo({}){
  const navigate=useNavigate()
  const aluno=JSON.parse(localStorage.getItem('usuario'))
    const params=useParams()
    const aula=params.aula
    const arquivo=params.arquivo
    const infoAula=gaveta[listaAlunos.indexOf(aluno)]
    const infoArquivo=infoAula[aula-1].arquivos[arquivo-1]
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
      if(infoArquivo?.texto){
        const promise=fetch(infoArquivo.texto)
        const promise2=promise.then((response) => response.text())
        promise2.then((data) => setTexto(data));  
      }else{
        setTexto('')
      }
    }, [infoArquivo]);
    return (
        <Tudo>
          <Meio>
              <Heder>
                <h1>{infoArquivo.titulo}</h1>
              </Heder>
              <HolderCode>
              {texto?<Copiar onClick={copiarTexto}><p>{copiado ? 'Texto copiado!' : 'Copiar Texto'}</p></Copiar>:<></>}
              <img style={{
              width: 'calc( 100% )',
              objectFit: 'cover' 
            }} src={infoArquivo.img}/>
              </HolderCode>
            
            {infoArquivo.coment?<Balao>{infoArquivo.coment.map(p=><p>{p}</p>)}</Balao>:<></>}
            </Meio>
            <Janela >
            {infoAula?.map((a,iAula)=>
                <Aula >
                  
                    <Cab>
                        <p>{a.titulo}</p>
                        <p><small>{a.data}</small></p>
                    </Cab>
                    <Caixa>
                        {a.arquivos.map((arq,iArquivo)=>
                            <Arq 
                            onClick={()=>navigate(`/aulas/${iAula+1}/${iArquivo+1}`)}
                            sel={aula==iAula+1&&arquivo==iArquivo+1}
                            >
                              {console.log(aula,iAula,arquivo,iArquivo)}
                                <img src={arq.icone}></img>
                                <p>{arq.titulo}</p>
                            </Arq>)}
                        
                    </Caixa>
                </Aula>
            )}
            </Janela>
        </Tudo>
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
border-radius: 4px;
transition: background-color 0.2s ease;
img{height:20px;margin-right:7px;}
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


const HolderCode=styled.div`padding-top:16px;
flex-direction:column;height:100%;width:100%;
justify-content:flex-start;background-color:;
position:relative;align-items:center;
`
const Bolinha=styled.div`
cursor:pointer;
padding:5px;
background-color:#4787B2;color:white;
border-radius:5px;
margin:0 5px 0 5px;
`
const Escolhas=styled.div`
`


const Meio=styled.div`background-color:;
padding:0 30px 0 45px;
width:100%;
height:100%;
flex-direction:column;
justify-content:flex-start;
align-items:center;
@media(max-width:1050px){
width:100%
}
@media(min-width:1050px){
width:calc(100% - 240px)
}
`
const Tudo=styled.div`
width:100%;height:100%;

flex-direction:row;
justify-content:flex-start;
align-items:center;

overflow:auto;

`
const Copiar=styled.section`cursor:pointer;
align-items:center;
display:flex;
flex-direction:column;
padding:6px;
position:absolute;
top:-17px;right:0;
background-color: #D9DBAD;
p{margin:0;
color:black;
display: inline-block;
}
border-top-left-radius:10px;
border-top-right-radius:10px;
width:130px;
box-sizing:border-box;
`


const Janela=styled.article`
display:flex;
background-color:;
align-items:center;
width:100%;
height:100%;
flex-direction:column;

@media(min-width:750px){
position:absolute;right:0;
display:flex;
overflow:auto;
width:240px}

@media(max-width:1050px){
display:none;}

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