import { useEffect, useState } from 'react';
import DarkContext from './DarkContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import Menu from './Menu';
import Inicial from './Topicos';
import Topicos from './Topicos';
import SubTopicos from './SubTopicos';
import Explicacao from './Explicacao';

function App() {
  const valorContexto={}
  return (
    <div className="App">
      <DarkContext.Provider value={valorContexto}>
        <BrowserRouter>
          <Tudo>
              <Routes>
                <Route path='/' element={<Topicos/>}/>
                <Route path='/:topico' element={<SubTopicos/>} />
                <Route path='/:topico/:subtopico' element={<Explicacao/>} />
                
              </Routes>
          </Tudo>
        
        
        </BrowserRouter>
      </DarkContext.Provider>
    </div>
  );
}



const Tudo=styled.div`
background-color:#a0f0f7;
height:100vh;
width:100vw;
display:flex;
flex-direction:column;
align-items:center;

div{
  display:flex;
  align-items:center;
}
-webkit-tap-highlight-color: transparent;
`
export default App;
