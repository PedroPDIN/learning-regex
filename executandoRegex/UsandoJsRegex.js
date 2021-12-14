const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f';

const newRegex = RegExp('9')
console.log('Métodos da RegExp...')
console.log(newRegex.test(texto))
console.log(newRegex.exec(texto))

const regexLetras = /[a-f]/g;
console.log('Métodos da string...');
console.log(texto.match(regexLetras));
console.log(texto.search(regexLetras));
console.log(texto.replace(regexLetras, 'Achei'));
console.log(texto.split(regexLetras));

