/* Escreva uma função que informe o retorno de um investimento (montante) com base nos valores do capital inicial, tempo em meses e taxa de juros mensal, fornecidos pelo usuário.
Use a fórmula: M = C * (1+i)t Onde:
▪ C = Capital inicial investido
▪ i = Taxa de juros, em percentual
▪ t = Tempo do investimento, em meses 
Exiba o resultado com duas casas decimais.*/

var valorInvestido = parseFloat(prompt(`Digite o valor do capital inicial investido: `));
var taxaJuros = parseFloat(prompt(`Digite o valor da taxa de juros em %: `));
var tempoEmMeses = parseFloat(prompt(`Digite a quantidade de meses em que esse valor ficou investido:`));

function calcularMontante (valorInvestido, taxaJuros, tempoEmMeses){
    var taxa = taxaJuros /100; // convertendo a taxa de juros para facilitar o cálculo
    var montante = valorInvestido * (1 + taxa) * tempoEmMeses;

        return montante.toFixed(2); //o resultado tem que está com duas casas decimais.
}
    
var resultado = calcularMontante(valorInvestido, taxaJuros,tempoEmMeses);

console.log(`O montante final do valor R$ ${valorInvestido} após ${tempoEmMeses} meses investidos a uma taxa de juros ao mês de ${taxaJuros}%, é de: R$ ${resultado}`);