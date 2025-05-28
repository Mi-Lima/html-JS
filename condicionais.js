const idade = 16
const mensagem = `Idade: ${idade} anos`

console.log(mensagem);

//if , else
if (idade >= 60) {
    console.log(`Você é idoso!`);
//console.log(`Se a condição for atendida`)
} else if(idade >= 12 && idade <= 18) {
console.log(`Aborrecente`);
} else if (idade < 12) {
    console.log(`Você é criança!`);
} else {
    console.log(`Adulto`);
}