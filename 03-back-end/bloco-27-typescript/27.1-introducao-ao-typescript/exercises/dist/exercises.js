"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
// recebe um nome e imprime na tela "Olá Nome"
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
;
// recebe um nome e idade e imprime "Nome tem X anos"
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
;
// recebe dois números como parâmetro e retorna a soma
function add(firstNum, secNum) {
    return firstNum + secNum;
}
exports.add = add;
;
// soma todos os números dentro de um array
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
;
// calcula a área do triângulo
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
;
// calcula a área do quadrado
function square(side) {
    return side ** 2;
}
exports.square = square;
;
// calcula a área do retângulo
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
;
