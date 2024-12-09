import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './_imgs/App.css';
import styled from 'styled-components';
import AulasFeitas from './Material/AulasFeitas';
import Arquivo from './Material/Arquivo';
import Topicos from './Cursos/Conteudo';
import Agendar from './Agendamento/Agendar';
import SalvarNome from './utils/SalvarNomes';
import Subtopico from './Cursos/Subtopico';
import Aba from './Menus/Aba';
import MyContext from './utils/context';
import MenuCel from './Menus/MenuCel'
import MenuPc from './Menus/MenuPc'
import Linguagens from './Linguagens/Linguagens';
import Inicial from './Menus/Inicial';
import FEvsBE from './Linguagens/FEvsBE';
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
<Route path='/' element={<Linguagens />}/>
<Route path='/linguagens' element={<FEvsBE/>}/>

<Route path='/cursos/:materia' element={<Topicos/>}/>
<Route path='/cursos/:materia/:topico/:subtopico' element={<Subtopico/>} />
                
<Route path='/aulas' element={<AulasFeitas />}/>
<Route path='/aulas/:aula/:arquivo' element={<Arquivo />}/>
                
<Route path='/pacotes' element={<Agendar page={3}/>}/>
<Route path='/horarios' element={<Agendar page={2}/>}/>

                {/* ativar código aluno */}
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
height:calc(100vh - 60px);width:100%;
flex-direction:column;
overflow:auto;
@media(min-width:750px){
height:100%;
overflow:hidden;
}
`
export default App;
