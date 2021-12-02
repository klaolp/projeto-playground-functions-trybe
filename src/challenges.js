// Desafio 1
function compareTrue(valor1, valor2) {
  if((valor1 == true) && (valor2 == true))
  {
    return true;
  }
  else
  {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area;
  area = (base*height)/2;
  return area;
}

// Desafio 3
function splitSentence(palavra) {
  // seu código aqui
}

// Desafio 4
function concatName(vet) {
  return vet[vet.length-1]+", "+vet[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3)+ties;
}

// Desafio 6
function highestCount(numeros) {
  let cont = 0;
  let maior = numeros[0];

  for(let i = 0; i<numeros.length; i++)
  {
    if(maior < numeros[i])
    {
      maior = numeros[i];
      cont = 1;
    }
    else
    {
      if(maior == numeros[i])
      {
        cont++;
      }
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if((mouse-cat1) === (cat2-mouse))
  {
    return "os gatos trombam e o rato foge";
  }
  else
  {
    if(cat1 <cat2)
    {
      return "cat1";
    }
    else
    {
      return "cat2";
    }
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
