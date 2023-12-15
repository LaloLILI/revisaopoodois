"use strict";
/*Utilizando FOR e Vetores, DÊ entrada manual de 6 números, armazene em um vetor e
exiba ele da última posição do vetor a primeira.*/
console.clear();
const teclado = require('prompt-sync')();
const vetor = new Array();
// Leitura e armazenamento dos números no vetor
for (let i = 5; i >= 0; i--) {
    const numero = parseFloat(teclado(`Digite o ${6 - i}º número: `));
    vetor[i] = numero;
}
// Exibição dos números na ordem inversa
console.log("Números na ordem inversa:");
for (let i = 0; i < 6; i++) {
    console.log(vetor[i]);
}
