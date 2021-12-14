// \n não é resolvido pelo ponto.
// o ponto não engloba o \n
// dotall - alguns linguagem tem um flag /exp/s, mas JS não!

const texto = 'Bom\ndia'
const texto2 = 'Bom\tdia'

console.log(texto.match(/./gi));
console.log(texto2.match(/./gi));
console.log(texto.match(/.../gi));
console.log(texto2.match(/.../gi));
console.log(texto.match(/..../gi));
console.log(texto.match(/..../gi));