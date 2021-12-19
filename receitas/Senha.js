const texto = `
123456
cod3r
QUASE123!
#OpA1
#essaSenhaEGrande1234


#OpA1?
Foi123!
`

console.log(texto.match(/^.{6,20}$/gm));
// ^ => inicio de linha
// $ => final de linha
// .{6,20} => significa qualquer caracter que tenha de 6 a 20 digitos.
console.log(texto.match(/^(?=.*[A-Z]).{6,20}$/gm));
console.log(texto.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%!^&*]).{6,20}$/gm));
// O Positive Lookahead "?=" => ele olha para frente da senha e ver se tem o caracter que você quer especifico proposto na expressão regular. No caso, no exemplo na linha 18 "(?=.*[A-Z])" ele esta olhando para frente e verificando se tem 0 ou mais caracter com letra maiuscula e se for "(?=.+[A-Z])" não vai funcionar pois vai verificar se mais do que 1 caracter maiusculo.