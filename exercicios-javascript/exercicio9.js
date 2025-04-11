const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R. Tolkien",
    ano: 1954
};

const { titulo, autor } = livro;

function descricaoLivro(livro) {
    return `O livro "${livro.titulo}" foi escrito por ${livro.autor}.`;
}

console.log("Título:", titulo);
console.log("Autor:", autor);
console.log(descricaoLivro(livro));
