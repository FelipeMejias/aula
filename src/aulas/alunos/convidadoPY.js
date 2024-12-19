import py from '../../_imgs/python.png'
function formarTexto(aula,num){
    return `/textos/eduardo/a${aula}/t${num}.txt`
}

const aula1=[
    {nome:'Variável- int/float',icone:py,texto:formarTexto(1,1)},
    {nome:'Variável- string',icone:py,texto:formarTexto(1,2)},
    {nome:'Variável- booleano',icone:py,texto:formarTexto(1,3)},
    {nome:'Condicional (if)',icone:py,texto:formarTexto(1,4)},
    {nome:'Funções',icone:py,texto:formarTexto(1,5)},
]
export const convidadoPY=[
    {
        nome:'Demonstração',
        data:'(Data)',
        arquivos:aula1
    },
]

