/*Um posto está vendendo combustíveis com a seguinte tabela de descontos:

Álcool: até 20 litros, desconto de 3% por litro

acima de 20 litros, desconto de 5% por litro

Gasolina:

até 20 litros, desconto de 4% por litro

acima de 20 litros, desconto de 6% por litro

Escreva um algoritmo que leia o número de litros vendidos, o tipo de
combustível (codificado da seguinte forma: A-álcool, G- gasolina), calcule e
imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da
gasolina é R$ 5,66 o preço do litro do álcool é R$ 3,89.*/

const teclado = require('prompt-sync')();

// Leitura do número de litros e tipo de combustível
const litrosVendidos = parseFloat(teclado("Digite o número de litros vendidos: "));
const tipoCombustivel = teclado("Digite o tipo de combustível (A para álcool, G para gasolina): ");

const precoGasolina = 5.66;
const precoAlcool = 3.89;

let valorAPagar;

if (tipoCombustivel === 'A' || tipoCombustivel === 'a') {
  if (litrosVendidos <= 20) {
    valorAPagar = litrosVendidos * (precoAlcool - precoAlcool * 0.03);
  } else {
    valorAPagar = litrosVendidos * (precoAlcool - precoAlcool * 0.05);
  }
} else if (tipoCombustivel === 'G' || tipoCombustivel === 'g') {
  if (litrosVendidos <= 20) {
    valorAPagar = litrosVendidos * (precoGasolina - precoGasolina * 0.04);
  } else {
    valorAPagar = litrosVendidos * (precoGasolina - precoGasolina * 0.06);
  }
} else {
  console.log("Tipo de combustível inválido.");
}

if (valorAPagar !== undefined) {
  // Exibição do valor a ser pago
  console.log(`O valor a ser pago é R$${valorAPagar}`);
}
