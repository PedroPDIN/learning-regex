const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

// quantificadores SÂO gulosos (greedy)...
console.log(texto.match(/<div>.+<\/div>/g));
console.log(texto.match(/<div>.*<\/div>/g));
console.log(texto.match(/<div>.{0,100}<\/div>/g));

// quantificadores NÂO gulosos (lazy)...
console.log(texto.match(/<div>.+?<\/div>/g));
console.log(texto.match(/<div>.*?<\/div>/g));
console.log(texto.match(/<div>.{0,100}?<\/div>/g));