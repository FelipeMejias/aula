import js from '../../_imgs/js.png'
function formarTexto(aula,num){
    return `/textos/victoria/a${aula}/t${num}.txt`
}

const aula1=[
    {titulo:'Var - Int e Float',icone:js,texto:formarTexto(1,1)},
    {titulo:'Var - String',icone:js,texto:formarTexto(1,2)},
    {titulo:'Var - Booleano',icone:js,texto:formarTexto(1,3)},
]
export const convidadoJS=[
    {
        titulo:'Aula 1 (Demonstração)',
        status:'Feito',
        data:'(Data)',
        arquivos:aula1
    },
]

