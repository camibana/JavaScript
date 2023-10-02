/*Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:
a. Esse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00;
b. Em 1996 recebeu aumento de 1,5% sobre seu salário inicial;
c. A partir de 1997 (inclusive), os aumentos salariais sempre correspondem ao dobro do percentual do ano anterior. 
Faça um programa que determine o salário atual desse funcionário. Após concluir isto, altere o programa
permitindo que o usuário digite o salário inicial do funcionário.*/

var salInicial = parseFloat(prompt(`Insira o valor do salário em 1995: R$ `));
var anoInicial = 1995;
var anofinal = 2023;

while (anoInicial < anofinal) {
    var aumentoPercentual = (anoInicial === 1995) ? 1.5 : 2 * aumentoPercentual; // calculando o percentual de aumento, usando o ? e o : para que se a condição anterior ao ? for verdadeira, então faça o após : .

    var aumento = (salInicial * (aumentoPercentual /100)); // calculando o aumento em reais sobre o salário inicial.

    salInicial += aumento;
    anoInicial ++;
    
}


console.log(`O Salário em 2023 é de R$ ${salInicial.toFixed(2)}`)



