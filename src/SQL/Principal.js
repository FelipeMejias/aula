import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
export default function Principal(){
    const navigate=useNavigate()
    
    return (
        <Tudo >
            <h1>Meus bancos:</h1>
            
        </Tudo>
    )
}


const Tudo=styled.div`
align-items:center;
width:100%;
height:calc(100% - 75px);
position:relative;
@media(min-width:750px){
height:100%;
}
`
const Janela=styled.article`
display:flex;
background-color:;
align-items:center;
width:100%;
height:100%;
flex-direction:column;
padding:0px 0 20px 0;
box-sizing:border-box;

@media(min-width:750px){
overflow:auto;
}
`
