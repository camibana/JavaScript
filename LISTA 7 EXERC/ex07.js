// Desenvolva uma função que receba como parâmetro a lista acima fornecida e imprima os dados Nome, Média Aritmética e Curso APENAS dos alunos que tiveram média maior ou igual a 7.
var alunos = [ 
    { nome: "Maria Joaquinha", notas: [8,7.5,9], curso: "Sistemas para Internet"},
    { nome: "João Ricardo", notas: [8,8.5,5], curso: "Direito"},
    { nome: "José Henrique", notas: [4,10,7], curso: "Administração"},
    { nome: "Pedro da Silva", notas: [6,7.6,7.5], curso: "Sistemas para Internet"},
    { nome: "Silvana Morais", notas: [6,7.5,9.5], curso: "Sistemas de Informação"},
    { nome: "Patricia Castro", notas: [1,9,10], curso: "Arquitetura"},
    { nome: "Joana Ribeiro", notas: [8,9,9], curso: "Contabilidade"},
    { nome: "Rafael Rocha", notas: [4,4,9], curso: "Sistemas para Internet"},
    { nome: "Gustavo Henrique", notas: [5,5.5,5], curso: "Sistemas para Internet"} ];
   
    
    function imprimirMediaAlunosAprovados(alunos) {
        for (var i = 0; i < alunos.length; i++) {
            var aluno = alunos[i];
            var somaNotas = aluno.notas.reduce(function (a,b,c) { //reduce é um método usado para reduzir umarray em um único valor
                return a + b + c; // é uma função de callback que é chamada para cada elemento do array
            }, 0); // o 0 é o valor acumulador inicial 

          var media = somaNotas / aluno.notas.length;

          if (media >= 7) {
          console.log(`Parabéns você foi aprovado por média! Confira seus dados abaixo: `);
          console.log("Nome: " + aluno.nome);;
          console.log("Média Aritmética: " + media.toFixed(2));
          console.log("Curso: " + aluno.curso + `. Aproveite as férias!`);
          
          } else{
          console.log(`Para obter sua média, dirija-se a coordenação do curso.`);

        }
    
    }
  }

imprimirMediaAlunosAprovados(alunos);    
    
    
    
    
    
    
    
    
    
    
    
    
  /*  function imprimirAlunosAprovados(alunos) {
  for (var i = 0; i < alunos.length; i++) {
    var aluno = alunos[i];
    var somaNotas = aluno.notas.reduce(function (a, b) {
      return a + b;
    }, 0);
    var media = somaNotas / aluno.notas.length;

    if (media >= 7) {
      console.log("Nome: " + aluno.nome);
      console.log("Média Aritmética: " + media.toFixed(2));
      console.log("Curso: " + aluno.curso);
      console.log("\n");
    }
  }
}

imprimirAlunosAprovados(alunos);*/