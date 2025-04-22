import js from '../../_imgs/js.png'
import notass from '../../_imgs/notass.jpg'
function formarTexto(aula,num){
    return `/alunos/junio/a${aula}/t${num}.txt`
}
const aula1=[
    {linguagem:'javascript',nome:'Variáveis Simples',icone:js,caminho:formarTexto(1,1)},
    {linguagem:'javascript',nome:'Number',icone:js,caminho:formarTexto(1,2)},
    {linguagem:'javascript',nome:'String',icone:js,caminho:formarTexto(1,3)},
    {linguagem:'javascript',nome:'Boolean',icone:js,caminho:formarTexto(1,4)},
    {linguagem:'javascript',nome:'Função',icone:js,caminho:formarTexto(1,5)},

    {linguagem:'javascript',nome:'EXERCÍCIO 1',icone:notass,texto:`
Crie 2 variáveis (notas do aluno):
-nota1
-nota2
Crie uma função que calcula a média que ficou cada aluno da seguinte forma:
-Dentro da função, crie uma variável soma, que armazenará o valor da soma das duas notas
-Ainda dentro da função, crie uma variável média, que aramazenará o valor da divisão da soma por 2
-Por fim, faça aparecer no console uma frase como: Você ficou com média 7.2
    `},{linguagem:'javascript',nome:'EXERCÍCIO 2',icone:notass,texto:`
Crie uma função que recebe 1 parâmetro:
-nome
A função deve escrever 3 frases no console (caso o nome seja Bruno, por exemplo):
-Bruno acordou
-Muito trabalho foi feito por Bruno hoje
-Bruno dormiu
    `},{linguagem:'javascript',nome:'EXERCÍCIO 3',icone:notass,texto:`
Crie uma função que recebe 2 parâmetros:
-valor
-desconto (virá em porcentagem, 20 significa que o cliente tem 20% de desconto)
A função deve calcular o valor do desconto e mostrar 2 frases no console:
(Imaginando que os 2 parâmetros passados foram 1000 e 30)
-O valor com desconto foi de R$ 700
-A economia foi de R$ 300
    `},
    ]
const aula2=[
    {linguagem:'javascript',nome:'Revisão Boolean',icone:js,caminho:formarTexto(2,1)},
    {linguagem:'javascript',nome:'Funções aninhadas',icone:js,caminho:formarTexto(2,2)},
    {linguagem:'javascript',nome:'Return',icone:js,caminho:formarTexto(2,3)},
    {linguagem:'javascript',nome:'Funções com return aninhadas',icone:js,caminho:formarTexto(2,4)},
    {linguagem:'javascript',nome:'Reaproveitando função',icone:js,caminho:formarTexto(2,5)},

    {linguagem:'javascript',nome:'EXERCÍCIO 1',icone:notass,texto:`
Faça uma função que recebe: o valor de um produto
-Caso o valor seja maior que 100, a função retorna o valor com desconto de 20%
-Caso o valor seja menor que 100, a função retorna o valor sem desconto
    `},{linguagem:'javascript',nome:'EXERCÍCIO 2',icone:notass,texto:`
Agora, a função deve receber 2 parâmetros:
-valor do produto
-se o cliente tem desconto ou não (true ou false)
A função deve retornar o valor inteiro ou os 20% de desconto baseado no valor do 2º parâmetro
    `},{linguagem:'javascript',nome:'EXERCÍCIO 3',icone:notass,texto:`
Dessa vez, o segundo parâmetro será o grau de fidelidade do cliente com a loja, os parâmetros serão:
-valor do produto
-"A" ou "B" ou "C" ou false
Caso o cliente receba false como parâmetro, é sua primeira compra, ele não tem desconto
Os clientes A têm 30%, os clientes B têm 20%, e os clientes C têm 10% de desconto
    `},
    ]
export const junio=[
    {
        nome:'Aula 1',
        arquivos:aula1
    },{
        nome:'Aula 2',
        arquivos:aula2
    },
]