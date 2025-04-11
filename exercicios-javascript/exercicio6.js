let numeros = [10, 20, 30, 40, 50];

numeros.push(60);
numeros.shift();

const maior = Math.max(...numeros);
const menor = Math.min(...numeros);

console.log("Array:", numeros);
console.log("Maior número:", maior);
console.log("Menor número:", menor);
