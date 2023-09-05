
var nota1 = parseFloat(prompt("Insira sua Nota 1: "));
var nota2 = parseFloat(prompt("Insira sua Nota 2: "));
var nota3 = parseFloat(prompt("Insira sua Nota 2: "));



var media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;

console.log("Querido aluno, sua nota 1 foi: " + nota1 + ", a sua nota 2 foi: "+ nota2 + "e a sua nota 3 foi: " + nota3 + ".");
console.log("Diante disso, sua média foi:" + media.toFixed(2));