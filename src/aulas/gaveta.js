import js from '../_imgs/js.png'
import re from '../_imgs/react.png'
import nd from '../_imgs/node.png'
import py from '../_imgs/python.png'
import sq from '../_imgs/sql.jpg'

import { victoria } from './alunos/victoria'
import { eduardo } from './alunos/eduardo'
import { convidadoJS } from './alunos/convidadoJS'
import { convidadoPY } from './alunos/convidadoPY'
import { antonio } from './alunos/antonio'
import { clarissa } from './alunos/clarissa'


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
    convidadoJS,
    convidadoPY,
    clarissa,
    antonio,
    victoria,
    eduardo
]

