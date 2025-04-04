import js from '../../_imgs/js.png'
import notass from '../../_imgs/notass.jpg'
function formarTexto(aula,num){
    return `/alunos/matheus/a${aula}/t${num}.txt`
}
const aula1=[
    {linguagem:'javascript',nome:'index',icone:js,caminho:formarTexto(1,1)},
    {linguagem:'javascript',nome:'Numerais',icone:js,caminho:formarTexto(1,2)},
    {linguagem:'javascript',nome:'exercicio1',icone:js,caminho:formarTexto(1,3)},
    ]
const aula2=[
    {linguagem:'javascript',nome:'index',icone:js,caminho:formarTexto(2,1)},
    {linguagem:'javascript',nome:'movimentos',icone:js,caminho:formarTexto(2,2)},
    {linguagem:'javascript',nome:'notas',icone:js,caminho:formarTexto(2,3)},
    ]
const aula3=[
    {linguagem:'javascript',nome:'frutas',icone:js,caminho:formarTexto(3,1)},
    {linguagem:'javascript',nome:'frutas - Func em Func',icone:js,caminho:formarTexto(3,2)},
    {linguagem:'javascript',nome:'chuteiras',icone:js,caminho:formarTexto(3,3)},
    {linguagem:'javascript',nome:'calculadora',icone:js,caminho:formarTexto(3,4)},
    {linguagem:'javascript',nome:'EXERCICIO 1',icone:notass,texto:`
Nossa loja agora vende apenas um tipo de chuteira em 3 tamanhos. A diferença é que agora vamos considerar o estoque de cada tamanho (size)
Crie 3 variáveis:
-size39 = 2
-size40 = 3
-size41 = 1
Crie a função principal, que recebe 1 parametro: o tamanho (39 ou 40 ou 41)
Ela deve checar se o estoque está vazio. 
Se tiver vazio, deve printar um aviso do tipo:
- Chuteira 39 já se esgotou! Tente outra
Se ainda houver chuteira no estoque do tamanho pedido:
- Printar: Chuteira 39 comprada com sucesso! Restam: 1
- Diminuir 1 na variável de estoque correspondente
`,caminho:''},
    {linguagem:'javascript',nome:'EXERCICIO 2',icone:notass,texto:`
Agora você deve exibir o quanto a loja ganhou, para isso, crie uma variável caixa
- let caixa = 0 (Lembrando que a variável deve ser criada como let, não como const, pois queremos alterar o valor dela no futuro)
Altere sua função principal para ela ter um retorno.
Se houver a chuteira no estoque:
-Retorna 500 (preço da chuteira)
Se não houver a chuteira no estoque:
-Retorna 0
Em cada chamada da função principal, voce deve adicionar o valor retornado à variável caixa 
Ao final de todas as chamadas, printe o valor acumulado e veja se corresponde ao esperado (500 para cada vendida com sucesso)   
`,caminho:''},
    ]
export const matheus=[
    {
        nome:'Aula 1',
        arquivos:aula1
    },
    {
        nome:'Aula 2',
        arquivos:aula2
    },{
        nome:'Aula 3',
        arquivos:aula3
    },
]