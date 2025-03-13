import py from '../../_imgs/python.png'
import json from '../../_imgs/json.png'
function formarTexto(aula,num){
    return `/alunos/felipe/a${aula}/t${num}.txt`
}
const aula1=[
    {linguagem:'python',nome:'Variáveis - booleanos',icone:py,caminho:formarTexto(1,1)},
    {linguagem:'python',nome:'Strings',icone:py,caminho:formarTexto(1,2)},
    {linguagem:'python',nome:'Int + Float',icone:py,caminho:formarTexto(1,3)},
    {linguagem:'python',nome:'Dicionário',icone:py,caminho:formarTexto(1,4)},
    {linguagem:'python',nome:'Listas',icone:py,caminho:formarTexto(1,5)},
    {linguagem:'python',nome:'Loop em Listas + Condicional(if)',icone:py,caminho:formarTexto(1,6)},
    {linguagem:'json',nome:'toalhaDeRosto.json',icone:json,caminho:formarTexto(1,7)},
    ]
export const felipe=[
    {
        nome:'Aula 1',
        arquivos:aula1
    },
]