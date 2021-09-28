//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

let anguloA = 30;
let anguloB = 120;
let anguloC = 30;

if (anguloA + anguloB + anguloC == 180) {
  console.log(true);
} else if (anguloA + anguloB + anguloC != 180) {
  console.log(false);
} else {
  console.log('erro');
}
