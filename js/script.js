//Ativar itens orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const input = document.getElementById(parametro);
  if (input) {
    input.checked = true;
  }
}

parametros.forEach(ativarProduto);

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
