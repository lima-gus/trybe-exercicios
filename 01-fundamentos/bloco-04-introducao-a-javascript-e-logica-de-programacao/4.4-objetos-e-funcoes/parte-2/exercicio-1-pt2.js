// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindromo(texto) {
  let checaPalindromo = true;
  let inverteTexto = texto.split('').reverse().join('');

if (texto === inverteTexto) {
  checaPalindromo = true;
} else {
  checaPalindromo = false;
}
  return checaPalindromo;
}

console.log(verificaPalindromo('arara'));
console.log(verificaPalindromo('desenvolvimento'));
