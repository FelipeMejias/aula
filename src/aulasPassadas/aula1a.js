export const arquivos1Antonio=[
    {
        titulo:'função',
        texto:`
# Funcao e um bloco de codigo executado quando seu nome e chamado

 

# Criar funcao

def minhaFuncao():

print( "Fui chamada" )

 

# Chamar funcao

minhaFuncao()
    `},{
        titulo:'função-parâmetro',
        texto:`
# Os parametros sao escolhidos na criacao da funcao

# E sao passados na hora de chamar a funcao, a ordem importa

 

# Criar funcao

def compareOsDois( num1 , num2 ):

if num1 > num2 :

print( 'o primeiro e maior' )

elif num1 == num2 :

print( 'sao iguais' )

else :

print( 'o segundo e maior' )

 

# Chamar funcao

compareOsDois( 7 , 5 )

compareOsDois( 4 , 4 )
        `
    },{
        titulo:'variáveis',
        texto:`
# Varaveis guardam um valor, como uma gaveta com uma etiqueta

# As 3 variáveis simples são:

 

# inteiro

minhaQuantidade = 6

 

# string (palavra)

minhaFruta = 'melancia'

 

# booleano (True ou False)

statusAtivo = True
        `
    },{
        titulo:'condicionais',
        texto:`
# If executa o bloco de código caso a condicao seja True

# Esse bloco e definido pelo que tem 1 Tab a mais que ele

quantidade = 13

if quantidade > 10 :

print('maior que 10' )

 

# Elif executa o bloco de código caso:

# Nao tenha entrado no bloco de cima & a condicao seja True

quantidade = 7

if quantidade > 10 :

print( 'maior que 10' )

elif quantidade > 5 :

print( 'maior que 5' )

 

# Else executa o bloco de código caso todos os blocos derem False

quantidade = 7

if quantidade > 10 :

print( 'maior que 10' )

else :

print( 'menor ou igual a 10' )
        `
    }
]