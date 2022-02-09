var readlineSync = require('readline-sync');

const PESO_PESSOA = readlineSync.questionFloat('Qual o seu peso?\n');
const ALTURA_PESSOA = readlineSync.questionFloat('Qual a sua altura?\n');

const imc = (peso, altura) => {
  peso = PESO_PESSOA;
  altura = ALTURA_PESSOA;

  const calcImc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  console.log(`Peso: ${peso}, Altura: ${altura}, IMC: ${calcImc}`);

  if (calcImc < 18.5) {
    return console.log('Abaixo do peso (magreza)');
  } 
  
  if (calcImc > 18.5 && calcImc < 24.9) {
   return  console.log('Peso normal');
  }

  if (calcImc > 25.0 && calcImc < 29.9) {
    return console.log('Acima do peso (sobrepeso)');
  }

  if (calcImc > 30.0 && calcImc < 34.9) {
    return console.log('Obesidade grau I');
  }

  if (calcImc > 35.0 && calcImc < 39.9) {
    return console.log('Obesidade grau II');
  }

  if (calcImc > 40.0) {
    return console.log('Obesidade graus III e IV');
  }
}

imc();
