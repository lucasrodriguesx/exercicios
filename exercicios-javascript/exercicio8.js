let pessoa = {
    nome: "Carlos",
    idade: 28,
    cidade: "São Paulo"
};

pessoa.profissao = "Engenheiro";
delete pessoa.cidade;

console.log("Propriedades:");
for (let prop in pessoa) {
    console.log(`${prop}: ${pessoa[prop]}`);
}
