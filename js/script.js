//Ativar itens menu
const links = document.querySelectorAll('.header-menu a');
function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add('ativo');
  }
}
links.forEach(ativarLink);

//Ativar itens orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const input = document.getElementById(parametro);
  if (input) {
    input.checked = true;
  }
}

parametros.forEach(ativarProduto);

//Perguntas Frequentes

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controls);

  resposta.classList.toggle('ativa');
  const ativa = resposta.classList.contains('ativa');
  pergunta.setAttribute('aria-expanded', ativa);
}

function eventoPerguntas(pergunta) {
  pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventoPerguntas);
