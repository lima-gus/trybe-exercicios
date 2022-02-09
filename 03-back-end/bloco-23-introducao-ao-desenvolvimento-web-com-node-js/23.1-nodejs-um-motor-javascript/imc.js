var readlineSync = require('readline-sync');

const PESO_PESSOA = readlineSync.questionFloat('Qual o seu peso?\n');
const ALTURA_PESSOA = readlineSync.questionFloat('Qual a sua altura?\n');

const imc = (peso, altura) => {
  peso = PESO_PESSOA;
  altura = ALTURA_PESSOA;

  const calcImc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  console.log(`Peso: ${peso}, Altura: ${altura}, IMC: ${calcImc}`);
}

imc();
