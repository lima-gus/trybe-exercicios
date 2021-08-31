const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Exercício 1
const addShift = (object, key, value) => object[key] = value;

addShift(lesson2, 'turno', 'manhã');
console.log(lesson2);

//Exercício 2
const listKeys = (object) => Object.keys(object);
console.log(listKeys(lesson2));

//Exercício 3
const objLength = (object) => Object.keys(object).length;
console.log(objLength(lesson2));

//Exercício 4
const listValue = (object) => Object.values(object);
console.log(listValue(lesson2));

//Exercício 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);