const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABC!'

console.log(texto.match(/[(abc)]/gi)); // o grupo não sobrevive dentro de um conjunto
console.log(texto.match(/([abc])/gi)); // nesse caso é valido o conjunto sobrevive dentro de um grupo.
console.log(texto.match(/(abc)/gi));

// OBS: evite criar grupos que não são necessarios no regex, como criar separações lógicas
// em que nesse caso o conjunto seria o recomendado e, também o grupo tem um significado
// especial dentro das REGEXS. Um exemplo de um bom uso de grupos esta na linha 13 em que 
// nesse caso queira pegar mais de um "abc".

const texto2 = 'Pedrinho (filho do Pedro Silva) é doutor do ABCabc!'
console.log(texto2.match(/(abc)+/gi));