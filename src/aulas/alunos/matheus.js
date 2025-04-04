import js from '../../_imgs/js.png'
function formarTexto(aula,num){
    return `/alunos/matheus/a${aula}/t${num}.txt`
}
const aula1=[
    {linguagem:'javascript',nome:'index',icone:js,caminho:formarTexto(1,1)},
    {linguagem:'javascript',nome:'Numerais',icone:js,caminho:formarTexto(1,2)},
    {linguagem:'javascript',nome:'exercicio1',icone:js,caminho:formarTexto(1,3)},
    ]
const aula2=[
    {linguagem:'javascript',nome:'index',icone:js,caminho:formarTexto(2,1)},
    {linguagem:'javascript',nome:'movimentos',icone:js,caminho:formarTexto(2,2)},
    {linguagem:'javascript',nome:'notas',icone:js,caminho:formarTexto(2,3)},
    ]
const aula3=[
    {linguagem:'javascript',nome:'frutas',icone:js,caminho:formarTexto(3,1)},
    {linguagem:'javascript',nome:'frutas - Func em Func',icone:js,caminho:formarTexto(3,2)},
    {linguagem:'javascript',nome:'chuteiras',icone:js,caminho:formarTexto(3,3)},
    {linguagem:'javascript',nome:'calculadora',icone:js,caminho:formarTexto(3,4)},
    ]
export const matheus=[
    {
        nome:'Aula 1',
        arquivos:aula1
    },
    {
        nome:'Aula 2',
        arquivos:aula2
    },{
        nome:'Aula 3',
        arquivos:aula3
    },
]