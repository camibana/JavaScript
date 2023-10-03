
var notas = [];

for (var i = 0; i < 3; i++) {
    var inserirnotas = parseFloat(prompt("Insira a nota do aluno(a): "));
    notas.push(inserirnotas);

}
var soma = 0;
for (var j = 0; j < notas.length; j++) {
    soma += notas[j];
}

var media = soma / 3;

console.log(`A média do aluno(a) é:`, media)

if (media <= 4) {
    console.log(`Sua média é ${media}. E não há nada que possa ser feito, você está reprovado!`);
} else if (media > 4 && media < 7) {
    console.log(`Sua média é ${media}. E você está na recuperação, estude que passa!`);
    
    var mediarecup = media
    var notarecup = parseFloat(prompt("Insira a nota da recuperação do aluno(a): "));
    var novamedia = mediarecup + notarecup /2;
    if (novamedia >= 5){
        console.log(`Sua nova média é ${novamedia}. Você conseguiu! Estudou e está aprovado, boas férias, você mereceu!`)
    } else{
        console.log(`Sua novs média é ${novamedia}. E não há mais nada que possa ser feito, você está reprovado!`);
    }        
}else{
    console.log(`Sua média é ${media}. Você está aprovado, boas férias, você mereceu!`)

}

