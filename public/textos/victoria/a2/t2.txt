import './App.css';
import styled from 'styled-components';
import { portes } from './portes';
import fundo from './imgs/fundo.png'
import { servicos, slogan } from './loja';
function App() {
    return (
    <Conteudo>
        <Fundo><img src={fundo}/></Fundo>
        <Menu>Amor de Bicho</Menu>
        <Area>
            <h1>{slogan}</h1>
            {portes.map(animal=><Cartao>
                <Cantinho><h3>{animal.limite}</h3></Cantinho>
                <h2>Porte {animal.titulo}</h2>
                <Infos>
                    <img src={animal.img} />
                    <section>
                    {servicos.map((serv,i)=>
                    <h3>{serv}: <small>R${animal.precos[i]},00</small></h3>)}
                    </section>
                </Infos>
            </Cartao>)}
        </Area>
    </Conteudo>
    )
}
const Menu=styled.div`
width:100%;height:70px;
z-index:3;position:fixed;
justify-content:center;
background-color:#c1b1d6;
font-size:35px;
font-family: "Rubik Bubbles", system-ui;
`
const Area=styled.div`
width:100vw;
height:calc(100vh - 80px);
padding-top:80px;
background-color:#d2ddc9;
overflow:hidden;
overflow-y:scroll;
flex-direction:column;
`
const Cartao=styled.div`
flex-direction:column;
position:relative;
width:500px;max-width:90%;
height:200px;
margin:20px 0 20px 0;
background-color:white;
border-radius:20px;
`
const Cantinho=styled.div`
position:absolute;
top:0;left:0;
width:120px;background-color:#c1b1d6;
justify-content:center;
border-top-left-radius:20px;
border-bottom-right-radius:20px;
`
const Infos=styled.div`
justify-content:space-evenly;
width:400px;
height:150px;
margin:0px 0 0px 0;
img{height:80%;}
`

const Conteudo=styled.div`
overflow:hidden;
width:100vw;
height:100vh;
background-color:#d2ddc9;
color:#624c82;

h1{
    width:80%;;max-width:500px;
    font-size:18px;font-weight:500;
    text-align:center;z-index:2;
}
h2{
    font-size:20px;font-weight:500;margin:10px 0 0 0;
    font-family: "Rubik Bubbles", system-ui;
}
h3{
    font-size:15px;font-weight:400;margin:0 0 5px 0;
    small{color:green;font-weight:600;font-size:15px}
}

div{display:flex;align-items:center;}
section{width:190px;}
`
const Fundo=styled.div`
overflow:hidden;
position:absolute;z-index:0;
top:0;left:0;
width:100%;
height:100%;
img{
    width:100%;height:100%;object-fit:cover;
}
`

export default App;
