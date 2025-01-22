function formarCaminho(topico,sub){
  return `/conteudo/javascript/t${topico}/j${sub}.txt`
}
export const javascript=[
{
  nome:'Variáveis Simples',
  existe:true,
  arquivos:[
    {nome:'Criar e Alterar valor',caminho:formarCaminho(1,1),texto:`
As variáveis armazenam um valor. Com elas, podemos usar o valor varias vezes digitando apenas seu nome.
-Criamos usando let se vamos mudar o valor depois
-Criamos usando const para o valor ser constante
Diferenciamos as duas para manter o código mais legível e evitar mudanças indesejadas.
      `},
    {nome:'Tipos',caminho:formarCaminho(1,2),texto:`
Existem 3 tipos de variáveis Simples:
-Número ( Number )
-Texto ( String )
-Verdadeiro/Falso ( Boolean )
São Simples pois possuem um valor único. As 2 Complexas são Lista e Objeto que guardam um conjunto de valores, veremos mais para frente.
      `},
    {nome:'Number',caminho:formarCaminho(1,3),texto:`
Operações básicas são feitas com números inteiros (Int) ou quebrados (Float).
Métodos da biblioteca Math ajudam em cálculos mais complexos, como arredondamento    `},
    {nome:'String',caminho:formarCaminho(1,4),texto:`
Strings permitem manipulação de texto.
Podemos acessar partes específicas ou transformar seu conteúdo.      `},
    {nome:'Boolean',caminho:formarCaminho(1,5),texto:`
Booleanos representam verdadeiro ou falso. 
São úteis para Condicionais.
Usamos operadores para combinar valores lógicos. São eles:
-AND ( escrevemos com && )
-OR ( escrevemos com || )
-NOT ( escrevemos com ! )
      `},]
},{
  nome: 'Funções',
  existe: true,
  arquivos: [
    {nome: 'Criar e Chamar', caminho: formarCaminho(2, 1), texto: `
Funções agrupam instruções em um único lugar. 
Criamos funções para evitar repetição e organizar o código.
-Chamamos uma função digitando seu nome com parênteses.
-As funções podem receber dados e devolver um resultado.
      `},
    {nome: 'Parâmetros', caminho: formarCaminho(2, 2), texto: `
Parâmetros são dados que passamos para uma função. 
-Usamos parâmetros entre parênteses ao criar ou chamar a função.
-Isso torna as funções mais flexíveis e reutilizáveis.
      `},
    {nome: 'Parâmetro fixo', caminho: formarCaminho(2, 3), texto: `
Podemos definir valores padrão para parâmetros.
-Se não passarmos um valor, o padrão será usado.
-Isso evita erros e melhora a previsibilidade do código.
      `},
    {nome: 'Return', caminho: formarCaminho(2, 4), texto: `
A palavra-chave *return* devolve um valor de dentro da função.
-Quando usamos *return*, o código para de executar no ponto em que ele aparece.
-Podemos salvar o valor retornado em uma variável ou usá-lo diretamente.
      `},
    {nome: 'Arrow Function', caminho: formarCaminho(2, 5), texto: `
Arrow functions são uma forma mais curta de escrever funções.
-Usamos a sintaxe: () => { }
-Evite usar *this* dentro delas, pois o comportamento é diferente de funções normais.
-Ideais para funções simples ou como argumentos em métodos.
      `}
  ]
}
,{
  nome: 'Condicional',
  existe: true,
  arquivos: [
    {nome: 'If, Else If, Else', caminho: formarCaminho(3, 1), texto: `
Condicionais permitem executar partes diferentes do código dependendo de uma condição.
-*if*: verifica se uma condição é verdadeira e executa o bloco de código.
-*else if*: adiciona verificações extras após o *if*.
-*else*: executa um bloco quando nenhuma das condições anteriores é verdadeira.
      `},
    {nome: 'Truly, Falsy, ===', caminho: formarCaminho(3, 2), texto: `
Truly e falsy são valores que o JavaScript considera como verdadeiro ou falso.
-*Truly*: qualquer valor diferente de 0, '', null, undefined ou NaN.
-*Falsy*: valores como 0, '', null, undefined ou NaN.
-*===*: verifica igualdade considerando o tipo do valor, evitando surpresas.
      `},
    {nome: 'Ternário', caminho: formarCaminho(3, 3), texto: `
O operador ternário é uma forma compacta de escrever uma condicional.
-Usamos a sintaxe: condição ? valorSeVerdadeiro : valorSeFalso.
-É ideal para situações simples onde uma única verificação é necessária.
      `}
  ]
}
,{
  nome: 'Listas',
  existe: true,
  arquivos: [
    {nome: 'Acessar Índices + Len', caminho: formarCaminho(4, 1), texto: `
Listas armazenam múltiplos valores em uma única variável.
-Acessamos um valor específico usando seu índice, que começa em 0.
-Para saber o tamanho da lista, usamos uma propriedade ou função como *length* ou *len*.
      `},
    {nome: 'Adicionar, Remover', caminho: formarCaminho(4, 2), texto: `
Podemos adicionar ou remover itens de uma lista.
-Adicionamos usando métodos como *push*, *unshift* ou equivalentes.
-Removemos com métodos como *pop*, *shift* ou pelo índice usando *splice*.
-Isso nos permite manipular o conteúdo conforme necessário.
      `},
    {nome: 'Destruturação', caminho: formarCaminho(4, 3), texto: `
A destruturação permite extrair valores específicos de uma lista.
-Usamos uma sintaxe curta com colchetes: [a, b] = lista.
-Podemos ignorar valores que não precisamos, deixando espaços vazios.
-É útil para trabalhar com variáveis diretamente a partir de listas.
      `},
    {nome: 'Slice, Split, Includes', caminho: formarCaminho(4, 4), texto: `
Métodos poderosos para trabalhar com listas:
-*slice*: copia partes de uma lista sem alterar a original.
-*split*: transforma uma string em uma lista, com base em um separador.
-*includes*: verifica se um valor está na lista, retornando verdadeiro ou falso.
      `}
  ]
}
,{
  nome: 'Loops',
  existe: true,
  arquivos: [
    {nome: 'While e For', caminho: formarCaminho(5, 1), texto: `
Loops permitem repetir ações várias vezes de forma eficiente.
-*while*: repete enquanto uma condição for verdadeira.
-*for*: usado quando sabemos o número de repetições ou para iterar sobre listas.
-A escolha entre os dois depende do cenário e da clareza do código.
      `},
    {nome: 'Auxiliadores', caminho: formarCaminho(5, 2), texto: `
Comandos que ajudam a controlar loops:
-*break*: para o loop imediatamente.
-*continue*: pula para a próxima iteração, ignorando o restante do bloco.
-Isso nos dá mais controle sobre como o loop se comporta.
      `},
    {nome: 'forEach', caminho: formarCaminho(5, 3), texto: `
O método *forEach* executa uma função para cada item de uma lista.
-É uma alternativa ao *for* para trabalhar diretamente com os valores.
-Não retorna nada; ideal para executar ações repetitivas sem criar uma nova lista.
      `},
    {nome: 'Mapear "na mão" vs .map', caminho: formarCaminho(5, 4), texto: `
Mapear significa criar uma nova lista baseada em outra.
-*Na mão*: usamos *for* ou *forEach* para iterar e adicionar itens a uma nova lista.
-*map*: cria automaticamente a nova lista a partir de uma função aplicada a cada item.
      `},
    {nome: 'Filtrar "na mão" vs .filter', caminho: formarCaminho(5, 5), texto: `
Filtrar significa criar uma nova lista com itens que atendem a uma condição.
-*Na mão*: usamos *for* ou *forEach* para verificar condições e adicionar itens a uma nova lista.
-*filter*: faz isso de forma mais simples, retornando apenas os itens que passam na condição.
      `},
    {nome: 'Ordenar "na mão" vs .sort', caminho: formarCaminho(5, 6), texto: `
Ordenar ajusta a posição dos itens em uma lista.
-*Na mão*: implementamos comparações e trocas manualmente, geralmente com *for* aninhados.
-*sort*: organiza automaticamente com base em uma função de comparação.
      `}
  ]
}
,{
  nome: 'Objeto',
  existe: true,
  arquivos: [
    {nome: 'Acessar Prop (.prop ou ["prop"])', caminho: formarCaminho(6, 1), texto: `
Objetos armazenam pares de chave e valor.
-Podemos acessar valores usando *obj.prop* ou *obj['prop']*.
-A notação de colchetes é útil quando a chave é dinâmica ou contém caracteres especiais.
      `},
    {nome: 'Criar ou Alterar Prop', caminho: formarCaminho(6, 2), texto: `
Podemos adicionar ou modificar propriedades em um objeto:
-*obj.novaProp = valor*: adiciona uma nova propriedade.
-*obj.existeProp = novoValor*: altera uma propriedade existente.
-Isso permite moldar o objeto conforme necessário.
      `},
    {nome: 'Destruturação', caminho: formarCaminho(6, 3), texto: `
A destruturação facilita o acesso a propriedades específicas.
-Usamos a sintaxe: const {prop1, prop2} = obj.
-Podemos combinar isso com valores padrão para maior flexibilidade.
      `},
    {nome: 'Object.keys e Outras Propriedades do Objeto', caminho: formarCaminho(6, 4), texto: `
Objetos possuem métodos úteis:
-*Object.keys(obj)*: retorna uma lista com as chaves.
-*Object.values(obj)*: retorna uma lista com os valores.
-*Object.entries(obj)*: retorna pares chave-valor como listas.
-Isso facilita trabalhar com os dados de um objeto.
      `},
    {nome: 'obj?.prop para Impedir Erros', caminho: formarCaminho(6, 5), texto: `
O operador *?.* evita erros ao acessar propriedades inexistentes.
-*obj?.prop*: retorna *undefined* em vez de lançar um erro se *prop* não existir.
-Isso é útil para acessar objetos que podem ser nulos ou incompletos.
      `}
  ]
}
,{
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
