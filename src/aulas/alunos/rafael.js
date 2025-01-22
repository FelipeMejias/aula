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
const exAula2=[
    {nome:'Preço aparelho com/sem plano',icone:py,caminho:formarTexto(4,1),texto:`
Defina a função calcularPreco que recebe dois parametros:
-um id ( vai de 1 a 3 )
-se o plano na operadora está sendo assinado (True ou False) 
Regra: Caso o segundo parametro não seja passado, deve ser considerado o valor False
Use como dados do exercício:
-o preço é 20% maior que de seu respectivo valor de mercado
-o desconto dado ao assinar o plano da operadora é 30%
Imprima o valor final no console no formato: 
-O preço do aparelho com plano é U$ 1060
        `},
    {nome:'Planos diferentes',icone:py,caminho:formarTexto(4,2),texto:`
Agora terão dois planos com descontos diferentes:
-Mensal ( dá 20% de desconto )
-Anual ( dá 40% de desconto )
Se o parâmetro plano receber 0 ou nao receber o parâmetro, nao há plano
Imprima o valor final no console no formato: 
-O preço do aparelho com este plano é U$ 960
        `},
    {nome:'Extras',icone:py,caminho:formarTexto(4,3),texto:`
Adicione o nome do aparelho na frase final, no formato:
-O preço do Galaxy Flip com este plano é U$ 960

Adicionar casos de erro para imprimir avisos como:
-Este aparelho não existe!
-Este plano não existe!

Crie um quarto aparelho, com "nome" e "preco"
        `},
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
    },{
        nome:'Exercícios',
        arquivos:exAula2
    },
    
]