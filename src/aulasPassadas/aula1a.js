export const arquivos1Antonio=[
    {
        titulo:'função',
        texto:`
// Funcao e um bloco de codigo executado quando seu nome e chamado

 

// Criar funcao

function minhaFuncao(){
    console.log( "Fui chamada" )
}
 

// Chamar funcao

minhaFuncao()
    `},{
        titulo:'função-parâmetro',
        texto:`
// Os parametros sao escolhidos na criacao da funcao

// E sao passados na hora de chamar a funcao, a ordem importa

 

// Criar funcao

function compareOsDois( num1 , num2 ){

    if( num1 > num2 ){
        console.log( 'o primeiro e maior' )
    }else if( num1 == num2 ){
        console.log( 'sao iguais' )
    }else{
        console.log( 'o segundo e maior' )
    }
}

// Chamar funcao

compareOsDois( 7 , 5 )

compareOsDois( 4 , 4 )
        `
    },{
        titulo:'variáveis',
        texto:`
// Varaveis são criadas para guardarem um valor

// As 3 variáveis simples são:

 

// inteiro

const minhaQuantidade = 6

 

// string (palavra)

const minhaFruta = 'melancia'

 

// booleano (True ou False)

const statusAtivo = True
        `
    },{
        titulo:'condicionais',
        texto:`
// If executa o bloco de código caso a condicao seja True

// Esse bloco e definido pelo que tem 1 Tab a mais que ele

const quantidade = 13

if( quantidade > 10 ){
    console.log('maior que 10' )
    }
 

// Else if executa o bloco de código caso:

// Nao tenha entrado no bloco de cima & a condicao seja True

const quantidade = 7

if( quantidade > 10 ){
    console.log( 'maior que 10' )
}else if( quantidade > 5 ){
    console.log( 'maior que 5' )
}
 

// Else executa o bloco de código caso todos os blocos derem False

const quantidade = 7

if( quantidade > 10 ){
    console.log( 'maior que 10' )
}else{
    console.log( 'menor ou igual a 10' )
}
        `
    }
]