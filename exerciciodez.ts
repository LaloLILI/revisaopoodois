/*Utilizando FOR e Vetores, Faça um programa que recebe 6 letras e armazene em um
vetor, em seguida mostre quais dessas letras são vogais e quais são consoantes.*/

console.clear();
const teclado = require('prompt-sync')();

const letras = new Array();

// Leitura e armazenamento das letras no vetor
for (let i = 0; i < 6; i++) {
  const letra = teclado(`Digite a ${i + 1}ª letra: `);
  letras[i] = letra;
}

let vogaisEncontradas = '';
let consoantesEncontradas = '';

// Verificação de vogais e consoantes
for (let i = 0; i < 6; i++) {
  const letraAtual = letras[i];
  if (letraAtual === 'a' || letraAtual === 'A' || 
      letraAtual === 'e' || letraAtual === 'E' ||
      letraAtual === 'i' || letraAtual === 'I' ||
      letraAtual === 'o' || letraAtual === 'O' ||
      letraAtual === 'u' || letraAtual === 'U') {
    vogaisEncontradas += letraAtual + ' ';
  } else {
    consoantesEncontradas += letraAtual + ' ';
  }
}

// Exibição das vogais e consoantes
console.log("Vogais encontradas:");
console.log(vogaisEncontradas);

console.log("Consoantes encontradas:");
console.log(consoantesEncontradas);
