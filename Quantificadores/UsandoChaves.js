const texto = 'O joão recebeu 120 milhões apostando 6 9 21 23 45 46.';

// para definir uma quantificador usa {} (ele é guloso ou seja vai pegar 
// quantos elementos ele puder e envolver em uma única string e não
// separa-las.)

console.log(texto.match(/\d{1,2}/g));
console.log(texto.match(/[0-9]{2}/g));
console.log(texto.match(/\d{1,}/g));

console.log(texto.match(/\w{7}/g));
console.log(texto.match(/[\wõ]{7}/g));
console.log(texto.match(/[\wõ\s]{7}/g));

// no futuro (bordas)...
console.log(texto.match(/\b\d{1,2}\b/g));
console.log(texto.match(/\b[\wõ]{7}\b/g));