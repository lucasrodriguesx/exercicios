import moment from 'moment';

function calcularIdade(anoNascimento) {
  const anoAtual = moment().year();
  return anoAtual - anoNascimento;
}

const anoNascimento = 2003;
const idade = calcularIdade(anoNascimento);
console.log(`Idade: ${idade} anos`);
