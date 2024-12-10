import i6 from '../../_imgs/i6-eduardo.png'
import py from '../../_imgs/python.png'
import flet from '../../_imgs/flet.png'
import sql from '../../_imgs/sql.jpg'
import notas from '../../_imgs/notass.jpg'
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
const aula2=[
    {titulo:'Loop',icone:py,texto:formarTexto(2,1)},
    {titulo:'Listas- métodos',icone:py,texto:formarTexto(2,2)},
    {titulo:'Lista- mapear e filtrar',icone:py,texto:formarTexto(2,3)},
    {titulo:'Dicionário',icone:py,texto:formarTexto(2,4)},
]
const aula3=[
    {titulo:'Ex- Data de provas',icone:py,texto:formarTexto(3,1)},
    {titulo:'DICA + Ex-Bonus',icone:py,texto:formarTexto(3,2)},
    {titulo:'Back-end com Flet',icone:flet,texto:formarTexto(3,3)},
    {titulo:'Conexão ao banco',icone:sql,texto:formarTexto(3,4)},
    {titulo:'Ex- Feito em aula',icone:py,texto:formarTexto(3,5)},
    {titulo:'Diferença Front e Back',img:i6,icone:notas},
]
const aula4=[
    {titulo:'DatasPprovas com Split',icone:py,texto:formarTexto(4,1)},
]
export const eduardo=[//Eduardo
    {
        titulo:'Aula 1',
        data:'Terça 12/11',
        arquivos:aula1
    },{
        titulo:'Aula 2',
        data:'Terça 19/11',
        arquivos:aula2
    },{
        titulo:'Aula 3',
        data:'Terça 26/11',
        arquivos:aula3
    },{
        titulo:'Aula 4',
        data:'Terça 05/12',
        arquivos:aula4
    },
]

