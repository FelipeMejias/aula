import py from '../../_imgs/python.png'
function formarTexto(aula,num){
    return `/textos/clarissa/a${aula}/t${num}.txt`
}
export const aula1=[
    {nome:'Exercicio 1',icone:py,texto:formarTexto(1,1)},
    {nome:'Exercicio 2',icone:py,texto:formarTexto(1,2)},
    {nome:'Achar Lista mais profunda',icone:py,texto:formarTexto(1,3)},
    ]
export const aula2=[
    {nome:'Exercicio 1',icone:py,texto:formarTexto(2,1)},
    {nome:'Exercicio 3',icone:py,texto:formarTexto(2,2)},
]
export const clarissa=[
    {
        nome:'Aula 1',
        data:'Quinta 24/10',
        arquivos:aula1
    },{
        nome:'Aula 2',
        data:'Quinta 31/10',
        arquivos:aula2
    },
]
