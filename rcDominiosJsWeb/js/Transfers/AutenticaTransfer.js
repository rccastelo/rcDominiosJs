class AutenticaTransfer {
  constructor(dados) {
    this.Apelido = null;
    this.Senha = null;
    this.Token = null;
    this.Autenticado = false;
    this.Validacao = false;
    this.Erro = false;
    this.Mensagens = null;
    this.Status = 0;

    this.Carregar(dados);
  }

  Carregar(dados) {
    if (dados != null) {
      this.Apelido = (dados.hasOwnProperty("apelido") ? dados.apelido : null);
      this.Senha = (dados.hasOwnProperty("senha") ? dados.senha : null);
      this.Token = (dados.hasOwnProperty("token") ? dados.token : null);
      this.Autenticado = (dados.hasOwnProperty("autenticado") ? dados.autenticado : false);
      this.Validacao = (dados.hasOwnProperty("validacao") ? dados.validacao : false);
      this.Erro = (dados.hasOwnProperty("erro") ? dados.erro : false);
      this.Mensagens = (dados.hasOwnProperty("mensagens") ? dados.mensagens : null);
      this.Status = (dados.hasOwnProperty("status") ? dados.status : 0);
    }
  }

  IncluirMensagem(mensagem) {
    if ((mensagem != null) && (mensagem != "")) {
      if (this.Mensagens == null) {
        this.Mensagens = [];
      }

      this.Mensagens.push(mensagem);
    }
  }
}

export { AutenticaTransfer };
