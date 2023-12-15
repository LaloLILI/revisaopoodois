"use strict";
/*– Usando IF, faça um programa que:

- Leia o valor para a variável horaTrabalhada.
- Leia o valor para a variável valorHoraTrabalhada.
- Leia o valor para a variável percentualDesconto.

- Calcule o salário bruto, sabendo que hora trabalhada multiplicado pelo valor hora
trabalhada
-Calcule o total de desconto que é percentual de desconto dividido por 100 e depois
multiplicado por salário bruto.
-Calcule o salário líquido que é o salário bruto menos o total de desconto.
Apresente os valores de: Horas trabalhadas, Salário Bruto, Desconto, Salário líquido.*/
console.clear();
const teclado = require('prompt-sync')();
// Leitura dos valores
const horaTrabalhada = parseFloat(teclado("Digite o número de horas trabalhadas: "));
const valorHoraTrabalhada = parseFloat(teclado("Digite o valor da hora trabalhada: "));
const percentualDesconto = parseFloat(teclado("Digite o percentual de desconto: "));
// Cálculo do salário bruto
const salarioBruto = horaTrabalhada * valorHoraTrabalhada;
// Cálculo do total de desconto
const totalDesconto = (percentualDesconto / 100) * salarioBruto;
// Cálculo do salário líquido
const salarioLiquido = salarioBruto - totalDesconto;
// Exibição dos resultados
console.log("Resumo do Salário:");
console.log(`Horas trabalhadas: ${horaTrabalhada} horas`);
console.log(`Salário Bruto: R$${salarioBruto}`);
console.log(`Desconto: R$${totalDesconto}`);
console.log(`Salário Líquido: R$${salarioLiquido}`);
