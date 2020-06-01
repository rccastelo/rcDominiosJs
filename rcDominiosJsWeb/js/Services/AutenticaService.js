import { AutenticaTransfer } from '../Transfers/AutenticaTransfer.js';

class AutenticaService {
  async Autenticar(autenticaRequest) {
    const endereco = "http://localhost:5500/Autentica";
    let autenticaResponse = null;
    let cabecalho = new Headers();
    let respostaFetch;

    cabecalho.append('Accept', 'application/json');
    cabecalho.append('Content-Type', 'application/json');
  
    let requisicao = new Request(endereco, {
      method : 'POST',
      headers : cabecalho,
      body : JSON.stringify(autenticaRequest)
    });
  
    await fetch(requisicao)
      .then(res => {
        return res.json()
          .then(data => {
            autenticaResponse = new AutenticaTransfer(data);
            autenticaResponse.Status = res.status;
          })
          .catch(err => {
            autenticaResponse = new AutenticaTransfer();
            autenticaResponse.Erro = true;
            autenticaResponse.IncluirMensagem(`Erro em AutenticaService Autenticar Json[${err}]`);
              });
      })
      .catch(err => {
        autenticaResponse = new AutenticaTransfer();
        autenticaResponse.Erro = true;
        autenticaResponse.IncluirMensagem(`Erro em AutenticaService Autenticar Fetch[${err}]`);
      });

    return autenticaResponse;
  }
}

export { AutenticaService };
