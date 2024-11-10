import { arquivos1Clarissa } from "./clarissa1";
import { antonio1 } from "./antonio1";
import { arquivos2Clarissa } from "./clarissa2";
import { victoria1 } from "./victoria1";
import { victoria2 } from "./victoria2";

export const gaveta=[
    [//Clarissa/*
       /* {
            titulo:'Aula 1',
            status:'Feito',
            data:'Quinta 24/10',
            arquivos:arquivos1Clarissa
        },{
            titulo:'Aula 2',
            status:'Feito',
            data:'Quinta 31/10',
            arquivos:arquivos2Clarissa
        },*/
    ],[//Antonio
        {
            titulo:'Aula 1',
            status:'Feito',
            data:'Terça 5/11',
            arquivos:antonio1
        },
    ],[//Victoria
        {
            titulo:'Aula 1',
            status:'Feito',
            data:'Quinta 7/11',
            arquivos:victoria1
        },{
            titulo:'Aula 2 - Próxima',
            status:'Solta',
            data:'Sem data',
            arquivos:victoria2
        },
    ]
]
export const listaAlunos=[
    'clarissa', // python
    'antonio',  // javascript + react + node
    'victoria'  // javascript + react
]