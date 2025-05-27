// 1 - crie uma função que calcule a soma de 3 números exiba no console o  resultado e a média

function somanumeros(n1,n2,n3){

    let resultado = n1 + n2 + n3;
    let media = resultado/3
    console.log(resultado,media)
    return resultado, media
}

somanumeros(26,98,39)

// Crie duas funções que calcule a soma e a média de 3 números exiba no console o resultado da soma e da média

function soma(n1,n2,n3) {
    const soma = n1 + n2 + n3;
    return soma;
}

function media(n1, n2, n3) {
const adicao = soma(n1, n2 ,n3)
const media = adicao / 3;

return "A soma é: " + adicao + "e a média é: " + media;
}