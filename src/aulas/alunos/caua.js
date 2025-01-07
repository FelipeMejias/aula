import js from '../../_imgs/js.png'
import re from '../../_imgs/react.png'
function formarTexto(aula,num){
    return `/alunos/caua/a${aula}/t${num}.txt`
}

const aula1=[
    {nome:'Int e Float',icone:js,caminho:formarTexto(1,1)},
    {nome:'String',icone:js,caminho:formarTexto(1,2)},
    {nome:'Booleano',icone:js,caminho:formarTexto(1,3)},
]
const aula2=[
    {nome:'Calculadora',icone:js,caminho:formarTexto(2,1)},
]
export const caua=[
    {
        nome:'Aula 1',
        arquivos:aula1
    },{
        nome:'Exercicios',
        arquivos:aula2
    },
]