import i6 from '../../_imgs/i6-eduardo.png'
import py from '../../_imgs/python.png'
import flet from '../../_imgs/flet.png'
import sql from '../../_imgs/sql.jpg'
import notas from '../../_imgs/notass.jpg'
function formarTexto(aula,num){
    return `/alunos/eduardo/a${aula}/t${num}.txt`
}

const aula1=[
    {nome:'Variável- int/float',icone:py,caminho:formarTexto(1,1)},
    {nome:'Variável- string',icone:py,caminho:formarTexto(1,2)},
    {nome:'Variável- booleano',icone:py,caminho:formarTexto(1,3)},
    {nome:'Condicional (if)',icone:py,caminho:formarTexto(1,4)},
    {nome:'Funções',icone:py,caminho:formarTexto(1,5)},
]
const aula2=[
    {nome:'Loop',icone:py,caminho:formarTexto(2,1)},
    {nome:'Listas- métodos',icone:py,caminho:formarTexto(2,2)},
    {nome:'Lista- mapear e filtrar',icone:py,caminho:formarTexto(2,3)},
    {nome:'Dicionário',icone:py,caminho:formarTexto(2,4)},
]
const aula3=[
    {nome:'Ex- Data de provas',icone:py,caminho:formarTexto(3,1)},
    {nome:'DICA + Ex-Bonus',icone:py,caminho:formarTexto(3,2)},
    {nome:'Back-end com Flet',icone:flet,caminho:formarTexto(3,3)},
    {nome:'Conexão ao banco',icone:sql,caminho:formarTexto(3,4)},
    {nome:'Ex- Feito em aula',icone:py,caminho:formarTexto(3,5)},
    {nome:'Diferença Front e Back',img:i6,icone:notas},
]
const aula4=[
    {nome:'DatasPprovas com Split',icone:py,caminho:formarTexto(4,1)},
]
const aula5=[
    {nome:'Exercicio 1',icone:py,caminho:formarTexto(5,1)},
    {nome:'Exercicio 2',icone:py,caminho:formarTexto(5,2)},
    {nome:'Exercicio 3',icone:py,caminho:formarTexto(5,3)},
]
const panda=[
    {nome:'Ler inteiro',icone:py,caminho:formarTexto(6,1)},
    {nome:'Exibir com DataFrame',icone:py,caminho:formarTexto(6,2)},
    {nome:'Escrever',icone:py,caminho:formarTexto(6,3)},
]
const openpyxl=[
    {nome:'Ler células',icone:py,caminho:formarTexto(7,1)},
    {nome:'Escrever',icone:py,caminho:formarTexto(7,2)},
    {nome:'Fórmulas',icone:py,caminho:formarTexto(7,3)},
    {nome:'SUM',icone:py,caminho:formarTexto(7,4)},
]
export const eduardo=[//Eduardo
    {
        nome:'Aula 1',
        data:'Terça 12/11',
        arquivos:aula1
    },{
        nome:'Aula 2',
        data:'Terça 19/11',
        arquivos:aula2
    },{
        nome:'Aula 3',
        data:'Terça 26/11',
        arquivos:aula3
    },{
        nome:'Aula 4',
        data:'Terça 05/12',
        arquivos:aula4
    },{
        nome:'Exercícios Lanchonete',
        arquivos:aula5
    },{
        nome:'Panda',
        arquivos:panda
    },
    {
        nome:'openpyxl',
        arquivos:openpyxl
    },
]

