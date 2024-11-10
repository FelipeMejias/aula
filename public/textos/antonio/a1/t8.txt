import styled from "styled-components"

export default function Item({nome,preco}){
    return(
        <Conteudo>
            <h1>{nome}</h1>
            <h2>{preco},00</h2>
        </Conteudo>
    )
}
const Conteudo=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
width:200px;
height:100px;
background-color:white;
margin-top:30px;
border-radius:15px;
h1{font-size:22px;font-weight:500;margin:0}
h2{color:green;font-size:16px;margin:0}
`