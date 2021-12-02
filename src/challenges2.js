// Desafio 10
function techList(techs, nome) {
  if(techs.length === 0)
  {
    return 'Vazio!';
  }
  else
  {
    let vet = [];
    techs.sort();

    for(let i = 0; i < techs.length; i++)
    {
      let pessoa = {
        tech: techs[i],
        name: nome,
      };
      vet.push(pessoa);
    }
    return vet;
  }
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
