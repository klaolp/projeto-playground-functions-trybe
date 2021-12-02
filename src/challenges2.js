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
function generatePhoneNumber(numero) {
  if(numero.length != 11)
  {
    return "Array com tamanho incorreto.";
  }
  else
  {
    let tel=[];
    //testa os valores menores que 0 e maiores que 9.
    for(let i = 0; i < numero.length; i++)
    {
      if((numero[i] < 0) || (numero[i] > 9))
      {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
    //Testa se o número repete mais de 3x.
    let cont = 0;

    for(let i = 0; i < numero.length; i++)
    {
      for(let j = 0; j < numero.length; j++)
      {
        if(numero[i] == numero[j])
        {
          cont++;
        }
      }
      if(cont >=3 )
      {
        return "não é possível gerar um número de telefone com esses valores";
      }
      cont=0;
    }

    //Realiza a "montagem" no número de telefone.
    tel.push('(');

    for(let i=0; i<2;i++)
    {
      tel=tel+(numero[i]);
    }
    
    tel+=(') ');

    for(let i=2; i<7;i++)
    {
      tel+=(numero[i]);
    }

    tel+=('-');
    for(let i=7; i<numero.length;i++)
    {
      tel+=(numero[i]);
    }

    return tel;
  }
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
