const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter(n => n % 2 === 0);
const dobrados = pares.map(n => n * 2);
const soma = dobrados.reduce((acc, val) => acc + val, 0);

console.log("Pares:", pares);
console.log("Dobrados:", dobrados);
console.log("Soma dos dobrados:", soma);
