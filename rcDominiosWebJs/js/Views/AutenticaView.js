import { AutenticaTransfer } from '../Transfers/AutenticaTransfer.js';

const ObterAutentica = () => {
  let txtApelido = document.getElementById("txtApelido");;
  let txtSenha = document.getElementById("txtSenha");
  let autenticaTransfer = new AutenticaTransfer();

  autenticaTransfer.Apelido = txtApelido.value;
  autenticaTransfer.Senha = txtSenha.value;

  return autenticaTransfer;
}

const MostrarMsg = (mensagem) => {
  let texto = "";

  if (mensagem != null) {
    if (typeof(mensagem) == 'object') {
      if (Array.isArray(mensagem)) {
        if (mensagem.length > 0) {
          mensagem.forEach(msg => {
            texto += `\n- ${msg}\n`;
          });

          window.alert(texto);
        }
      }
    } else if (typeof(mensagem) == 'string') {
      window.alert(`\n- ${mensagem}\n`);
    }
  }
}

export { ObterAutentica, MostrarMsg };
