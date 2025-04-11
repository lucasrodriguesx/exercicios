const frutas = ["Maçã", "Banana", "Abacaxi", "Laranja"];

const maiusculas = frutas.map(f => f.toUpperCase());
const comA = frutas.filter(f => f.startsWith("A"));
const comprimentos = frutas.map(f => f.length);

console.log("Maiúsculas:", maiusculas);
console.log("Começam com 'A':", comA);
console.log("Comprimentos:", comprimentos);
