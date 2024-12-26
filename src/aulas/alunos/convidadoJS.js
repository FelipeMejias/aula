import js from '../../_imgs/js.png'
function formarTexto(aula,num){
    return `/alunos/victoria/a${aula}/t${num}.txt`
}

const aula1=[
    {nome:'Var - Int e Float',icone:js,caminho:formarTexto(1,1)},
    {nome:'Var - String',icone:js,caminho:formarTexto(1,2)},
    {nome:'Var - Booleano',icone:js,caminho:formarTexto(1,3)},
]
export const convidadoJS=[
    {
        nome:'Demonstração',
        data:'(Data)',
        arquivos:aula1
    },
]

