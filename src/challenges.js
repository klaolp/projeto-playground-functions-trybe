/* eslint-disable complexity */
// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, height) {
  let area;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(palavra) {
  let vet = [];
  vet = palavra;

  vet = vet.split(' ');
  return vet;
}

// Desafio 4
function concatName(vet) {
  return `${vet[vet.length - 1]}, ${vet[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numeros) {
  let cont = 0;
  let maior = numeros[0];

  for (let i = 0; i < numeros.length; i += 1) {
    if (maior < numeros[i]) {
      maior = numeros[i];
      cont = 1;
    } else if (maior === numeros[i]) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((mouse - cat1) === (cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }

  if (cat1 < cat2) {
    return 'cat1';
  }

  return 'cat2';
}

// Desafio 8
function fizzBuzz(numeros) {
  let vet = [];

  for (let i = 0; i < numeros.length; i += 1) {
    if ((numeros[i] % 3 === 0) && (numeros[i] % 5 === 0)) {
      vet.push('fizzBuzz');
    } else if (numeros[i] % 3 === 0) {
      vet.push('fizz');
    } else if (numeros[i] % 5 === 0) {
      vet.push('buzz');
    } else {
      vet.push('bug!');
    }
  }
  return vet;
}

// Desafio 9
function encode(frase) {
  let copia = frase;

  for (let i = 0; i < copia.length; i += 1) {
    copia = copia.replace(/a/i, '1');
    copia = copia.replace(/e/i, '2');
    copia = copia.replace(/i/i, '3');
    copia = copia.replace(/o/i, '4');
    copia = copia.replace(/u/i, '5');
  }

  return copia;
}
function decode(frase) {
  let copia = frase;

  for (let i = 0; i < copia.length; i += 1) {
    copia = copia.replace(/1/i, 'a');
    copia = copia.replace(/2/i, 'e');
    copia = copia.replace(/3/i, 'i');
    copia = copia.replace(/4/i, 'o');
    copia = copia.replace(/5/i, 'u');
  }

  return copia;
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
