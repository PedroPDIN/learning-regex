const cpf = '600.567.890-12';
const cpfs = `
Cpfs dos aprovados:
     -600.567.890-12
     -132.345.565-56
     -123.456.789-10
`

const regex = /\d{3}\.\d{3}\.\d{3}-\d{2}/g
console.log(cpf.match(regex));