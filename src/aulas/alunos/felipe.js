import py from '../../_imgs/python.png'
import json from '../../_imgs/json.png'
function formarTexto(aula,num){
    return `/alunos/felipe/a${aula}/t${num}.txt`
}
const aula1=[
    {nome:'Variáveis - booleanos',icone:py,caminho:formarTexto(1,1)},
    {nome:'Strings',icone:py,caminho:formarTexto(1,2)},
    {nome:'Int + Float',icone:py,caminho:formarTexto(1,3)},
    {nome:'Dicionário',icone:py,caminho:formarTexto(1,4)},
    {nome:'Listas',icone:py,caminho:formarTexto(1,5)},
    {nome:'Loop em Listas + Condicional(if)',icone:py,caminho:formarTexto(1,6)},
    {nome:'toalhaDeRosto.json',icone:json,caminho:formarTexto(1,7)},
    ]
export const felipe=[
    {
        nome:'Aula 1',
        data:'Terça 5/11',
        arquivos:aula1
    },
]