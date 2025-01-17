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
-dois números e uma string representando a operação desejada.
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

export const rafael=[
    {
        nome:'Aula 1',
        arquivos:aula1
    },
    {
        nome:'Resumos',
        arquivos:resumos
    },
    
]