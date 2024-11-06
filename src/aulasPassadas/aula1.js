import py from '../imgs/file.png'
export const arquivos1Clarissa=[
    {
        titulo:'exercicio1',img:py,
        texto:`
# 1) Considere uma lista de valores numéricos ou textuais, construa 
# uma função que receba esta lista e um texto, retornando quantas 
# ocorrências deste texto há na lista.

lista1=[3,7,'bh',87,3,9,'bh',5,9,'bj','nh','bh','jj',8]

def contarOcorrencias(lis,texto):
    c1=0
    for el in lis:
        if el==texto:
            c1=c1+1
    return c1

#print(contarOcorrencias(lista1,'bh'))
`},


{
        titulo:'exercicio2',img:py,
        texto:`
# 2) Considere uma lista estruturada,onde cada elemento é 
# da seguinte forma: [nome, dtNasc,alt, peso]
# construa uma função que receba esta lista e uma data, retornando 
# quantas pessoas da lista nasceram nesta data.

lista2=[
    ['Marco', '01/08/84', 1.95, 85],
    ['Pedro', '15/11/97', 1.59, 66],
    ['Julia', '15/11/97', 1.90, 59],
    ['Maria', '10/03/82', 1.65, 78],
    ['Vitor', '15/11/97', 1.77, 45],
    ['Tania', '02/05/78', 1.63, 82],
    ['Almir', '15/11/97', 1.87, 75],
    ]

def contarAniversariantes(lis,data):
    c2=0
    for el in lis:
        # elemento1 = ['Bia','01/11/97',1.95,85]
        if data == el[1]:
            c2=c2+1
    return c2

print(f'quantidade de aniversariantes: {contarAniversariantes(lista2,"15/11/97")}')
`
},{
    titulo:'camadas aninhadas',img:py,
    texto:`
lAninhadas= [[2,9,[[5,8]]],3,5,6,[8,[6,[6,9,[7,6]],8],9]]

def acharSequencia(el):
    if type(el) is list:
        i=0
        maiorProfundidade=1
        iEscolhido=-1
        sequenciaEscolhida=None
        for item in el:
            adicional=acharSequencia(item)[0]
            sequencia=acharSequencia(item)[1]
            profundidade=1+adicional
            if profundidade>maiorProfundidade:
                maiorProfundidade=profundidade
                iEscolhido=i
                sequenciaEscolhida=sequencia
            i+=1
        if iEscolhido<0:
            return [1,'']
        else:
            return [maiorProfundidade,str(iEscolhido)+sequenciaEscolhida]
    else:
        return [0,'']
    
resposta=acharSequencia(lAninhadas)
qtdCamadas=resposta[0]
sequencia=resposta[1]
print('Camadas de lista: '+str(qtdCamadas))
print('Sequencia para chegar na lista mais profunda: '+str(sequencia))

def elementoZeroCamadaFinal(lis,seq):
    x=lis
    for indice in seq:
        x=x[int(indice)]
    return x[0]


elemento=elementoZeroCamadaFinal(lAninhadas,sequencia)
print('Primeiro elemento da lista mais profunda: '+str(elemento))

lAninhadas= [[2,9,[[5,8]]],3,5,6,[8,[6,[6,9,[7,6]],8],9]]

def contarCamadasAninhamento(el):
    if type(el) is list:
        maiorProfundidade=1
        for item in el:
            camadas=contarCamadasAninhamento(item)
            profundidade=1+camadas
            if profundidade>maiorProfundidade:
                maiorProfundidade=profundidade
        return maiorProfundidade
    else:
        return 0

resposta=contarCamadasAninhamento(lAninhadas)
print('Camadas de lista: '+str(resposta))

    `
}

]
