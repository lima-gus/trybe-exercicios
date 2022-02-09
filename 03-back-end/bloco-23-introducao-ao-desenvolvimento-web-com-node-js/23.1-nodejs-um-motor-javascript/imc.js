const PESO_PESSOA = 50;
const ALTURA_PESSOA = 163;

const imc = (peso, altura) => {
  peso = PESO_PESSOA;
  altura = ALTURA_PESSOA;

  const calcImc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  console.log(`Peso: ${peso}, Altura: ${altura}, IMC: ${calcImc}`);
}

imc();
