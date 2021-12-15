const texto = `1,2,3,4,5,6a.b c!d?e		-
f_g`

console.log(texto.match(/\d/g)); // números [0-9]
console.log(texto.match(/\D/g)); // não números [^0-9]

console.log(texto.match(/\w/g)); // caracteres[a-zA-Z0-9_]
console.log(texto.match(/\W/g)); // não caracteres[^a-zA-Z0-9_]

console.log(texto.match(/\s/g)); // espaços[ \t\n]
console.log(texto.match(/\W/g)); // não espaços[^ \t\n]

// \r => https://acervolima.com/javascript-regexp-r-metacharacter/