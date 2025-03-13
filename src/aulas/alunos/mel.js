import js from '../../_imgs/js.png'
function formarTexto(aula,num){
    return `/alunos/mel/a${aula}/t${num}.txt`
}
const aula1=[
    {linguagem:'javascript',nome:'Variáveis Simples',icone:js,caminho:formarTexto(1,1)},
    {linguagem:'javascript',nome:'Boolean',icone:js,caminho:formarTexto(1,2)},
    {linguagem:'javascript',nome:'Number',icone:js,caminho:formarTexto(1,3)},
    {linguagem:'javascript',nome:'String',icone:js,caminho:formarTexto(1,4)},
    {linguagem:'javascript',nome:'Variáveis Complexas',icone:js,caminho:formarTexto(1,5),
        texto:`
Este arquivo é apenas para você compreender até onde as Variáveis Compostas podem chegar
E entender a importância delas quando vamos construir programas mais complexos 
- Ou seja, não se preocupa com esses 2 tipos de variáveis, até voce aprender bem as Simples
        `
    },
    {linguagem:'javascript',nome:'Simulação Enem',icone:js,caminho:formarTexto(1,6),
    texto:`
Este arquivo é para você ver o quanto a programação pode te ajudar nas tarefas do dia-a-dia, ou no seu futuro trabalho, caso não siga a carreira de T.I.
-Dica 1: Altere as notas baseado nas que você imagina conseguir no ENEM
-Dica 2: Altere os pesos baseado nos pesos que a Universidade que voce quer estudar oferece para a carreira que você quer
    `}
    ]
export const mel=[
    {
        nome:'Aula 1',
        arquivos:aula1
    },
]