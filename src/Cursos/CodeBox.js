import React from 'react';
import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"; 
import { useParams } from 'react-router-dom';
export default function CodeBlock({texto,mat}) {
  const params=useParams()
    const materia=mat||params.materia
  return (
  <SyntaxHighlighter style={vscDarkPlus} language={materia} >
    {texto}
  </SyntaxHighlighter>
  );
};

const CodeContainer = styled.pre`
p{
    small{color:#0fad0f;font-size:14px;};
    span{margin-left:25px;};
    strong{color:#4fa1f2;font-size:14px;};
    width:100%;margin:0;
}
position:relative;
  background-color: #1A1E1F;
  color: white; 
  padding: 20px; 
  box-sizing:border-box;
  border-radius: 10px; 
  overflow-x: hidden; 
  white-space: pre-wrap;
  overflow-y: scroll; 
  height:100%;
  font-family: 'Courier New', Courier, monospace; 
  line-height: 24px; 
  font-size:16px;
  width:100%;max-width:90vw;
  text-align: left
`