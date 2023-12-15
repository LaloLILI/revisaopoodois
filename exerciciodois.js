"use strict";
/*Usando IF, para doar sangue é necessário ter entre 18 e 67 anos e possuir mais de 60Kg.
Faça um aplicativo que pergunte a idade de uma pessoa e seu peso e diga se ela pode doar
sangue ou não.*/
console.clear();
const teclado = require('prompt-sync')();
const idadeStr = teclado("Digite a sua idade: ");
const pesoStr = teclado("Digite o seu peso em kg: ");
const idade = parseInt(idadeStr);
const peso = parseFloat(pesoStr);
if (idade >= 18 && idade <= 67 && peso > 60) {
    console.log("Você pode doar sangue!");
}
else {
    console.log("Você não pode doar sangue.");
}
