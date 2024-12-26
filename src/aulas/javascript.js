function formarCaminho(topico,sub){
  return `/conteudo/javascript/t${topico}/j${sub}.txt`
}
export const javascript=[
{
  nome:'Variáveis Simples',
  arquivos:[
    {nome:'Criar e Alterar valor',caminho:formarCaminho(1,1),texto:`
As variáveis armazenam um valor. Com elas, podemos usar o valor varias vezes digitando apenas seu nome.
Criamos usando let se vamos mudar o valor depois
E criamos com const para o valor ser constante
Diferenciamos as duas para manter o código mais legível e evitar mudanças indesejadas.
      `},
    {nome:'Tipos',caminho:formarCaminho(1,2),texto:`
Existem 3 tipos de variáveis Simples:
Numeral ( int ou float )
Palavra ( string )
Verdadeiro/Falso ( boolean )
São Simples pois possuem um valor único. As 2 Complexas são Lista e Objeto que guardam um conjunto de valores, veremos mais para frente.
      `},
    {nome:'Int e Float',caminho:formarCaminho(1,3),texto:`

      `},
    {nome:'String',caminho:formarCaminho(1,4),texto:`

      `},
    {nome:'Boolean',caminho:formarCaminho(1,5),texto:`

      `},]
},{
  nome:'Condicionais',
  arquivos:[
    {nome:'If+else',caminho:formarCaminho(2,1),texto:`

      `},
    {nome:'Else if',caminho:formarCaminho(2,2),texto:`

      `},
    {nome:'Condicionais aninhadas',caminho:formarCaminho(2,3),texto:`

      `},]
},{
  nome:'Função',
  arquivos:[
    {nome:'Criar e chamar',caminho:formarCaminho(3,1),texto:`

      `},
    {nome:'Parâmetros',caminho:formarCaminho(3,2),texto:`

      `},
    {nome:'Funções aninhadas',caminho:formarCaminho(3,3),texto:`

      `},
    {nome:'Parâmetro fixo',caminho:formarCaminho(3,4),texto:`

      `},
    {nome:'Funções anônimas (arrow function)',caminho:formarCaminho(3,5),texto:`

      `},]
},{
  nome:'Variável Lista',
  arquivos:[
    {nome:'Estrutura',caminho:formarCaminho(4,1),texto:`

      `},
    {nome:'Inserir e retirar ',caminho:formarCaminho(4,2),texto:`

      `},
    {nome:'Mapear e Filtrar',caminho:formarCaminho(4,3),texto:`

      `},
    {nome:'Arrays em linha',caminho:formarCaminho(4,4),texto:`

      `},]
},{
  nome:'Loops',
  arquivos:[
    {nome:'While e For',caminho:formarCaminho(5,1),texto:`

      `},
    {nome:'For --- of ---',caminho:formarCaminho(5,2),texto:`

      `},
    {nome:'Auxiliadores (break, continue) ',caminho:formarCaminho(5,3),texto:`

      `},]
},{
  nome:'Variável Objeto',
  arquivos:[
    {nome:'Estrutura',caminho:formarCaminho(6,1),texto:`

      `},
    {nome:'Lista de Objetos',caminho:formarCaminho(6,2),texto:`

      `},
    {nome:'Métodos úteis',caminho:formarCaminho(6,3),texto:`

      `},]
},{
  nome:'Iterações',
  arquivos:[
    {nome:'Separar String',caminho:formarCaminho(7,1),texto:`

      `},
    {nome:'Índice variando em lista',caminho:formarCaminho(7,2),texto:`

      `},
    {nome:'For com índice ',caminho:formarCaminho(7,3),texto:`

      `},]
},{
  nome:'Tratar Erros',
  arquivos:[
    {nome:'Try+Catch',caminho:formarCaminho(8,1),texto:`

      `},
    {nome:'Lançar exceções',caminho:formarCaminho(8,2),texto:`

      `},]
},{
  nome:'Funções Async',
  arquivos:[
    {nome:'Promises',caminho:formarCaminho(9,1),texto:`

      `},
    {nome:'Async/Await ',caminho:formarCaminho(9,2),texto:`

      `},]
}

]
