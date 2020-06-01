const GravarCookie = (nome, conteudo) => {
  var dh = new Date(new Date().getTime() + 1800000); //-- 30 minutos
  var cookie = `ckDom${nome}=${escape(conteudo)}; duration=${dh.toGMTString()}`;

  document.cookie = cookie;
}

const ObterCookie = (nome) => {
  var conteudo = "";
  var cookies = document.cookie;
  var cookie = "";
  var inicio = 0;
  var fim = 0;

  if (cookies == null) {
    cookies = "";
  }
  
  cookies = `; ${cookies}`;
  cookie = `ckDom${nome}=`;

  inicio = cookies.indexOf(`; ${cookie}`);

  if (inicio >= 0) {
    inicio += 2;
  
    fim = cookies.indexOf(";", inicio);

    if (fim < 0) {
      fim = cookies.length;                        
    }
    
    if ((inicio > 0) && (fim > inicio)) {
      conteudo = cookies.substring(inicio + cookie.length, fim);
    }
  }

  return unescape(conteudo);
}

const ExcluirCookie = (nome) => {

}

export { GravarCookie, ObterCookie, ExcluirCookie };
