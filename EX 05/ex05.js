
quantidade_de_num = prompt("Digite quantos números deseja adicionar:")

soma = 0
    for (var i = 0; i < quantidade_de_num; i++) {
        numero = parseInt(prompt("Digite um número:"))
        soma += numero
    }

console.log("A soma dos números foi", soma)