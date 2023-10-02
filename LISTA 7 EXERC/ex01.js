/* Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000
habitantes com uma taxa anual de crescimento de 1.5%. Faça um programa que
calcule e escreva o número de anos necessários para que a população do país A
ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.*/

var popA = 80000;
var crescipopA = 0.03; // = 3% ao ano
var popB = 200000;
var crescipopB = 0.015; // =1,5% ao ano
var anos = 0;

while (popA < popB) {
    popA += popA * crescipopA;
    popB += popB * crescipopB;
    anos++;
}

console.log(`O número de anos necessários são: ${anos}`);
