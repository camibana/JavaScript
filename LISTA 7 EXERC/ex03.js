/*Faça um programa que, dado um conjunto de N números, determine o menor valor,
o maior valor e a soma dos valores.*/

function  encontreMenorValor(arr){
    if (arr.length === 0) {
        return undefined; //se o array estiver vazio.
    }else{
        var menor = arr[0];
        for (i = 0; i< arr.length; i++) {
            if (arr[i] < menor){
                menor = arr[i];
            
        }
        
        }
        return menor;
    }
    
}
//arr é uma convenção comumente usada pra array, o programa já identifica que é pra usar o array como parâmetro.

function encontreMaiorValor(arr){
    if (arr.length === 0) {
        return undefined;
    } else{
        var maior = arr[0];
        for (i=0;i< arr.length; i++){
            if (arr[i] > maior){
                maior = arr[i];

            }

        }
        
        return maior;
    }
 
}

function somaValores(arr){
    var soma = 0;
    for (i = 0; i < arr.length; i++) {
        soma += arr[i];
        
    }
    return soma;
}

var meuarray = [7,1,0,3,5,8];

//Chamando as funções:
var menor = encontreMenorValor(meuarray);
var maior = encontreMaiorValor(meuarray);
var soma = somaValores(meuarray);

//Imprimindo os resultados solicitados
console.log(` O menor número é: ${menor}.`)
console.log(`O maior número é: ${maior}.`)
console.log(`A soma de todos os números é: ${soma}.`)