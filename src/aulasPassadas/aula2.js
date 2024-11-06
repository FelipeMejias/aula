import py from '../imgs/file.png'
export const arquivos2Clarissa=[
    {
        titulo:'exercicio1',img:py,
        texto:`
'''
Exercício 1 : Mostre, por hora do dia, a quantidade de visitas a um site 
a partir do registro de acesso dos usuários.  
Cada acesso possui o endereço de IP do usuário e o horário de acesso ('hh:mm')
'''
# Registros de acesso dos usuários: cada lista interna representa (IP, Hora)
acessos = [
    ["192.168.1.1", "13:45"], ["192.168.1.2", "15:30"], ["192.168.1.3", "13:15"],
    ["192.168.1.4", "09:10"], ["192.168.1.5", "09:55"], ["192.168.1.6", "21:20"],
    ["192.168.1.7", "21:50"], ["192.168.1.8", "00:05"], ["192.168.1.9", "00:59"],
    ["192.168.1.10", "15:45"], ["192.168.1.11", "13:00"]
]

['192','168']
total_visitas_por_hora = [0] * 24

#  [0,0,1,0,0,0,0,0,2,]   
# Conta as visitas por hora
for acesso in acessos:
    horario = acesso[1]  # O horário está na segunda posição da lista
    hora = int(horario.split(":")[0])  # Extrai a hora do dia a partir da string "HH:MM"
    total_visitas_por_hora[hora] += 1

# Exibe o resultado
for hora, total in enumerate(total_visitas_por_hora):
    if hora<10:
        print(f"Hora 0{hora}:00 - {total} visitas")
    else:
        print(f"Hora {hora}:00 - {total} visitas")
    print(f"Hora {hora:02d}:00 - {total} visitas")


'''
# [0,1,2,3,...,23]
def visitasPorHora(lis):
    resposta=[]
    for h in range(0,24):
        c=0
        for acesso in lis:
            horario=acesso[1]
            hora=horario[0]+horario[1]
            if int(hora)==h:
                c+=1
        resposta.append(c)
    print(resposta)

visitasPorHora(acessos)
'''
`
    },{
        titulo:'exercicio3',img:py,
        texto:`
vendas_funcionarios = [
    [1001, [200, 300, 250, 400, 150, 320, 280]],   # Funcionário 1001
    [1002, [100, 150, 130, 200, 180, 250, 300]],   # Funcionário 1002
    [1003, [80, 120, 110, 150, 100, 130, 170]],    # Funcionário 1003
    [1004, [250, 200, 220, 210, 300, 400, 380]],   # Funcionário 1004
]
'''
contadores = [0] * 7

for funcionario in vendas_funcionarios:
    valoresVendidos = funcionario[1]
    for (i, valor) in enumerate(valoresVendidos):
        contadores[i] += valor
print(f"As vendas feitas durante os dias de semana são : {contadores}")
    '''    

'''
Exercício 3: Usando a mesma lista do exercício 2, identificar o funcionário 
com a maior venda em cada dia da semana e o valor da venda correspondente.
 Cada elemento da lista de vendas dos funcionários terá a 
 matrícula do funcionário e uma lista com o montante vendido para cada dia da semana
 (0 = Domingo, 1 = Segunda-feira, ..., 6 = Sábado).
 '''
#[101,101,101,102,10,102]
maiorVendaPorDia = [0] * 7
#[300,0,0,0,0]
#[1004,-1,]
funcionarioMaiorVendaPorDia =  [-1] * 7 
for funcionarios in vendas_funcionarios :
    valoresVendidos = funcionarios[1] # [250, 200, 220, 210, 300, 400, 380]
    matricula = funcionarios[0] # 1004
    for (i, valor) in enumerate(valoresVendidos):
        if valor > maiorVendaPorDia[i] :
            maiorVendaPorDia[i] = valor
            funcionarioMaiorVendaPorDia[i] = matricula 
print(f"A maior venda de cada dia é do fúncionario{funcionarioMaiorVendaPorDia} da semana corresponde : {maiorVendaPorDia} ")
`
    },
]