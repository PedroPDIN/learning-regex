const email = 'pedro@gmail.com';
const emails = `
Os e-mails dos convidados são:
     -fulano@gmail.com.br
     -xico@gmail.com
     -pedro_test@empresa.com.us
     -pedro.test2@empresa.com.us
     -joão@hotmail.com
`

console.log(emails.match(/[a-zA-Z0-9_.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,4}/g))
console.log(emails.match(/\w+@\w+\.\w{2,8}/g));
console.log(emails.match(/[\w.ã]+@\w+\.\w{2,8}/g));
console.log(emails.match(/[\w.ã]+@\w+\.\w{2,8}\.?\w{0,2}/g));

// no futuro (trabalhar com grupo)...
console.log(emails.match(/[\w.ã]+@\w+\.\w{2,8}(\.\w{0,2})?/g)); // exemplo citado na linha 14;

// com isso você pode criar um grupo e decidir se ele é opcional ou não
// colocando entre "()?";