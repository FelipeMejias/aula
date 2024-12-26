function formarCaminho(topico,sub){
  return `/conteudo/python/t${topico}/p${sub}.txt`
}
export const python=[
    {
      nome:'Variáveis Simples',
      arquivos:[
        {nome:'Int e Float',caminho:formarCaminho(1,1),texto:``},
        {nome:'String',caminho:formarCaminho(1,2),texto:``},
        {nome:'Booleano',caminho:formarCaminho(1,3),texto:``},
        {nome:'Tipagem',caminho:formarCaminho(1,4),texto:``},]
    },{
      nome:'Condicionais',
      arquivos:[
        {nome:'If+else',caminho:formarCaminho(2,1),texto:``},
        {nome:'Elif',caminho:formarCaminho(2,2),texto:``},
        {nome:'Condicionais aninhadas',caminho:formarCaminho(2,3),texto:``},]
    },{
      nome:'Função',
      arquivos:[
        {nome:'Criar e chamar',caminho:formarCaminho(3,1),texto:``},
        {nome:'Parâmetros',caminho:formarCaminho(3,2),texto:``},
        {nome:'Funções aninhadas',caminho:formarCaminho(3,3),texto:``},
        {nome:'Parâmetro fixo',caminho:formarCaminho(3,4),texto:``},
        {nome:'Funções anônimas (lambda)',caminho:formarCaminho(3,5),texto:``},]
    },{
      nome:'Variável Lista',
      arquivos:[
        {nome:'Estrutura',caminho:formarCaminho(4,1),texto:``},
        {nome:'Inserir e retirar ',caminho:formarCaminho(4,2),texto:``},
        {nome:'Mapear e Filtrar',caminho:formarCaminho(4,3),texto:``},
        {nome:'Compreensão de lista ',caminho:formarCaminho(4,4),texto:``},]
    },{
      nome:'Loops',
      arquivos:[
        {nome:'While e For ',caminho:formarCaminho(5,1),texto:``},
        {nome:'For --- in ---',caminho:formarCaminho(5,2),texto:``},
        {nome:'Auxiliadores (pass, break, continue) ',caminho:formarCaminho(5,3),texto:``},]
    },{
      nome:'Variável Dicionário',
      arquivos:[
        {nome:'Estrutura',caminho:formarCaminho(6,1),texto:``},
        {nome:'Lista de Dicionários',caminho:formarCaminho(6,2),texto:``},
        {nome:'Métodos úteis',caminho:formarCaminho(6,3),texto:``},]
    },{
      nome:'Iterações',
      arquivos:[
        {nome:'Separar String',caminho:formarCaminho(7,1),texto:``},
        {nome:'Índice variando em lista',caminho:formarCaminho(7,2),texto:``},
        {nome:'For com índice ',caminho:formarCaminho(7,3),texto:``},]
    },{
      nome:'Tratar de Erros',
      arquivos:[
        {nome:'Try+Except',caminho:formarCaminho(8,1),texto:``},
        {nome:'Lançamento de exceções ',caminho:formarCaminho(8,2),texto:``},]
    },{
      nome:'Arquivos',
      arquivos:[
        {nome:'Ler arquivos',caminho:formarCaminho(8,1),texto:``},
        {nome:'Escrever em arquivos ',caminho:formarCaminho(8,2),texto:``},
        {nome:'Manipulação de arquivos (adicionar, alterar)',caminho:formarCaminho(8,3),texto:``},]
    }
    
]