export const arquivos1Clarissa=[
    {
        titulo:'exercicio1',
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
        titulo:'exercicio2',
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
},]
