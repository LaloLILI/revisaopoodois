"use strict";
/*Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois
peça outro número e armazene na variável y.

Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter
o valor de x.*/
console.clear();
const teclado = require('prompt-sync')();
// Leitura dos números
let x = parseFloat(teclado("Digite o primeiro número (x): "));
let y = parseFloat(teclado("Digite o segundo número (y): "));
// Exibição dos números originais
console.log(`Números originais: x = ${x}, y = ${y}`);
// Troca de valores
const temp = x;
x = y;
y = temp;
// Exibição dos números após a troca
console.log(`Números após a troca: x = ${x}, y = ${y}`);
