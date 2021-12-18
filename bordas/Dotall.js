const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador';

console.log(texto.match(/^r.*r$/gi)); // problema  do dotall.
// o ponto "." não resolve para \n.

// solução do problema...
console.log(texto.match(/^r[\s\S]*r$/gi));
// o conjunto [\s\S] são complementares, ou seja, ele captura tudo que é espaço (\s) e tudo que não é espaço (\S), ou seja tudo que tem nesse (\s) esse (\S) será exatamente oposto. Já que são complementares, se esses dois estiverem juntos em um conjunto ele vai selecionar completamente tudo, substituido o "." que seleciona tudo mas "não tudo".