import { exs22 } from "./exercicios/t2";
import { texto11, texto12 } from "./textos/t1";
import { texto21, texto22 } from "./textos/t2";

export const materia=[
    {
        nome:"Variável e condicional",
        tempo:45,
        subtopicos:[
            ["Variáveis simples" ,false,texto11],
            ["Condicionais (if,elif,else)" ,false,texto12],
            ["Condicional dentro de outra" ,true],
            ["Variável lista" ,true]
        ]
    },{
        nome:"Função",
        tempo:45,
        subtopicos:[
            ["Criar e chamar" ,false,texto21],
            ["Parâmetros" ,false,texto22,exs22],
            ["Uma chamando outra" ,true],
            ["Parâmetro fixo" ,true]
        ]
    },{
        nome:"Loops",
        tempo:60,
        subtopicos:[
            ["While",false],
            ["For" ,false],
            ["Auxiliadores" ,false],
        ]
    },{
        nome:"Aprofundar loops em lista",
        tempo:90,
        subtopicos:[
            ["Adicionar na lista" ,false],
            ["Separar string" ,false],
            ["Ìndice variando em lista" ,false],
            ["For com índice" ,true]
        ]
    },{
        nome:"Variável dicionário",
        tempo:45,
        subtopicos:[
            ["Estrutura" ,false],
            ["Em contagem" ,false],
            ["Em listas" ,false],
            ["Contagem sem saber as chaves" ,true]
        ]
    },]