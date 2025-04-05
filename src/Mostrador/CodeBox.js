import React from 'react';
import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"; 
import { useParams } from 'react-router-dom';
export default function CodeBlock({texto,mat}) {
  const params=useParams()
    const linguagem=mat||params.materia
  return (
  <SyntaxHighlighter 
  customStyle={{
      margin: 0,
      padding: '1em',
      borderRadius: '10px',
      overflow: 'auto',
    }}
  style={vscDarkPlus} language={linguagem} >
    {texto}
  </SyntaxHighlighter>
  );
};

