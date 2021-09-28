//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
//Exemplo: bishop (bispo) -> diagonals (diagonais)

let peca = 'ToRrE';

switch (peca.toLowerCase()) {
  case 'peão':
    console.log('Peão: Se movimenta na vertical.');
    break;

  case 'cavalo':
    console.log('Cavalo: Se movimenta em L.');
    break;

  case 'bispo':
    console.log('Bispo: Se movimenta nas diagonais.');
    break;

  case 'torre':
    console.log('Torre: Se movimenta nas direções ortogonais.');
    break;

  case 'dama':
    console.log('Dama: Se movimenta na diagonal, vertical ou horizontal.');
    break;
    
  case 'rei':
    console.log('Rei: Se movimenta em todas as direções.');
    break;

  default:
    console.log('Erro: Essa peça não existe.');
    break;
}
