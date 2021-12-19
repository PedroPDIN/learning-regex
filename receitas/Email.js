const texto = `
Os e-mails dos convidados são:
     - fulano@cod3r.com.br
     - xico@gmail.com
     - joao@empresa.info.br
     - maria_silva@registro.br
     - rafa.sampaio@yahoo.com
     - fulano+de+tal@escola.ninja.br
`

console.log(texto.match(/\S+@\w+\.\w{2,6}(\.\w{2})?/g));
// Para ser mas abrangente na validação de email, utilizamos o "\S" que significa tudo que não é espaço já que em um endereço de email não pode ter espaço por padrão antes do "@".