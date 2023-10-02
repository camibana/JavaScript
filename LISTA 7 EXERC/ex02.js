//Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números ímpares.


var numpares = 0;
var numimpares =  0;

for (var i=0; i<10; i++) {

    var num1 = parseInt(prompt(`Digite um número inteiro:`));

    console.log(num1);

    if (isNaN(num1)){ //se o valor digitado for nulo, um input diferente de int.
        console.log('Isso não é um número válido, tente novamente.')
        i--; //como esse prompt foi inválido, daí usei o -- reduzindo do contador que solicita só até 10 números inteiros.
    } else if (num1 % 2 ===0) {
        numpares ++;

    } else{
        numimpares++;
        
    }
}

console.log(`A quantidade de números pares é: ${numpares} e a quantidade de números ímpares é:${numimpares}.`)
