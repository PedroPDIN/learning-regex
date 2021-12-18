const texto = 'João é calmo, mas no transito fica nervoso.';

console.log(texto.match(/[\wÁ-ú]+/gi));

// Positive lookahead => ele vai olhar para frente para resolver 
// o que vem antes. "(?=)"

console.log(texto.match(/[\wÁ-ú]+(?=,)/gi)); 
// No caso ele captura o valor que possui o "," na frente.
console.log(texto.match(/[\wÁ-ú]+(?=\.)/gi)); 
// No caso ele captura o valor que possui o "." na frente.
console.log(texto.match(/[\wÁ-ú]+(?=, mas)/gi));
// No caso ele captura o valor que possui o ", mas" na frente.


// Negative lookahead => ele vai olhar olhar para frente e 
// capturar elemento que não possui o valor a frente "(?!)".
// ele é bem complexo de dar "match".
console.log(texto.match(/[\wÁ-ú]+\b(?!,)/gi));
// ele captura os elementos que não possui o "," na frente, mas, não captura  "é".
console.log(texto.match(/[\wÁ-ú]+[\s|\.](?!,)/gi));
// solução para tentar resolver o problema anterior.

// OBS: Basicamente dois grupos que olham o quem vem depois da palavra (na frente da palavra) e captura tanto de forma Positiva; que pega o que esta na frene e retorna expressão que você colocou, ou de forma Negativa; que captura tudo aquilo que não tem aquele trecho que você solucionou no grupo e retorna expressão que você colocou.