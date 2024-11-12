import { arquivos1Clarissa } from "./clarissa/clarissa1";
import { antonio1 } from "./antonio/antonio1";
import { arquivos2Clarissa } from "./clarissa/clarissa2";
import { victoria1 } from "./victoria/victoria1";
import { victoria2 } from "./victoria/victoria2";
import js from '../imgs/js.png'
import re from '../imgs/react.png'
import nd from '../imgs/node.png'
import py from '../imgs/python.png'
import hc from '../imgs/html3.jpg'
import sq from '../imgs/sql.jpg'
export const genericos=[
    {   
        titulo:'Javascript',icone:js,
        img:js,texto:''
    },{
        titulo:'Python',icone:py,
        img:py,texto:'/textos/antonio/a1/t2.txt'
    },{
        titulo:'React',icone:re,
        img:re,texto:'/textos/antonio/a1/t3.txt'
    },{
        titulo:'Node',icone:nd,
        img:nd,texto:'/textos/antonio/a1/t4.txt'
    },{
        titulo:'Sql',icone:sq,
        img:sq,texto:'',
    },
    ]

export const disponiveis=[
    '108','110','113','115','117','119',
    '208','210',   '214',   '217','219',
    '308','310','313','315','317','319',
    '408','410','413','415','417','419',
    '508','510','513','515','517','519',
] 
export const eventos=[
        '214','217','313','319','410'
    ]
export const listaAlunos=[
    'convidado',
    'clarissa', // python
    'antonio',  // javascript + react + node
    'victoria', // javascript + react
    'eduardo'   // python + banco
]
export const gaveta=[
    [//Convidado
        {
            titulo:'Aula 1 (Demonstração)',
            status:'Feito',
            data:'(Data)',
            arquivos:genericos
        },
    ],
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
    ],[//Eduardo
        {
            titulo:'Aula 1',
            status:'Feito',
            data:'Terça 12/11',
            arquivos:[]
        },
    ]
]

