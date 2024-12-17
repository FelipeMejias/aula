import css1 from '../_imgs/css1.png'
export const react=[
    {
      nome:'HTML',
      subtopicos:[
        {nome:'Iniciar o arquivo',texto:`
No seu arquivo .html quando digitamos "html:5" e clicamos Enter
Esse código é gerado automaticamente
Dentro de HEAD temos as configurações
Dentro do BODY temos os elementos do site
        `},
        {nome:'Criar tags',texto:`
Existem varios nomes de tag q podemos escolher
Não existe diferença entre eles, é apenas o nome que vamos usar na hora de adicionar os estilos
Os principais são:
main, header, footer, article, section, aside
Para tags de texto, precisamos escolher dentre essas:
h1, h2, h3, h4, h5, h6, p
        `},
        {nome:'Divs com classe',texto:`
Podemos tambem chamar a tag com um nome genérico: div
E adicionar uma classe a ela
Dessa forma conseguimos usar nomes que façam sentido na hora de adicionar os estilos 
        `},
        {nome:'Anexar arquivo CSS',texto:`
Devemos adicionar no HEAD do código o arquivo .css que estamos usando
No caso, meu arquivo tem o nome de "estilos.css"
Altere o valor de href se o seu tiver outro nome 
        `}
      ]
    },{
      nome:'CSS',
      subtopicos:[
        {nome:'Referenciar tag HTML',texto:`
Para estilizar uma TAG, usamos o nome dela a abrimos as chaves
Para estilizar uma DIV com classe, usamos: .nomeDaClasse
        `},
        {nome:'Props. Principais',texto:`
Alguns elementos vêm com margem como padrão, como o body e os textos
Se não queremos elas, podemos remover com:
margin:0;
        `},
        {nome:'Props. Flex',img:css1,texto:`
Existem algumas propriedades que definem como as tags filhas devem se organizar
flex-direction: define se ficam na horizontal (row) ou vertical (column)
justify-content: alinha na direção escolhida pelo flex-direction
align-items: alinha na direção transversal
        `},
        {nome:'Props. Margem',texto:`
Existem as margens externas (margin), que empurram os elementos irmãos para longe
E as margens internas (padding), que empurram os elementos filhos mais para dentro
Quando temos margem somente em cima, por exemplo, podemos usar margin-top ou padding-top
Quando temos muitas, para simplificar, podemos fazer:
margin: 20px 5px 0 5px;
Sempre nessa ordem: cima, direita, baixo, esquerda
        `},
        {nome:'Props. Scroll',texto:`
Quando os elementos filhos são muitos e ultrapassam o tamanho da tag
Podemos usar o overflow:auto para adicionar um scroll
Para estilizar o scroll podemos utilizar essas 4 propriedades
        `},
      ]
    },

    ]
    