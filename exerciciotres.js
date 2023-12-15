"use strict";
/*Usando IF, digite três números e escreva eles em ordem crescente e decrescente*/
const teclado = require('prompt-sync')();
// Leitura dos três números
const num1 = parseFloat(teclado("Digite o primeiro número: "));
const num2 = parseFloat(teclado("Digite o segundo número: "));
const num3 = parseFloat(teclado("Digite o terceiro número: "));
let ordemCrescente, ordemDecrescente;
// Verificação e ordenação em ordem crescente
if (num1 <= num2 && num1 <= num3) {
    ordemCrescente = num1 + ", " + (num2 <= num3 ? num2 + ", " + num3 : num3 + ", " + num2);
}
else if (num2 <= num1 && num2 <= num3) {
    ordemCrescente = num2 + ", " + (num1 <= num3 ? num1 + ", " + num3 : num3 + ", " + num1);
}
else {
    ordemCrescente = num3 + ", " + (num1 <= num2 ? num1 + ", " + num2 : num2 + ", " + num1);
}
// Verificação e ordenação em ordem decrescente
if (num1 >= num2 && num1 >= num3) {
    ordemDecrescente = num1 + ", " + (num2 >= num3 ? num2 + ", " + num3 : num3 + ", " + num2);
}
else if (num2 >= num1 && num2 >= num3) {
    ordemDecrescente = num2 + ", " + (num1 >= num3 ? num1 + ", " + num3 : num3 + ", " + num1);
}
else {
    ordemDecrescente = num3 + ", " + (num1 >= num2 ? num1 + ", " + num2 : num2 + ", " + num1);
}
// Exibição dos resultados
console.log(`Números em ordem crescente: ${ordemCrescente}`);
console.log(`Números em ordem decrescente: ${ordemDecrescente}`);
