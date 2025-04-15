import {useState,useEffect,useContext} from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'

export default function Prof(){
    const navigate=useNavigate()
    return(
        <Content>
   
        </Content>
        
    )
}

const Content=styled.div`
width: 100%;height:100vh;
display: flex;flex-direction:column;
justify-content:space-evenly;
align-items: center;
h1{color:#404F11;margin:10px 0 10px 0;font-size:22px;}
`
