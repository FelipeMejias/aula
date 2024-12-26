import js from '../../_imgs/js.png'

function formarTexto(aula,num){
    return `/alunos/erica/a${aula}/t${num}.txt`
}

const aula1=[
]
const aula2=[
    {nome:'Ex: Calculadora',icone:js,caminho:formarTexto(2,1)},
]
export const erica=[//Eduardo
    {
        nome:'Aula 1',
        arquivos:aula1
    },{
        nome:'Exercicios',
        arquivos:aula2
    },
]

