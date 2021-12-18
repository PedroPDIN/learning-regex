const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>';
console.log(texto1.match(/<(\w+)>.*<\/\1>/g));

// Basicamente o retrovisor referencia um grupo, afina quando você determina um grupo
// automaticamente ele armazena o conteúdo que foi proposto no caso do exemplo na 
// linha 2 ele captura: <b>, <strong> e <div>. Para referenciar um grupo e "usar
// o conteúdo capturado" basta digitar "/" e o numero referente a posição do grupo
// se possui um grupo basta digitar \1, caso tenha dois grupos e queira usa o 
// segundo grupo basta digita \2.

const texto2 = 'Lentamente é mente muito lenta.';
console.log(texto2.match(/(lenta)(mente)/gi));
console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi));
console.log(texto2.match(/(?:lenta)(mente).*\1/gi));
// uma forma de um grupo não armazenar um valor e utilizando o "?:", dessa forma não será possivel que um grupo não armazene tal valor.
// outra observação é que no exemplo na linha 14, o grupo 1 passa a ser 
// o "(mente)" e não mas o "(?:lenta)" pois o mesmo não armazena valores.

console.log(texto2.match(/(lenta)(mente)/gi))
console.log(texto2.match(/(lenta)(mente)?/gi))
console.log(texto2.replace(/(lenta)(mente)/gi, '$2')) 
// outra forma de referenciar um grupo com o método replace utilizando "$2"
console.log(texto2.replace(/(lenta)(mente)/gi, 'xablau $2'))

// Logo abaixo um experimento para verificar se no JS suporta certa quantidade de grupos.
// mas precisamente se ele suporta mas que 9 grupos, pois em algumas documentações é mostrado
// como exemplos no maximo 9 grupos.

const texto3 = 'abcdefghijkll';
console.log(texto3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g));

