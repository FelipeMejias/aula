
export const javascript=[
    {
        nome:"Variável e condicional",
        subtopicos:[
        {nome:"Variáveis simples",bonus:false,texto:
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
        },{nome:"Condicionais (if,elif,else)",bonus:false,texto:
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
        },{nome:"Condicional dentro de outra",bonus:true,texto:''
        }]
    },{
        nome:"Função",
        subtopicos:[
          {nome:"Criar e chamar",bonus:false,texto:
    [`
    # Funçao é um bloco de codigo executado quando seu nome é chamado
     
    # Criar funçao`,`
    def minhaFuncao():
        print( "Fui chamada" )`,`
     
    # Chamar funcao`,`
    minhaFuncao()
    `]
        },{nome:"Parâmetros",bonus:false,texto:
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
        },{nome:"Uma chamando outra",bonus:true,texto:''
        },{nome:"Parâmetro fixo",bonus:true,texto:''
        }]
    },{
        nome:"Variável Lista",
        subtopicos:[
          {nome:"Estrutura",bonus:false,texto:''
        },{nome:"Inserir e retirar",bonus:false,texto:''
        },{nome:"Map e Filter",bonus:false,texto:''
        }]
    },{
        nome:"Loops",
        subtopicos:[
          {nome:"While e For",bonus:false,texto:''
        },{nome:"For ... of ...",bonus:false,texto:''
        },{nome:"Auxiliadores",bonus:false,texto:''
        }]
    },{
        nome:"Variável Objeto",
        subtopicos:[
          {nome:"Estrutura",bonus:false,texto:''
        },{nome:"Lista de Objetos",bonus:false,texto:''
        }]
    },/*{
        nome:"",
        subtopicos:[
          {nome:"",bonus:false,texto:''
        },{nome:"",bonus:false,texto:''
        },{nome:"",bonus:true,texto:''
        },{nome:"",bonus:true,texto:''
        }]
    }*/
    ]