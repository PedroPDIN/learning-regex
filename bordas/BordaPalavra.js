const texto1 = 'dia diatonico diafragma media wikipedia bom_dia melodia radial';

console.log(texto1.match(/\bdia\w+/gi)); // inicio da palavra.
//console.log(texto1.match(/\w+dia\b/gi)); // fim da palavra.
//console.log(texto1.match(/\w+dia\w+/gi)); // meio da palavra.
//console.log(texto1.match(/\bdia\b/gi)); // apenas a palavra.

// a borda é oposto de \w => que é [^A-Za-z0-9_]... temos problema com acentos, ou seja ele não pega letras com acentos.
const texto2 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial';
console.log(texto2.match(/\bdia\b/gi));
// na linha 10 ele pega 4 "dia" pois ele pega apenas aqueles que possui um bordas como por exemplo o 1º "dia" que é o inicio o 2º "dia" que esta na "média", pois ele trata "é" como uma borda e logo depois o espaço que também é uma borda, o 3º "dia" que esta no "wikipédia" pelo mesmo motivo do 2º e por fim o 4º "dia" que esta no "bom-dia" que trata o "-" como borda e logo depois o espaço que também trata como borda.

console.log(texto2.match(/(\S*)?dia(\S*)?/gi)); 
// "\S" alcontrário de espaços ou seja não espaços. Ele também vai incluir a "," caso você não queira se torna um problema.

console.log(texto2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi));
// ou
console.log(texto2.match(/[\wÀ-ú-]*dia[\wÀ-ú-]*/gi)); 
// possivel solução referente a console anterior.

// OBS: a borda "\b" ele trata letras com acentuação como borda que para nós meros mortais não são bordas. Nesse caso partir para uma logica com baea na tabela UNICODE. 