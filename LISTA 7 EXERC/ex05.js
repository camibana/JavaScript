//Escreva uma função que encontre a área e o perímetro de um círculo, de acordo com o raio fornecido.


// Pedindo o raio ao usuário
var raio = parseFloat(prompt(`Por favor digite o valor do raio:`));

//Criando as funções 
function calcularArea(raio){
    var area = Math.PI * (raio**2);
    return area;

}
function calcularPerimetro(raio){
    var perimetro = 2 * Math.PI * raio
    return perimetro;
}

// chamando as funções criadas

var area1 = calcularArea(raio);
var perimetro1 = calcularPerimetro(raio);

// imprimindo o resultado no console
console.log(`A aéra é: ${area1.toFixed(2)} metros.`)
console.log(`O perímetro solicitado é: ${perimetro1.toFixed(2)} metros.`)