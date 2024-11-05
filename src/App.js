import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import Menu from './Menu';
import Home from './Home';
import Arquivo from './Arquivo';

function App() {
  const valorContexto={}
  return (
    <div className="App">
      {/*<DarkContext.Provider value={valorContexto}>*/}

        <BrowserRouter>
          <Tudo>
              <Routes>
                {/*<Route path='/horarios' element={<Horarios/>}/>*/}
                <Route path='/' element={<Home />}/>
                <Route path='/:aluno' element={<Home />}/>
                <Route path='/:aluno/:aula/:arquivo' element={<Arquivo />}/>
                {/*<Route path='/:topico' element={<SubTopicos/>} />
                <Route path='/:topico/:subtopico' element={<Explicacao/>} />*/}
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
  align-items:center;
}
-webkit-tap-highlight-color: transparent;
`
export default App;
