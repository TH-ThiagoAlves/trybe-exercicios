/*
Abaixo, você verá algumas especificações de algoritmos para desenvolver.
É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals 
e ternary operator .

1. Crie uma função que receba um número e retorne seu fatorial.

. Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os
inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

. Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver
com uma linha usando ternary operator .

2. Crie uma função que receba uma frase e retorne qual a maior palavra.

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

3. Crie uma página que contenha:

. Um botão ao qual será associado um event listener ;
. Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
. Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount
é atualizada.

4. Crie um código JavaScript com a seguinte especificação:
. Não se esqueça de usar template literals

. Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar
pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como
parâmetro. Sua função deve retornar essa nova string .

Exemplo:
 . String determinada: "Tryber x aqui!"
 . Parâmetro: "Bebeto"
 . Retorno: "Tryber Bebeto aqui!

. Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com 
suas principais skills .

. Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro.
Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via
parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.

Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
 . JavaScript;
 . HTML;
*/

function fatorial(number) {
  if (number < 1) { return `O valor de N: ${number} não pode ser refatorado`; };
  const numbers = [];
  for (number; number > 0; number--) {
    numbers.push(number);
  }
  const total = numbers.reduce((result, number) => result * number);
  console.log(`O Fatorial de ${numbers.length}! = ${numbers.join(' * ')} = ${total}.`);
  return `O Fatorial de ${numbers.length}! = ${numbers.join('*')} = ${total}.`;
}

//fatorial(Math.floor(Math.random() * 50) +1);

function maiorPalavra(frase) {
  let maior = '';
  let compara = '';
  for (let index = 0; index <= frase.length; index++) {
    if (frase[index] == ' ' || index == frase.length) {
      //maior = maior.substring(0, maior.length -1)
      compara.length < maior.length? compara = maior: ``;
      maior = ''
    } else {
      maior += frase[index]
    }
  }
  console.log(compara)
  return compara;
}

//maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu');

//const clickButton = document.querySelector('button')
//let clickCount = document.querySelector('p')
//clickButton.addEventListener('click', () => clickCount.innerText = parseInt(clickCount.innerText) + 1)

const searchX = (text) => {
  let phrase = 'Tryber x aqui!'
  let newPhrase = ''
  for (let index = 0; index < phrase.length; index++) {
    phrase[index] === 'x' ? newPhrase += text: newPhrase += phrase[index];
  }
  return newPhrase;
}

//console.log(searchX('Thiago'))

skills = ['Html', 'Css', 'JavaScript', 'Jest', 'Git']

const phraseSkills = (parameter) => {
  parameter += '\nMinhas cinco principais habilidades são:'
  skills.forEach(element => {
    parameter += `\n. ${element};` 
  });
  return parameter
}
let parameter = searchX('Thiago')
console.log(phraseSkills(parameter))
