import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { centralAulas } from "./aulasPassadas/central"
export default function Identifique({nomeTentado}){
    const navigate=useNavigate()
    const tentativa=nomeTentado
    const [title,setTitle]=useState(nomeTentado)
    const [aviso,setAviso]=useState(false)
    useEffect(()=>{
        console.log([tentativa,title])
        if(title&&tentativa==title){
            console.log('oi')
            setAviso(true)
        }else{
            setAviso(false)
        }
        },[title])
    return (
        <Tudo>
            <Novo>
                {aviso?<h2>Não existe esse aluno</h2>:<></>}
                <h1>Seu nome:</h1>
                <input onChange={(e)=>setTitle(e.target.value)} placeholder='' value={title}></input>
                <button onClick={()=>navigate(`/${title.toLowerCase()}`)}>Entrar</button>
            </Novo>
        </Tudo>
    )
}
const Tudo=styled.div`
width:100%;height:100%;
flex-direction:column;
align-items:center;
div{
align-items:center;
}
`
const Novo=styled.div`
position:relative;
height:80%;width:80%;margin-top:10%;
border-radius:25px;color:white;
flex-direction:column;justify-content:center;
input{
    height:28px;width:200px;border-radius:5px;
    background-color:white;color:black;
    font-size:17px;border:0px solid #6B491A;
    padding-left:6px
}
button{
    cursor:pointer;
    height:28px;width:100px;border-radius:5px;
    background-color:green;color:white;
    font-size:17px;border:0px;margin:30px 0 0 0;
}
background-color:#35a5ad;
h2{
position:absolute;top:30px;color:yellow;
}
`