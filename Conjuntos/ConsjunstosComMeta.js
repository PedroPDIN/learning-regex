const texto = '.$+*?-'

console.log(texto.match(/[+.?*$]/g)) // não precisa de escape dentro do conjunto nem todos.
console.log(texto.match(/[$-?]/g)) // isso é um intervalo (range)

// não é intervalo (range)...
console.log(texto.match(/[$\-?]/g))
console.log(texto.match(/[-?]/g))

// podem precisar de escape dentro do conjunto: - [] ^