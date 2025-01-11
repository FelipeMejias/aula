import js from '../../_imgs/js.png'
import re from '../../_imgs/react.png'
function formarTexto(aula,num){
    return `/alunos/caua/a${aula}/t${num}.txt`
}

const aula1=[
    {nome:'Arquivo da aula',icone:js,caminho:formarTexto(1,1)},
    {nome:'Tradução PY=>JS',icone:js,caminho:formarTexto(1,2)},
    {nome:'Exercício Calculadora',icone:js,caminho:formarTexto(1,3),texto:`
Crie uma função chamada calculadora que recebe três parâmetros: 
-dois números e uma string representando a operação desejada.
A função deve realizar a operação indicada com os dois números e retornar o resultado, seguindo as regras:
-a operação deve ser indicada como uma string: 'soma', 'subtracao', 'multiplicacao' ou 'divisao'.
-caso a operação não seja reconhecida, a função deve retornar uma mensagem de erro.
-se a operação for divisão e o divisor for zero, a função deve retornar uma mensagem de erro específica.
        `},
    {nome:'Exercício Validar Senhas',icone:js,caminho:formarTexto(1,4),texto:`
Crie uma função chamada validar que recebe uma string como parâmetro
Ela deve retornar:
-'Senha válida' caso atenda os requisitos que estão como constantes no código
-'Erro: descrição do erro cometido'

EXTRA: Tente passar o valor mínimo de caracteres como parâmetro da função
        `},
    
]
const aula2=[
    {nome:'Lista',icone:js,caminho:formarTexto(2,1)},
    {nome:'Slice',icone:js,caminho:formarTexto(2,2)},
    {nome:'forEach',icone:js,caminho:formarTexto(2,3)},
    {nome:'Loop',icone:js,caminho:formarTexto(2,4)},
    {nome:'Nativas Loop',icone:js,caminho:formarTexto(2,5)},
    {nome:'Ordenar',icone:js,caminho:formarTexto(2,6)},
    

    {nome:'Objetos & Importar',icone:js,caminho:formarTexto(2,7)},
    {nome:'Exportar',icone:js,caminho:formarTexto(2,8)},
    {nome:'Spread',icone:js,caminho:formarTexto(2,9)},

    {nome:'Ternário',icone:js,caminho:formarTexto(2,10)},
]
const aula2ex=[
    {nome:'Treinamento Tropas',icone:js,caminho:formarTexto(3,1),texto:`
A partir de uma lista com objetos com:
-nome
-tempo (duração do treinamento em segundos)
Faça uma função que, para cada objeto, imprima, por exemplo:
-Magos em treinamento. Em 10 segundos estarão prontos para combate!
        `},
    {nome:'Moldar Tropas',icone:js,caminho:formarTexto(3,2),texto:`
A partir de 5 listas de tamanhos iguais, são elas:
-nomes, velocidades, forcas, inteligencias, resistencias
Faça uma função que retorne uma lista de objetos no formato:
-{nome,velocidade,forca,inteligencia,resistencia}
        `},
    {nome:'Poder do Açúcar',icone:js,caminho:formarTexto(3,3),texto:`
Um jogador ativou um poder temporário onde todas as tropas com a palavra "Açúcar" no nome, terão o atributo "força" em dobro.
Faça uma função que receba a lista de tropas que o jogador escolheu para combate e, para cada tropa, imprima:
-Deuses do Açúcar atacam com 16 de força!
        `},
    
]
const aula3=[
    {nome:'App.js',icone:js,caminho:formarTexto(4,1)},
    {nome:'infos.js',icone:js,caminho:formarTexto(4,2)},
    {nome:'Clube.js',icone:js,caminho:formarTexto(4,3)},
]
export const caua=[
    {
        nome:'Aula 1',
        arquivos:aula1
    },
    {
        nome:'Aula 2',
        arquivos:aula2
    },{
        nome:'Aula 2 - Exercicios',
        arquivos:aula2ex
    },{
        nome:'Aula 3',
        arquivos:aula3
    },
]