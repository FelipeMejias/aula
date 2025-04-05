import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const parte2={
    titulo:'React - Mundial 2025',
    filhos:[
        {
            titulo:'public',
            filhos:[
                {titulo:'index',ling:'html'}
            ]
        }, {
            titulo:'src',
            filhos:[
                {titulo:'App',ling:'css'},
                {titulo:'App',ling:'js'},
                {titulo:'continentes',ling:'js'},
                {titulo:'index',ling:'js'},
            ]
        },{titulo:'package',ling:'json'}
    ]
}
export default function Pastas({topico,top,small}){
    const navigate=useNavigate()
    return (
        topico==2?
        <Tudo small={small}>
            <h1>{top.nome}</h1>
            <File onClick={()=>{navigate(`/cursos/react/3/1`)}}> 
            <Bolinha cor="var(--html)"/>
                <span>index.html</span>
            </File>
            <File onClick={()=>{navigate(`/cursos/react/3/2`)}}> 
            <Bolinha cor="var(--css)"/>
                <span>estilos.css</span>
            </File>
        </Tudo>
        :topico==4?
        <Tudo small={small}>
            <h1>{top.nome}</h1>
            <div className="folder">
                <div className="folder-name">public</div>
                <div className="folder-contents">
                    <File  onClick={()=>{navigate(`/cursos/react/5/2`)}}> 
                    <Bolinha cor="var(--html)"/>
                        <span>index.html</span>
                    </File>
                </div>
            </div>

            <div className="folder">
                <div className="folder-name">src</div>
                <div className="folder-contents">
                    <File onClick={()=>{navigate(`/cursos/react/5/6`)}}>
                        <Bolinha cor="var(--css)"/>
                        <span>App.css</span>
                    </File>
                    <File onClick={()=>{navigate(`/cursos/react/5/4`)}}> 
                    <Bolinha cor="var(--js)"/>
                        <span>App.js</span>
                    </File>
                    <File onClick={()=>{navigate(`/cursos/react/5/5`)}}> 
                    <Bolinha cor="var(--js)"/>
                        <span>continentes.js</span>
                    </File>
                    <File onClick={()=>{navigate(`/cursos/react/5/3`)}}> 
                    <Bolinha cor="var(--js)"/>
                        <span>index.js</span>
                    </File>
                </div>
            </div>

            <File onClick={()=>{navigate(`/cursos/react/5/1`)}}> 
            <Bolinha cor="var(--json)"/>
                <span>package.json</span>
            </File>
        </Tudo>:<></>
    );
};
const Tudo=styled.div`
h1{
color:white;margin:0;font-size:18px;font-weight:500;
}
width:90%;max-width:400px;
min-width:${p=>p.small?200:220}px;
max-width:270px;
margin:${p=>p.small?'15px 0 0 0px':'15px 0 0 15px'};

 display:flex;
  flex-direction:column;
    text-align: left;
    border: 1px solid #333;
    padding: 1rem;
    border-radius: 15px;
    background-color: #252526;
`
const Bolinha=styled.div`
width:15px;height:15px;border-radius:4px;
background-color:${p=>p.cor};
`
const File=styled.div`
    padding:5px;
    margin-top:8px;
    border-radius:8px;
    width:auto;
    display: flex;
    align-items: center;
    background-color:#484849;
cursor:pointer;
span {
    margin-left: 0.5rem;
    color:white;
}
`