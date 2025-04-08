import js from '../../_imgs/js.png'
function formarTexto(aula,num){
    return `/alunos/raffos/a${aula}/t${num}.txt`
}
const aula1=[
    {linguagem:'javascript',nome:'Variáveis Simples',icone:js,caminho:formarTexto(1,1)},
    {linguagem:'javascript',nome:'Função e Condição',icone:js,caminho:formarTexto(1,2)},

    {linguagem:'javascript',nome:'EXERCÍCIO 1',icone:notass,texto:`
Crie 2 variáveis (notas do aluno):
-nota1
-nota2
Crie uma função que calcula a média que ficou cada aluno da seguinte forma:
-Dentro da função, crie uma variável soma, que armazenará o valor da soma das duas notas
-Depois, crie uma variável média, que aramazenará o valor da divisão da soma por 2
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
export const raffos=[
    {
        nome:'Aula 1',
        arquivos:aula1
    },
]