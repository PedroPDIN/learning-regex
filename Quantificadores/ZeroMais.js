const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!';
const texto2 = 'There is a big fog fon in NYC';

// * => zero ou mais (ou seja pra ele não importa, pode ter nenhuma ocorrencia ou
// varias ocorrencias ele vai pegar.)

const regex = /fogo*/gi
console.log(texto1.match(regex));
console.log(texto2.match(regex))