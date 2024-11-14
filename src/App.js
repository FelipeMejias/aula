import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './imgs/App.css';
import styled from 'styled-components';
import AulasFeitas from './AulasFeitas';
import Arquivo from './Componentes/Arquivo';
import Topicos from './Conteudo';
import Explicacao from './Componentes/Explicacao';
import Agendar from './Agendar';
import Inicial from './Inicial';
import SalvarNome from './Componentes/SalvarNomes';
import AdicionarEx from './Componentes/AdicionarEx';
import Postado from './Postado';
import Subtopico from './Componentes/Subtopico';

function App() {
  const valorContexto={}
  return (
    <div className="App">
      {/*<DarkContext.Provider value={valorContexto}>*/}

        <BrowserRouter>
          <Tudo>
              <Routes>
                <Route path='/horarios/:aluno' element={<Agendar/>}/>
                <Route path='/horarios-precos' element={<Agendar comPrecos={true}/>}/>

                <Route path='/conteudo' element={<Inicial/>}/>
                <Route path='/conteudo/:materia' element={<Topicos/>}/>
                <Route path='/conteudo/:materia/:topico/:subtopico' element={<Subtopico/>} />
                
                <Route path='/' element={<Inicial />}/>
                <Route path='/aulas/:aluno' element={<AulasFeitas />}/>
                <Route path='/aulas/:aluno/adicionar' element={<AdicionarEx />}/>
                <Route path='/aulas/:aluno/exercicios/:arquivo' element={<Postado />}/>
                <Route path='/aulas/:aluno/:aula/:arquivo' element={<Arquivo />}/>
                
                <Route path='/clarissa' element={<SalvarNome nome='clarissa' />}/>
                <Route path='/antonio' element={<SalvarNome nome='antonio' />}/>
                <Route path='/victoria' element={<SalvarNome nome='victoria' />}/>
                <Route path='/eduardo' element={<SalvarNome nome='eduardo' />}/>
                <Route path='/isaac' element={<SalvarNome nome='isaac' />}/>
              </Routes>
          </Tudo>
        </BrowserRouter>

      {/*</DarkContext.Provider>*/}
    </div>
  );
}



const Tudo=styled.div`
background-color:#f0f2b8;
height:100vh;
width:100vw;
display:flex;
flex-direction:column;
align-items:center;

div{box-sizing:border-box;
  display:flex;
  
}
-webkit-tap-highlight-color: transparent;
`
export default App;
