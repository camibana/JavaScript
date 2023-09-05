// Atividade 2 - P2 Tarde
var maior_altura = 0;
var menor_altura = 5.00; // um número elevado dmeais para altura ou posso usar float(inf), um número grandemente infinito.
var media_alt_homens = 0;
var num_homens = 0;
var num_mulheres = 0;

for (var i=0; i<4; i++) {
    var altura = parseFloat(prompt(`Digite a altura da pessoa ${i + 1} em metros:`));

    while (true) {
        var sexo = prompt(`Digite o sexo da pessoa ${i+1} sendo M para Masculino e F para Feminino:`).trim().toUpperCase();
        if (sexo === "M" || sexo ==="F"){
            break
        } else{
            alert("Sexo inválido. Recomece conforme instruções iniciais.");

        }
           
    }
  
// Maior e menor altura 

    if (altura > maior_altura) {
        maior_altura = altura;
    }
    if (altura < menor_altura) {
        menor_altura = altura;
    }
      
// Média de altura dos homens
    if (sexo === "M") {
        media_alt_homens += altura;
        num_homens ++;
    }

// o número de mulheres 
    if (sexo === "F") {
        num_mulheres ++;

    }

}       
    
var media_alt_h = num_homens > 0 ? media_alt_homens / num_homens : 0 ;

console.log(`A maior altura é ${maior_altura} m e a menor altura é ${menor_altura} m.`);
console.log(`A média de altura dos homens é ${media_alt_h.toFixed(2)}. m`);
console.log(`O número de mulher(es) é ${num_mulheres}.`);