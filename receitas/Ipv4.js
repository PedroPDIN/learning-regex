const texto = `
Inválidos:
192.268.0.1
1.333.1.1
192.168.0.256
256.256.256.256

Válidos:
192.168.0.1
127.0.0.1
10.0.0.255
10.11.12.0
255.255.255.255
0.0.0.0
`
const n = '(\\d{1,2}|1\\d{2}|2[0,4]\\d|25[0,5])'
// OBS: para usar o escape dentro de string e preciso colocar dois escape "\\".
const ipv4 = RegExp(`\\b${n}\\.${n}\\.${n}\\.${n}\\b`, 'g')
console.log(texto.match(ipv4));
// OBS: RegExp => O construtor RegExp cria um objeto de expressão regular para realizar uma correspondência de texto com um padrão. Util para compor uma expressão regular mais complexo, como por exemplo, caso não utilizasse-mos o RegExp basicamente iriamos repetir 4x a expressão na linha 16 em uma unica linha (seria muito grande). Literalmente, nesse exemplo pegar um expressão simples e concatenar em uma expressão mas complexas.