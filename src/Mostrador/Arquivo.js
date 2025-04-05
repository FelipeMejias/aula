import styled from "styled-components"
import { python } from "../aulas/python"
import { javascript } from "../aulas/javascript"
import { useNavigate, useParams } from "react-router-dom"

import { useEffect, useState } from "react"

import { react } from "../aulas/react"

import Canto from "../Mostrador/Canto"
import Meio from "../Mostrador/Meio"
export default function Arquivo(){
    return (
        <Tudo >
          <Meio/>
          <Canto />
        </Tudo>
    )
}
const Tudo=styled.div`
width:100%;height:100%;

`