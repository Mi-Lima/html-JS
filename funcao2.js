function verificarIdade(idade) {
    if (typeof idade !== 'string') {
        const mensagem = `Idade: ${idade} anos`;
        console.log(mensagem);

        // if, else
        if (idade >= 60) {
            console.log('Você é idoso!');
        } else if (idade >= 12 && idade <= 18) {
            console.log('Aborrecente');
        } else if (idade < 12) {
            console.log('Você é criança!');
        } else {
            // 19 ao 59
            console.log('Adulto');
        }

    } else {
        console.log('Por favor informar a idade no formato de número!');
    }
}

// Chamada da função fora do bloco
verificarIdade(60);
