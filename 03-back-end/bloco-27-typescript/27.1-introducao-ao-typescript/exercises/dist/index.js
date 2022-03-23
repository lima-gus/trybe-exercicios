"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exercises = __importStar(require("./exercises"));
console.log(Exercises.greeter('Gustavo')); // Olá Gustavo!
console.log(Exercises.personAge('Gustavo', 23)); // Gustavo tem 23 anos!
console.log(Exercises.add(1337, 200)); // 1537
console.log(Exercises.sumArray([3, 6, 9])); // 18
console.log(`Triângulo de base 10cm e altura 25cm: ${Exercises.triangle(10, 25)}cm²`); // 125cm²
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercises.triangle(5, 30)}cm²`); // 75cm²
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercises.triangle(100, 200)}cm²`); // 10000cm²
console.log(`Quadrado de lado 10cm: ${Exercises.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercises.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercises.square(100)}cm²`);
console.log(`Retângulo de base 10cm e altura 25cm: ${Exercises.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercises.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 20cm: ${Exercises.rectangle(100, 200)}cm²`);
