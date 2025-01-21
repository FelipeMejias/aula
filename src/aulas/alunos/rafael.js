import js from '../../_imgs/js.png'
import py from '../../_imgs/python.png'
function formarTexto(aula,num){
    return `/alunos/rafael/a${aula}/t${num}.txt`
}

const aula1=[
    {nome:'Arquivo da aula',icone:py,caminho:formarTexto(1,1)},
    {nome:'Exercício Calculadora',icone:py,caminho:formarTexto(1,2),texto:`
Troque o valor das variaveis para que os prints imprimam frases como:
-A soma entre 4 e 5 resulta em 9
-A multiplicação entre 3 e 2 resulta em 6
Após conseguir que os prints estejam certos, tente trocar alguns dos valores para testar se o codigo inteiro está certo
-OBS: Sempre quevocê trocar a operação, voce deve trocar o resultado para eles corresponderem
        `},
   
    
]
const resumos=[
    {nome:'Vaiáveis simples',icone:py,caminho:formarTexto(2,1)},
    {nome:'Number',icone:py,caminho:formarTexto(2,2)},
    {nome:'String',icone:py,caminho:formarTexto(2,3)},
    {nome:'Boolean',icone:py,caminho:formarTexto(2,4)},
]
const aula2=[
    {nome:'Função e Condicional',icone:py,caminho:formarTexto(3,1)},
    {nome:'Calculadora em função',icone:py,caminho:formarTexto(3,2)},
    {nome:'Retorno de funções',icone:py,caminho:formarTexto(3,3)},
    {nome:'Aninhamento',icone:py,caminho:formarTexto(3,4)},
]

export const rafael=[
    {
        nome:'Aula 1',
        arquivos:aula1
    },
    {
        nome:'Resumos',
        arquivos:resumos
    },{
        nome:'Aula 2',
        arquivos:aula2
    },
    
]