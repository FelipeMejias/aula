import py from '../../_imgs/python.png'
function formarTexto(aula,num){
    return `/textos/eduardo/a${aula}/t${num}.txt`
}

const aula1=[
    {titulo:'Variável- int/float',icone:py,texto:formarTexto(1,1)},
    {titulo:'Variável- string',icone:py,texto:formarTexto(1,2)},
    {titulo:'Variável- booleano',icone:py,texto:formarTexto(1,3)},
    {titulo:'Condicional (if)',icone:py,texto:formarTexto(1,4)},
    {titulo:'Funções',icone:py,texto:formarTexto(1,5)},
]
export const convidadoPY=[
    {
        titulo:'Aula 1 (Demonstração)',
        status:'Feito',
        data:'(Data)',
        arquivos:aula1
    },
]

