import React from 'react';
import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"; 
import { useParams } from 'react-router-dom';
export default function CodeBlock({texto,mat}) {
  const params=useParams()
    const linguagem=mat||params.materia
  return (
  <SyntaxHighlighter style={vscDarkPlus} language={linguagem} >
    {texto}
  </SyntaxHighlighter>
  );
};

