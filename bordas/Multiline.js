const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com habib
`

console.log(texto.match(/\n/g));
console.log(texto.match(/^(\w).+\1$/gi));
console.log(texto.match(/^(\w).+\1$/gim));

// A flag "m" (multiline) => trabalha com string com multiplas linhas, ou seja ele vai considerar cada linha de forma independente.
