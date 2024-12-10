import py from '../../_imgs/python.png'
function formarTexto(aula,num){
    return `/textos/clarissa/a${aula}/t${num}.txt`
}
export const aula1=[
    {titulo:'Exercicio 1',icone:py,texto:formarTexto(1,1)},
    {titulo:'Exercicio 2',icone:py,texto:formarTexto(1,2)},
    {titulo:'Achar Lista mais profunda',icone:py,texto:formarTexto(1,3)},
    ]
export const aula2=[
    {titulo:'Exercicio 1',icone:py,texto:formarTexto(2,1)},
    {titulo:'Exercicio 3',icone:py,texto:formarTexto(2,2)},
]
export const clarissa=[
    {
        titulo:'Aula 1',
        status:'Feito',
        data:'Quinta 24/10',
        arquivos:aula1
    },{
        titulo:'Aula 2',
        status:'Feito',
        data:'Quinta 31/10',
        arquivos:aula2
    },
]
