import React from 'react';
import styled from 'styled-components';

export default function CodeBlock({texto}) {
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