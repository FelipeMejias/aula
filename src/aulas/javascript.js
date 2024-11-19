
export const javascript=[
    {
        nome:"Variável e condicional",
        subtopicos:[
        {nome:"Variáveis simples",texto:
    [`'''
    Varaveis guardam um valor, como uma gaveta com uma etiqueta
    As 3 variáveis simples são:
    '''
    # inteiro`,`
    minhaQuantidade = 6`,`
     
    # string (palavra)`,`
    minhaFruta = 'melancia'`,`
         
    # booleano (True ou False)`,`
    statusAtivo = True
    `]
        },{nome:"Condicionais (if,elif,else)",texto:
    [`'''
    If executa o bloco de código caso a condicao seja True
    Esse bloco é definido pelo que tem 1 Tab a mais que ele
    '''`,`
    quantidade = 13
    if quantidade > 10 :
        print( 'maior que 10' )
    `,`
    '''
    Elif executa o bloco de código caso:
    Nao tenha entrado no bloco de cima & a condicao seja True
    '''`,`
    quantidade = 7
    if quantidade > 10 :
        print( 'maior que 10' )
    elif quantidade > 5 :
        print( 'maior que 5' )
    `,`
    '''
    Else executa o bloco de código caso todos os blocos derem False
    '''`,`
    quantidade = 7
    if quantidade > 10 :
        print( 'maior que 10' )
    else :
        print( 'menor ou igual a 10' )
    `]  
        },{nome:"Condicional dentro de outra",texto:''
        }]
    },{
        nome:"Função",
        subtopicos:[
          {nome:"Criar e chamar",texto:
    [`
    # Funçao é um bloco de codigo executado quando seu nome é chamado
     
    # Criar funçao`,`
    def minhaFuncao():
        print( "Fui chamada" )`,`
     
    # Chamar funcao`,`
    minhaFuncao()
    `]
        },{nome:"Parâmetros",texto:
    [`'''
    Os parametros sao escolhidos na criacao da funcao
    E sao passados na hora de chamar a funcao, a ordem importa
    '''
    # Criar funcao`,`
    def compareOsDois( num1 , num2 ):
        if num1 > num2 :
            print( 'o primeiro e maior' )
        elif num1 == num2 :
            print( 'sao iguais' )
        else :
            print( 'o segundo e maior' )`,`
     
    # Chamar funcao`,`
    compareOsDois( 7 , 5 )
    compareOsDois( 4 , 4 )
    `],exer:[
        [
    <p>Escreva uma funcao que recebe um numero e imprime o dobro dele</p>,
    <p>Dica: o sinal de multiplicacao e feito com *</p>,
    <p><strong>ESPERADO:</strong></p>,
    <p>funcao(7)</p>,
    <p><strong>14</strong></p>
        ],
        [
    <p>Escreva uma funcao que recebe duas frutas e imprime: fruta1 & fruta2</p>,
    <p>Dica: para somar strings use string1 + string2 + string3</p>,
    <p><strong>ESPERADO:</strong></p>,
    <p>funcao( 'morango' , 'laranja' )</p>,
    <p><strong>morango & laranja</strong></p>
        ]
    ]
        },{nome:"Uma chamando outra",texto:''
        },{nome:"Parâmetro fixo",texto:''
        }]
    },{
        nome:"Variável Lista",
        subtopicos:[
          {nome:"Estrutura",texto:''
        },{nome:"Inserir e retirar",texto:''
        },{nome:"Map e Filter",texto:''
        }]
    },{
        nome:"Loops",
        subtopicos:[
          {nome:"While e For",texto:''
        },{nome:"For ... of ...",texto:''
        },{nome:"Auxiliadores",texto:''
        }]
    },{
        nome:"Variável Objeto",
        subtopicos:[
          {nome:"Estrutura",texto:''
        },{nome:"Lista de Objetos",texto:''
        }]
    },/*{
        nome:"",
        subtopicos:[
          {nome:"",texto:''
        },{nome:"",texto:''
        },{nome:"",texto:''
        },{nome:"",texto:''
        }]
    }*/
    ]