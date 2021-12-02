/* eslint-disable complexity */
// Desafio 10
function techList(techs, nome) {
  if (techs.length === 0) {
    return 'Vazio!';
  }
  let vet = [];
  techs.sort();
  for (let i = 0; i < techs.length; i += 1) {
    let pessoa = {
      tech: techs[i],
      name: nome,
    };
    vet.push(pessoa);
  }
  return vet;
}

// Desafio 11
// eslint-disable-next-line max-lines-per-function
function generatePhoneNumber(numero) {
  if (numero.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let tel = [];
  // testa os valores menores que 0 e maiores que 9.
  for (let i = 0; i < numero.length; i += 1) {
    if ((numero[i] < 0) || (numero[i] > 9)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  // Testa se o número repete mais de 3x.
  let cont = 0;
  for (let i = 0; i < numero.length; i += 1) {
    for (let j = 0; j < numero.length; j += 1) {
      if (numero[i] === numero[j]) {
        cont += 1;
      }
    }
    if (cont >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    cont = 0;
  }
  // Realiza a "montagem" no número de telefone.
  tel.push('(');
  for (let i = 0; i < 2; i += 1) {
    tel += (numero[i]);
  }
  tel += (') ');
  for (let i = 2; i < 7; i += 1) {
    tel += (numero[i]);
  }
  tel += ('-');
  for (let i = 7; i < numero.length; i += 1) {
    tel += (numero[i]);
  }
  return tel;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
