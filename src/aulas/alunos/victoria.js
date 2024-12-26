import js from '../../_imgs/js.png'
import re from '../../_imgs/react.png'
function formarTexto(aula,num){
    return `/alunos/victoria/a${aula}/t${num}.txt`
}

const aula1=[
    {nome:'Var - Int e Float',icone:js,caminho:formarTexto(1,1)},
    {nome:'Var - String',icone:js,caminho:formarTexto(1,2)},
    {nome:'Var - Booleano',icone:js,caminho:formarTexto(1,3)},
]
const aula2=[
    {nome:'index.html',icone:re,caminho:formarTexto(2,1)},
    {nome:'App.js',icone:re,caminho:formarTexto(2,2)},
    {nome:'loja.js',icone:re,caminho:formarTexto(2,3)},
    {nome:'portes.js',icone:re,caminho:formarTexto(2,4)},
]
export const victoria=[
    {
        nome:'Aula 1',
        data:'Quinta 7/11',
        arquivos:aula1
    },{
        nome:'Próxima aula',
        arquivos:aula2
    },
]

