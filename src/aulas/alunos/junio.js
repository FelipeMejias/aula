import js from '../../_imgs/js.png'
function formarTexto(aula,num){
    return `/alunos/junio/a${aula}/t${num}.txt`
}
const aula1=[
    {linguagem:'javascript',nome:'Variáveis Simples',icone:js,caminho:formarTexto(1,1)},
    {linguagem:'javascript',nome:'Number',icone:js,caminho:formarTexto(1,2)},
    {linguagem:'javascript',nome:'String',icone:js,caminho:formarTexto(1,3)},
    {linguagem:'javascript',nome:'Boolean',icone:js,caminho:formarTexto(1,4)},
    {linguagem:'javascript',nome:'Função',icone:js,caminho:formarTexto(1,5)},
    ]
export const junio=[
    {
        nome:'Aula 1',
        arquivos:aula1
    },
]