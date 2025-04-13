import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import AulasFeitas from './AulasFeitas';
import Topicos from './Conteudo';
import Agendar from './Agendamento/Agendar';
import Aba from './Menus/Aba';
import MyContext from './utils/context';
import MenuCel from './Menus/MenuCel'
import MenuPc from './Menus/MenuPc'
import Linguagens from './Linguagens/Linguagens';
import Inicial from './Menus/Inicial';
import FEvsBE from './Linguagens/FEvsBE';
import Principal from './SQL/Principal';
import Arquivo from './Mostrador/Arquivo';
import SalaEspera from './utils/SalaEspera';


function App() {
  const listaDeListasFalses = Array.from({ length: 9 }, () => Array(9).fill(false));
  const [checksP,setChecksP]=useState(JSON.parse(localStorage.getItem(`ch-python`))||listaDeListasFalses)
  const [checksJ,setChecksJ]=useState(JSON.parse(localStorage.getItem(`ch-javascript`))||listaDeListasFalses)
  const [checksR,setChecksR]=useState(JSON.parse(localStorage.getItem(`ch-react`))||listaDeListasFalses)
  const [aba,setAba]=useState(false)
  const centralChecks={
    "python":[checksP,setChecksP],
    "javascript":[checksJ,setChecksJ],
    "react":[checksR,setChecksR],
  }
  const valorContexto={aba,setAba,
    centralChecks
  }
  return (
    <div className="App">
      <MyContext.Provider value={valorContexto}>
        <BrowserRouter>
          <Tudo>
            <MenuPc/>
            <MenuCel/>
            {aba?<Aba/>:<></>}
            <Resto>
              <Routes>
<Route path='/' element={<FEvsBE/>}/>

<Route path='/bancos' element={<Principal/>}/>

<Route path='/cursos/:materia' element={<Topicos/>}/>
<Route path='/cursos/:materia/:pasta/:arquivo' element={<Arquivo/>} />
                
<Route path='/aulas' element={<AulasFeitas />}/>
<Route path='/aulas/:pasta/:arquivo/:formato' element={<Arquivo />}/>
                
<Route path='/pacotes' element={<Agendar pag={0}/>}/>
<Route path='/pacotes/mensal' element={<Agendar pag={1}/>}/>
<Route path='/pacotes/quantidade' element={<Agendar pag={2}/>}/>
<Route path='/pacotes/cursos' element={<Agendar pag={3}/>}/>
                {/* ativar código aluno */}
              </Routes>
            </Resto>
          </Tudo>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

const Tudo=styled.div`
background-color:var(--fundo);
height:100vh;
width:100vw;
display:flex;

align-items:center;

div{box-sizing:border-box;
  display:flex;
  
}
-webkit-tap-highlight-color: transparent;
@media(max-width:750px){
height:100%;
flex-direction:column;
}
`
const Resto=styled.div`
align-items:flex-start;
height:calc(100vh - 60px);width:100%;
flex-direction:column;
overflow:auto;
@media(min-width:750px){
height:100%;
overflow:hidden;
}
`
export default App;
