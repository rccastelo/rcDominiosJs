import { AutenticaService } from '../Services/AutenticaService.js';
import { ObterAutentica, MostrarMsg } from '../Views/AutenticaView.js';
import { GravarCookie, ObterCookie, ExcluirCookie } from '../Utils/Cookie.js';

async function Autenticar() {
  let autenticaResponse;
  let autenticaRequest;
  let autenticaService;

  autenticaService = new AutenticaService();
  autenticaRequest = ObterAutentica();

  autenticaResponse = await autenticaService.Autenticar(autenticaRequest);

  if (autenticaResponse != null) {
    if ((autenticaResponse.Erro === false) && 
        (autenticaResponse.Validacao === true) &&
        (autenticaResponse.Autenticado === true)) {

      GravarCookie("Token", autenticaResponse.Token);

      window.location.replace("../../html/Dominios/dominios.html");
    } else {
      MostrarMsg(autenticaResponse.Mensagens);
    }
  }
}

function Iniciar() {
  let botAutenticar;

  botAutenticar = document.getElementById("botAutenticar");
  botAutenticar.addEventListener('click', Autenticar);
}

window.addEventListener('load', Iniciar);
