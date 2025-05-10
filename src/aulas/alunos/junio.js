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
const aula3=[
    {linguagem:'javascript',nome:'Condicional aninhada',icone:js,caminho:formarTexto(3,1)},
    {linguagem:'javascript',nome:'Loops while',icone:js,caminho:formarTexto(3,2)},
    {linguagem:'javascript',nome:'Parâmetro fixo',icone:js,caminho:formarTexto(3,3)},
    {linguagem:'javascript',nome:'Índices: strings e listas',icone:js,caminho:formarTexto(3,4)},
    {linguagem:'javascript',nome:'Loops em listas',icone:js,caminho:formarTexto(3,5)},
    {linguagem:'javascript',nome:'Includes',icone:js,caminho:formarTexto(3,6)},
    {linguagem:'javascript',nome:'For em contagem',icone:js,caminho:formarTexto(3,7)},
    {linguagem:'javascript',nome:'Operações em listas',icone:js,caminho:formarTexto(3,8)},
    {linguagem:'javascript',nome:'EXERCÍCIO 1',icone:notass,caminho:formarTexto(3,9),texto:`
Você tem a lista das 6 pessoas que estão em um grupo 
Escreva uma função que recebe um nome como parâmetro
Caso a lista não esteja com seu número máximo, 10 integrantes, a função deve:
-Adicionar o integrante novo à lista
-printar no console um aviso de sucesso
Caso a lista já contenha 10 integrantes, a função avisa no console que o grupo está cheio
-Envolva o nome do participante nas mensagens de console
    `},{linguagem:'javascript',nome:'EXERCÍCIO 2',icone:notass,caminho:formarTexto(3,10),texto:`
Você tem 2 listas de carros: Bmw e Ferrari
Eles estão na mesma ordem na fila do estabelecimento, que estão na lista. Logo, quando alguém pede um carro de determinada marca, deve sair o primeiro. Depois o segundo e assim sucessivamente
Escreva uma função que receba a marca como parâmetro e printa no console o carro que saiu do estabelecimento
    `},{linguagem:'javascript',nome:'EXERCÍCIO 3',icone:notass,texto:`
Use a função que você fez ne EXERCÍCIO 1
Altere a mensagem de sucesso que é exibida no console, para:
-exibir a lista de integrantes incluindo o novo integrante
    `},
    ]
const aula4=[
    {linguagem:'javascript',nome:'RESOLUÇÃO 2',icone:js,caminho:formarTexto(4,1)},
    {linguagem:'javascript',nome:'RESOLUÇÃO 3',icone:js,caminho:formarTexto(4,2)},
    {linguagem:'javascript',nome:'For com números',icone:js,caminho:formarTexto(4,3)},
    {linguagem:'javascript',nome:'Auxiliadores',icone:js,caminho:formarTexto(4,4)},
    {linguagem:'javascript',nome:'Anônimas - map e filter',icone:js,caminho:formarTexto(4,5)},
    {linguagem:'javascript',nome:'Anônimas - forEach',icone:js,caminho:formarTexto(4,6)},
    {linguagem:'javascript',nome:'Map com índice',icone:js,caminho:formarTexto(4,7)},
    {linguagem:'javascript',nome:'Ordenar lista',icone:js,caminho:formarTexto(4,8)},
    {linguagem:'javascript',nome:'Nativas',icone:js,caminho:formarTexto(4,9)},
    {linguagem:'javascript',nome:'EXERCÍCIO 1',icone:notass,caminho:formarTexto(4,10),texto:`
Faça uma função que recebe uma lista de palavras como parâmetro
Ela deve percorrer a lista contando quantas palavras possui, com duas regras:
-As palavras que começam por vogal não são contadas
-Quando aparece uma palavra que comece com "z" a contagem para
Ao final, retorne a quantidade de palavras contadas
Tente usar os auxiliadores break e continue
    `},{linguagem:'javascript',nome:'EXERCÍCIO 2',icone:notass,caminho:formarTexto(4,11),texto:`
Uma empresa de jogos quer dar prêmios aos 5 melhores jogadores
As listas possuem os nomes e as pontuações correspondentes dos jogadores
A empresa está na dúvida se dá 10 ou 20 reais por ponto e te pede os relatórios para saber:
-Quanto cada jogador receberá
-Custo total
Complete a função com o loop "for" necessário para gerar o relatório conforme o exemplo
    `},
    ]
const aula5=[
    {linguagem:'javascript',nome:'Objeto',icone:js,caminho:formarTexto(5,1)},
    {linguagem:'javascript',nome:'Ex. Relatório',icone:js,caminho:formarTexto(5,2)},
    {linguagem:'javascript',nome:'Ex. Relatório com objetos',icone:js,caminho:formarTexto(5,3)},
    {linguagem:'javascript',nome:'Desestruturação',icone:js,caminho:formarTexto(5,4)},
    {linguagem:'javascript',nome:'Split',icone:js,caminho:formarTexto(5,5)},
]
export const junio=[
    {
        nome:'Aula 1',
        arquivos:aula1
    },{
        nome:'Aula 2',
        arquivos:aula2
    },{
        nome:'Aula 3',
        arquivos:aula3
    },{
        nome:'Aula 4',
        arquivos:aula4
    },{
        nome:'Aula 5',
        arquivos:aula5
    },
]