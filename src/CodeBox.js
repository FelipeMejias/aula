import React from 'react';
import styled from 'styled-components';

export default function CodeBlock({texto}) {
const elemento=[]
console.log(texto)
  return (
    <CodeContainer>
      <code>
        {texto}
      </code>
    </CodeContainer>
  );
};
const CodeContainer = styled.pre`
p{
    small{color:#0fad0f;font-size:14px;};
    span{margin-left:25px;};
    strong{color:#4fa1f2;font-size:14px;};
    width:100%;margin:0;
}

  background-color: black;
  color: white; 
  padding: 20px; 
  box-sizing:border-box;
  border-radius: 5px; 
  overflow-x: auto; 
  overflow-y: scroll; 
  height:100%;
  font-family: 'Courier New', Courier, monospace; 
  white-space: pre; 
  line-height: 24px; 
  font-size:16px;
  width:100%;max-width:600px;
  text-align: left
`