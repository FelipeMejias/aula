import js from '../_imgs/js.png'
import re from '../_imgs/react.png'
import nd from '../_imgs/node.png'
import py from '../_imgs/python.png'
import hc from '../_imgs/html3.jpg'
import sq from '../_imgs/sql.jpg'

import { clarissa1 } from "./clarissa/clarissa1";
import { clarissa2 } from "./clarissa/clarissa2";

import { victoria1 } from "./victoria/victoria1";
import { victoria2 } from "./victoria/victoria2";

import { antonio1 } from "./antonio/antonio1";

import { eduardo1 } from "./eduardo/eduardo1";
import { eduardo2 } from './eduardo/eduardo2'
import { eduardo3 } from './eduardo/eduardo3'


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
    '108','110','114','116','118','120',
    '208','210','214','216','218','220',
    '308','310','314','316','318','320',
    '408','410','414','416','418','420',
    '508','510','514','516',
] 
export const eventos=[
        '218','318','320','416','510'
    ]
export const disponiveis2=[
    '108','110','114','116','118','120',
    '208','210','214','216','218','220',
    '308','310','314','316','318','320',
    '408','410','414','416','418','420',
    '508','510','514','516',
] 
export const eventos2=[
    '218',
]
export const listaAlunos=[
    'convidado-js',
    'convidado-py',
    'clarissa', // python
    'antonio',  // javascript + react + node
    'victoria', // javascript + react
    'eduardo'   // python + banco
]
export const listaLinguagens=[
    'javascript',
    'python',
    'python',
    'javascript',
    'javascript',
    'python',
]
export const gaveta=[
    [//Convidado = Javascript
        {
            titulo:'Aula 1 (Demonstração)',
            status:'Feito',
            data:'(Data)',
            arquivos:victoria1
        },
    ],[//Convidado = Python
        {
            titulo:'Aula 1 (Demonstração)',
            status:'Feito',
            data:'(Data)',
            arquivos:eduardo1
        },
    ],[//Clarissa
        {
            titulo:'Aula 1',
            status:'Feito',
            data:'Quinta 24/10',
            arquivos:clarissa1
        },{
            titulo:'Aula 2',
            status:'Feito',
            data:'Quinta 31/10',
            arquivos:clarissa2
        },,{
            titulo:'Aula 2',
            status:'Feito',
            data:'Quinta 31/10',
            arquivos:clarissa2
        },,{
            titulo:'Aula 2',
            status:'Feito',
            data:'Quinta 31/10',
            arquivos:clarissa2
        },
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
            arquivos:eduardo1
        },{
            titulo:'Aula 2',
            status:'Feito',
            data:'Terça 19/11',
            arquivos:eduardo2
        },{
            titulo:'Aula 3',
            status:'Feito',
            data:'Terça 26/11',
            arquivos:eduardo3
        },
    ]
]

