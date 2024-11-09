import { useEffect, useState } from 'react';
import Item from './Item';
import { getComidas } from './api';
import styled from 'styled-components';

export function App(){
    const [itens,setItens]=useState([])
    const listaDeComidas= itens.map(formarComponente)
    function formarComponente(item){
        return <Item nome={item.nome} preco={item.preco}/>
    }
    function buscarComidas(){
      const promessa=getComidas()
      promessa.then(alterarIntens)
    }
    function alterarIntens(res){
        setItens(res.data)
    }
    useEffect(buscarComidas,[])
    return(
        <Container>
          {listaDeComidas}
        </Container>
    )
  }
  const Container=styled.div`
  display:flex;flex-direction:column;
  align-items:center;overflow:auto;
  height:100vh;width:100vw;
  background-color:#6095d6;
  `