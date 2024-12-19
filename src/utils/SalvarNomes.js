import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { alunos } from "../aulas/gaveta"

export default function SalvarNome(){
    const {nome}=useParams()
    const navigate=useNavigate()
    useEffect(()=>{
        if(Object.keys(alunos).includes(nome)){
            localStorage.setItem('usuario', JSON.stringify(nome))
            navigate(`/aulas`)}
    },[])
    return(<></>)
}
