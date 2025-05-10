const equipes = [
    { nome: "Flamengo", vitorias: 13, empates: 6, derrotas: 5 },
    { nome: "Palmeiras", vitorias: 15, empates: 4, derrotas: 5 },
    { nome: "Corinthians", vitorias: 10, empates: 8, derrotas: 6 },
    { nome: "São Paulo", vitorias: 11, empates: 8, derrotas: 5 },
    { nome: "Vasco", vitorias: 8, empates: 6, derrotas: 10 },
    { nome: "Botafogo", vitorias: 14, empates: 7, derrotas: 3 },
];

function calcularAproveitamento(vit,emp,der){
    const partidas=vit+emp+der
    const pontos=(vit*3)+emp
    const aprov=pontos/partidas
    return aprov.tofixed(0)
}

function aprovEquipes(){
    // Escreva aqui o loop
}
aprovEquipes()