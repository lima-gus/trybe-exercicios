import * as Exercises from './exercises';

console.log(Exercises.greeter('Gustavo')); // Olá Gustavo!
console.log(Exercises.personAge('Gustavo', 23)); // Gustavo tem 23 anos!
console.log(Exercises.add(1337, 200));  // 1537
console.log(Exercises.sumArray([3, 6, 9])); // 18

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercises.triangle(10, 25)}cm²`); // 125cm²
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercises.triangle(5, 30)}cm²`); // 75cm²
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercises.triangle(100, 200)}cm²`); // 10000cm²

console.log(`Quadrado de lado 10cm: ${Exercises.square(10)}cm²`); // 100cm²
console.log(`Quadrado de lado 5cm: ${Exercises.square(5)}cm²`); // 25cm²
console.log(`Quadrado de lado 100cm: ${Exercises.square(100)}cm²`); // 10000cm²

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercises.rectangle(10, 25)}cm²`); // 250cm²
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercises.rectangle(5, 30)}cm²`); // 150cm²
console.log(`Retângulo de base 100cm e altura 20cm: ${Exercises.rectangle(100, 200)}cm²`); // 20000cm²
