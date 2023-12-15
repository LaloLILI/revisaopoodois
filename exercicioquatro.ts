/*Usando IF ... as maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia,
e R$ 0,25 se forem compradas pelo menos doze. Escreva um programa que leia o número de
maçãs compradas, calcule e escreva o valor total da compra.*/

const teclado = require('prompt-sync')();

// Leitura do número de maçãs compradas
const quantidadeMacas = parseInt(teclado("Digite o número de maçãs compradas: "));

const precoMenosDoze = 0.30;
const precoDozeOuMais = 0.25;

let valorTotal;

if (quantidadeMacas < 12) {
  valorTotal = quantidadeMacas * precoMenosDoze;
} else {
  valorTotal = quantidadeMacas * precoDozeOuMais;
}

// Exibição do valor total da compra
console.log(`O valor total da compra é R$${valorTotal}`);

