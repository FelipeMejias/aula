import css1 from '../_imgs/css1.png'
import react1 from '../_imgs/react1.png'
import ht from '../_imgs/html.png'
import cs from '../_imgs/css.png'
import js from '../_imgs/js.png'
import json from '../_imgs/json.png'
export const react=[
    {
      nome:'HTML',
      subtopicos:[
        {nome:'Iniciar o arquivo',linguagem:'html',texto:`
No seu arquivo .html quando digitamos "html:5" e clicamos Enter
Esse código é gerado automaticamente
Dentro de HEAD temos as configurações
Dentro do BODY temos os elementos do site
        `},
        {nome:'Criar tags',linguagem:'html',texto:`
Existem varios nomes de tag q podemos escolher
Não existe diferença entre eles, é apenas o nome que vamos usar na hora de adicionar os estilos
Os principais são:
main, header, footer, article, section, aside
Para tags de texto, precisamos escolher dentre essas:
h1, h2, h3, h4, h5, h6, p
        `},
        {nome:'Divs com classe',linguagem:'html',texto:`
Podemos tambem chamar a tag com um nome genérico: div
E adicionar uma classe a ela
Dessa forma conseguimos usar nomes que façam sentido na hora de adicionar os estilos 
        `},
        {nome:'Anexar arquivo CSS',linguagem:'html',texto:`
Devemos adicionar no HEAD do código o arquivo .css que estamos usando
No caso, meu arquivo tem o nome de "estilos.css"
Altere o valor de href se o seu tiver outro nome 
        `}
      ]
    },{
      nome:'CSS',
      subtopicos:[
        {nome:'Referenciar tag HTML',linguagem:'css',texto:`
Para estilizar uma TAG, usamos o nome dela a abrimos as chaves
Para estilizar uma DIV com classe, usamos: .nomeDaClasse
        `},
        {nome:'Props. Principais',linguagem:'css',texto:`
Alguns elementos vêm com margem como padrão, como o body e os textos
Se não queremos elas, podemos remover com:
margin:0;
        `},
        {nome:'Props. Flex',linguagem:'css',img:css1,texto:`
Existem algumas propriedades que definem como as tags filhas devem se organizar
flex-direction: define se ficam na horizontal (row) ou vertical (column)
justify-content: alinha na direção escolhida pelo flex-direction
align-items: alinha na direção transversal
        `},
        {nome:'Props. Margem',linguagem:'css',texto:`
Existem as margens externas (margin), que empurram os elementos irmãos para longe
E as margens internas (padding), que empurram os elementos filhos mais para dentro
Quando temos margem somente em cima, por exemplo, podemos usar margin-top ou padding-top
Quando temos muitas, para simplificar, podemos fazer:
margin: 20px 5px 0 5px;
Sempre nessa ordem: cima, direita, baixo, esquerda
        `},
        {nome:'Props. Scroll',linguagem:'css',texto:`
Quando os elementos filhos são muitos e ultrapassam o tamanho da tag
Podemos usar o overflow:auto para adicionar um scroll
Para estilizar o scroll podemos utilizar essas 4 propriedades
        `},
      ]
},{
        nome:'Ex: Mundial 2025',
        modoAulas:true,
        arquivos:[
            {nome:'index.html',icone:ht,linguagem:'html'},
            {nome:'estilos.css',icone:cs,linguagem:'css'},
        ]
    },{
        nome:'Iniciar React',
        subtopicos:[
          {nome:'Estrutura de pastas',img:react1,noCode:true,texto:`
Crie um arquivo chamado "package.json" 
Crie uma pasta chamada "public", que vai conter o arquivo Html
Crie uma pasta chamada "src", que irá conter os arquivos Javascript e CSS
          `},
          {nome:'Instalar dependências',noCode:true,texto:`
Copie os códigos do próximo tópico (React - Mundial 2025) e cole nos arquivos correspondentes
Abra o terminal e digite:
npm i
Dessa forma, instalamos as dependências , inclusive o React
Após instaladas, serão criados automaticamente o arquivo "package-lock.json" e a pasta "node_modules"
Não devemos alterar esse arquivo e essa pasta
          `},
          {nome:'Rodar o projeto',noCode:true,texto:`
Para rodar o projeto basta digitar no terminal:
npm start
Após iniciado, abrirá automaticamente o front-end no seu navegador
Ele ficará ativo no link:
localhost:3000
                          `},
        ]
      },{
        nome:'React - Mundial 2025',
        modoAulas:true,
        arquivos:[
                {nome:'package.json',icone:json,linguagem:'json',texto:`
É o arquivo de configuração do projeto
Na parte "dependencies" está indicado todas as dependências externas que serão instaladas quando rodarmos:
npm i
                        `},
                {nome:'index.html',icone:ht,linguagem:'html',texto:`
O body terá apenas uma Div de id "root", onde será inserido o código dinamicamente
Todo o código HTML será administrado pelo arquivo "index.js"        
                        `},
                
                {nome:'index.js',icone:js,linguagem:'jsx',texto:`
É o arquivo que inicia o projeto
Seleciona o único elemento do body através de seu id ("root")
Insere nele o <App/> que é nosso primeiro Componente React             
                        `},
                {nome:'App.js',icone:js,linguagem:'jsx',texto:`
É onde começamos a escrever de fato o nosso projeto
Quando temos Classes repetidas, como "continente" e "clube" podemos reduzir o código da seguinte forma:
Criamos uma Lista "continentes" contendo as informações de cada um
Mapeamos a Lista, trocando o Objeto por uma Div da maneira que quisermos
Para inserir pedaços de Javascript dentro do HTML usamos { }
                        `},
                {nome:'continentes.js',icone:js,linguagem:'javascript',texto:`
A Variável "continente" é uma Lista com Objetos que representam cada continente
Cada Objeto possui:
Um atributo "nome" que é do tipo String
E um atributo "clubes" que é uma Lista de Strings

                        `},
                {nome:'App.css',icone:cs,linguagem:'css',texto:`
Ficou igual o do tópico anterior com uma excessão:
O body ficou apenas com os atributos iniciais
O que tinhamos antes no body, foi para uma Div de classe "tela"
`},
                
]
    },

    ]
    