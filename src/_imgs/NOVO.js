//VARIÁVEIS
//guardam um valor, damos um nome qualquer ao criar
//Principais motivos para criá-las: 
//== Usar o mesmo valor em várias partes do código
//== Passar valores entre arquivos

//TIPOS DE VARIÁVEIS

//========Int (números inteiros) & Float (números quebrados)
const moedas = 30
const preco = 5
const taxa = 4.7
//Operações:

const conta1 = moedas + preco
const conta2 = moedas - preco
const conta3 = moedas * preco //Multiplicação
const conta4 = moedas / preco //Divisão
const conta5 = moedas % 7 //Resto da Divisão ( 30 / 7 = 28 )
console.log(conta1,conta2,conta3,conta4,conta5)
//Imprime=> 35 25 150 6 2

const dizima = moedas / taxa
const arredondada = dizima.toFixed(2) //Arredonda para 3 casas decimais
console.log(dizima,arredondada) 
//Imprime=>6.382978723404255 6.383
//=======================================================arredondamentos

//========String (usada para textos, datas... )
const minhaFruta = 'melancia'
//Operações:


console.log(conta1,conta2,conta3,conta4,conta5)
//Imprime=> 35 25 150 6 2


console.log(dizima,arredondada) 
//Imprime=>6.382978723404255 6.383
//=======================================================arredondamentos


     
# booleano (True ou False)
statusAtivo = True

'''
If executa o bloco de código caso a condicao seja True
Esse bloco é definido pelo que tem 1 Tab a mais que ele
'''
quantidade = 13
if quantidade > 10 :
    print( 'maior que 10' )

'''
Elif executa o bloco de código caso:
Nao tenha entrado no bloco de cima & a condicao seja True
'''
quantidade = 7
if quantidade > 10 :
    print( 'maior que 10' )
elif quantidade > 5 :
    print( 'maior que 5' )

'''
Else executa o bloco de código caso todos os blocos derem False
'''
quantidade = 7
if quantidade > 10 :
    print( 'maior que 10' )
else :
    print( 'menor ou igual a 10' )

    # Funçao é um bloco de codigo executado quando seu nome é chamado
 
    # Criar funçao
    def minhaFuncao():
        print( "Fui chamada" )
     
    # Chamar funcao
    minhaFuncao()

'''
Os parametros sao escolhidos na criacao da funcao
E sao passados na hora de chamar a funcao, a ordem importa
'''
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
compareOsDois( 4 , 4 )*/