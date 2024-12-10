import js from '../../_imgs/js.png'
import re from '../../_imgs/react.png'
function formarTexto(aula,num){
    return `/textos/victoria/a${aula}/t${num}.txt`
}

const aula1=[
    {titulo:'Var - Int e Float',icone:js,texto:formarTexto(1,1)},
    {titulo:'Var - String',icone:js,texto:formarTexto(1,2)},
    {titulo:'Var - Booleano',icone:js,texto:formarTexto(1,3)},
]
const aula2=[
    {titulo:'index.html',icone:re,texto:formarTexto(2,1)},
    {titulo:'App.js',icone:re,texto:formarTexto(2,2)},
    {titulo:'loja.js',icone:re,texto:formarTexto(2,3)},
    {titulo:'portes.js',icone:re,texto:formarTexto(2,4)},
]
export const victoria=[
    {
        titulo:'Aula 1',
        status:'Feito',
        data:'Quinta 7/11',
        arquivos:aula1
    },{
        titulo:'Aula 2 - Próxima',
        status:'Solta',
        data:'Sem data',
        arquivos:aula2
    },
]

