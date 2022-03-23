// recebe um nome e imprime na tela "Olá Nome"
export function greeter(name: string) {
  return `Olá ${name}!`
};

// recebe um nome e idade e imprime "Nome tem X anos"
export function personAge(name: string, age: number) {
  return `${name} tem ${age} anos!`
};

// recebe dois números como parâmetro e retorna a soma
export function add(firstNum: number, secNum: number): number {
  return firstNum + secNum;
};

// soma todos os números dentro de um array
export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
};

// calcula a área do triângulo
export function triangle(base: number, height: number): number {
  return (base * height) / 2;
};

// calcula a área do quadrado
export function square(side: number): number {
  return side ** 2;
};

// calcula a área do retângulo
export function rectangle(base: number, height: number): number {
  return base * height;
};
