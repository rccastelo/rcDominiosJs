import { GravarCookie, ObterCookie, ExcluirCookie } from '../Utils/Cookie.js';

function VerAutentica() {
  const ckAut = ObterCookie("Token");

  console.log(ckAut);

  if (ckAut == "") {
    window.location.replace("../../html/Dominios/autentica.html");
  }
}

function Iniciar() {
  VerAutentica();
}

window.addEventListener('load', Iniciar);
