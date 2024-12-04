import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { listaAlunos } from "../aulas/gaveta"
export default function SalvarNome({nome}){
    const navigate=useNavigate()
    useEffect(()=>{
        if(listaAlunos.includes(nome)){
            localStorage.setItem('usuario', JSON.stringify(nome))
            navigate(`/aulas`)}
    },[])
    return(<></>)
}
