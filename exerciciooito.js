"use strict";
/*Utilizando FOR e Vetores, Faça um vetor numérico de 5 posições , alimente ele com
entrada manual e faça ordenação crescente desses números.*/
console.clear();
const teclado = require('prompt-sync')();
const vetor = new Array();
const tamanhoVetor = 5;
// Leitura e armazenamento dos números no vetor
for (let i = 0; i < tamanhoVetor; i++) {
    const numero = parseFloat(teclado(`Digite o ${i + 1}º número: `));
    vetor[i] = numero;
}
// Ordenação crescente dos números no vetor
for (let i = 0; i < tamanhoVetor; i++) {
    for (let j = i + 1; j < tamanhoVetor; j++) {
        if (vetor[i] > vetor[j]) {
            // Troca os números de posição
            const temp = vetor[i];
            vetor[i] = vetor[j];
            vetor[j] = temp;
        }
    }
}
// Exibição dos números ordenados
console.log("Números ordenados em ordem crescente:");
for (let i = 0; i < tamanhoVetor; i++) {
    console.log(vetor[i]);
}
