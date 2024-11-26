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
import Aba from './Menus/Aba';
import MyContext from './Componentes/context';
import MenuCel from './Menus/MenuCel'
import MenuPc from './Menus/MenuPc'
function App() {
  
  const [aba,setAba]=useState(false)
  const valorContexto={aba,setAba}
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
                <Route path='/agendar/:aluno' element={<Agendar page={1}/>}/>
                <Route path='/agendar/:aluno/pacotes' element={<Agendar page={3}/>}/>
                <Route path='/agendar/:aluno/horarios' element={<Agendar page={2}/>}/>

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
              </Resto>
          </Tudo>
        </BrowserRouter>
        </MyContext.Provider>
    </div>
  );
}



const Tudo=styled.div`
background-color:#f0f2b8;
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
height:calc(100vh - 75px);width:100%;
flex-direction:column;
overflow:hidden;
overflow-y:scroll;
@media(min-width:750px){
height:100%;
}
`
export default App;
