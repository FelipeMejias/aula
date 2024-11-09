import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './imgs/App.css';
import styled from 'styled-components';
import Menu from './Menu';
import Home from './Home';
import Arquivo from './Arquivo';
import Topicos from './Materia/Topicos';
import Explicacao from './Materia/Explicacao';
import Horarios from './futuros/Horarios';

function App() {
  const valorContexto={}
  return (
    <div className="App">
      {/*<DarkContext.Provider value={valorContexto}>*/}

        <BrowserRouter>
          <Tudo>
              <Routes>
                <Route path='/:aluno/horarios' element={<Horarios/>}/>
                <Route path='/:aluno/materia' element={<Topicos/>}/>
                <Route path='/:aluno/materia/:topico/:subtopico' element={<Explicacao/>} />
                <Route path='/' element={<Home />}/>
                <Route path='/:aluno' element={<Home />}/>
                <Route path='/:aluno/:aula/:arquivo' element={<Arquivo />}/>
                
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
