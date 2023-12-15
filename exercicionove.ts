/*Utilizando FOR e Vetores, Faça um programa que recebe 5 nomes e armazene em um
vetor, em seguida exiba os nomes.*/

console.clear();
const teclado = require('prompt-sync')();

const nomes = new Array ();

// Leitura e armazenamento dos nomes no vetor
for (let i = 0; i < 5; i++) {
  const nome = teclado(`Digite o ${i + 1}º nome: `);
  nomes[i] = nome;
}

// Exibição dos nomes
console.log("Nomes inseridos:");
for (let i = 0; i < 5; i++) {
  console.log(nomes[i]);
}
