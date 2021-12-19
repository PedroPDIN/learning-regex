// OBS: script sendo feita pela linguagem JAVA;

const aplicaCor = (txt, reg, cor) => txt.replace(reg, `<span style="color: #${cor}"><b>$1</b></span>`);

const files = require('./files');
const texto = files.read('codigoFonte.html')

const codeRegex = /<code>[\s\S]*<\/code>/i
let codigo = texto.match(codeRegex)[0];

// String...
codigo = aplicaCor(codigo, /(\".*\")/g, 'ce178')

// palavras reservadas
codigo = aplicaCor(codigo, /\b(package|public|class|static|if|else)\b/g, 'd857cf')

// tipos...
codigo = aplicaCor(codigo, /\b(void|int)\b/g, '1385e2')

// comentários de multiplas linhas...
codigo = aplicaCor(codigo, /(\/\*[\s\S]*\*\/)/g, '267703')

// comentários de uma linha...
codigo = aplicaCor(codigo, /(\/\/.*?\n)/g, '267703')

const conteudoFinal = texto.replace(codeRegex, codigo)
files.write('codigoFonte.html', conteudoFinal)