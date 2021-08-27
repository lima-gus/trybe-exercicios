const fatorial = number => {
  let multiply = 1;

  for (let i = 1; i <= number; i += 1) {
      multiply *= i;
  }

  return multiply;
}

console.log(fatorial(4));
