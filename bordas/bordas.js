const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador';

console.log(texto.match(/r/gi));
console.log(texto.match(/^r/gi)); // ^ inicio da linha/string.
console.log(texto.match(/r$/gi)); // $ fim da linha/string.

// OBS: "^" representa negação quando esta antes do um conjunto Ex: "/^[...]/gi". No caso na linha 4 o sinal "^" representa o inicio de um linha/string.

console.log(texto.match(/^r.*r$/gi)); // problema  do dotall.
// o ponto "." não resolve para \n.