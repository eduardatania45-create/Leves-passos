const WHATSAPP = "553198640533"; // Confira o número antes de publicar

const produtos = [
  {id:1,nome:"Slide Louis Vuitton LILAS 22/24",categoria:"Sandálias",preco:null,imagem:"produtos/produto-001.jpg",tag:"SANDÁLIAS"},
  {id:2,nome:"Calçado do catálogo 02",categoria:"Sandálias",preco:null,imagem:"produtos/produto-002.jpg",tag:"SANDÁLIAS"},
  {id:3,nome:"Calçado do catálogo 03",categoria:"Tênis",preco:null,imagem:"produtos/produto-003.jpg",tag:"TÊNIS"},
  {id:4,nome:"Calçado do catálogo 04",categoria:"Tênis",preco:null,imagem:"produtos/produto-004.jpg",tag:"TÊNIS"},
  {id:5,nome:"Calçado do catálogo 05",categoria:"Tênis",preco:null,imagem:"produtos/produto-005.jpg",tag:"TÊNIS"},
  {id:6,nome:"Calçado do catálogo 06",categoria:"Tênis",preco:null,imagem:"produtos/produto-006.jpg",tag:"TÊNIS"},
  {id:7,nome:"Calçado do catálogo 07",categoria:"Tênis",preco:null,imagem:"produtos/produto-007.jpg",tag:"TÊNIS"},
  {id:8,nome:"Mizuno Wave Prophecy LS AZUL CINZA",categoria:"Tênis",preco:null,imagem:"produtos/produto-008.jpg",tag:"TÊNIS"},
  {id:9,nome:"Calçado do catálogo 09",categoria:"Tênis",preco:null,imagem:"produtos/produto-009.jpg",tag:"TÊNIS"},
  {id:10,nome:"Calçado do catálogo 10",categoria:"Tênis",preco:null,imagem:"produtos/produto-010.jpg",tag:"TÊNIS"},
  {id:11,nome:"Calçado do catálogo 11",categoria:"Tênis",preco:null,imagem:"produtos/produto-011.jpg",tag:"TÊNIS"},
  {id:12,nome:"Calçado do catálogo 12",categoria:"Tênis",preco:null,imagem:"produtos/produto-012.jpg",tag:"TÊNIS"},
  {id:13,nome:"Calçado do catálogo 13",categoria:"Tênis",preco:null,imagem:"produtos/produto-013.jpg",tag:"TÊNIS"},
  {id:14,nome:"Calçado do catálogo 14",categoria:"Tênis",preco:null,imagem:"produtos/produto-014.jpg",tag:"TÊNIS"},
  {id:15,nome:"Calçado do catálogo 15",categoria:"Tênis",preco:null,imagem:"produtos/produto-015.jpg",tag:"TÊNIS"},
  {id:16,nome:"Calçado do catálogo 16",categoria:"Tênis",preco:null,imagem:"produtos/produto-016.jpg",tag:"TÊNIS"},
  {id:17,nome:"Calçado do catálogo 17",categoria:"Tênis",preco:null,imagem:"produtos/produto-017.jpg",tag:"TÊNIS"},
  {id:18,nome:"Calçado do catálogo 18",categoria:"Tênis",preco:null,imagem:"produtos/produto-018.jpg",tag:"TÊNIS"},
  {id:19,nome:"Chuteira Infantil Mizuno Society AZUL 29",categoria:"Tênis",preco:null,imagem:"produtos/produto-019.jpg",tag:"TÊNIS"},
  {id:20,nome:"Chuteira Infantil Mizuno Futsal PRETA 26",categoria:"Tênis",preco:null,imagem:"produtos/produto-020.jpg",tag:"TÊNIS"},
  {id:21,nome:"Chuteira Infantil Mizuno Society AZUL 29",categoria:"Tênis",preco:null,imagem:"produtos/produto-021.jpg",tag:"TÊNIS"},
  {id:22,nome:"Chuteira Infantil Mizuno Futsal PRETA 26",categoria:"Tênis",preco:null,imagem:"produtos/produto-022.jpg",tag:"TÊNIS"},
  {id:23,nome:"Calçado do catálogo 23",categoria:"Tênis",preco:null,imagem:"produtos/produto-023.jpg",tag:"TÊNIS"},
  {id:24,nome:"Calçado do catálogo 24",categoria:"Tênis",preco:null,imagem:"produtos/produto-024.jpg",tag:"TÊNIS"},
  {id:25,nome:"Calçado do catálogo 25",categoria:"Tênis",preco:null,imagem:"produtos/produto-025.jpg",tag:"TÊNIS"},
  {id:26,nome:"Calçado do catálogo 26",categoria:"Tênis",preco:null,imagem:"produtos/produto-026.jpg",tag:"TÊNIS"},
  {id:27,nome:"Ne Samba Infantil Hello Kit 02",categoria:"Tênis",preco:null,imagem:"produtos/produto-027.jpg",tag:"TÊNIS"},
  {id:28,nome:"Calçado do catálogo 28",categoria:"Tênis",preco:null,imagem:"produtos/produto-028.jpg",tag:"TÊNIS"},
  {id:29,nome:"Calçado do catálogo 29",categoria:"Tênis",preco:null,imagem:"produtos/produto-029.jpg",tag:"TÊNIS"},
  {id:30,nome:"Calçado do catálogo 30",categoria:"Tênis",preco:null,imagem:"produtos/produto-030.jpg",tag:"TÊNIS"},
  {id:31,nome:"Calçado do catálogo 31",categoria:"Sandálias",preco:null,imagem:"produtos/produto-031.jpg",tag:"SANDÁLIAS"},
  {id:32,nome:"Calçado do catálogo 32",categoria:"Sandálias",preco:null,imagem:"produtos/produto-032.jpg",tag:"SANDÁLIAS"},
  {id:33,nome:"Papete Gucci PRETA QA",categoria:"Sandálias",preco:null,imagem:"produtos/produto-033.jpg",tag:"SANDÁLIAS"},
  {id:34,nome:"Chinelo E.V.A AREZZO NUDE 33/34",categoria:"Sandálias",preco:null,imagem:"produtos/produto-034.jpg",tag:"SANDÁLIAS"},
  {id:35,nome:"Calçado do catálogo 35",categoria:"Tênis",preco:null,imagem:"produtos/produto-035.jpg",tag:"TÊNIS"},
  {id:36,nome:"Calçado do catálogo 36",categoria:"Tênis",preco:null,imagem:"produtos/produto-036.jpg",tag:"TÊNIS"},
  {id:37,nome:"Calçado do catálogo 37",categoria:"Tênis",preco:null,imagem:"produtos/produto-037.jpg",tag:"TÊNIS"},
  {id:38,nome:"Calçado do catálogo 38",categoria:"Tênis",preco:null,imagem:"produtos/produto-038.jpg",tag:"TÊNIS"},
  {id:39,nome:"Calçado do catálogo 39",categoria:"Tênis",preco:null,imagem:"produtos/produto-039.jpg",tag:"TÊNIS"},
  {id:40,nome:"Calçado do catálogo 40",categoria:"Tênis",preco:null,imagem:"produtos/produto-040.jpg",tag:"TÊNIS"},
  {id:41,nome:"Calçado do catálogo 41",categoria:"Tênis",preco:null,imagem:"produtos/produto-041.jpg",tag:"TÊNIS"},
  {id:42,nome:"Bota Cano Alto Slouchy OFF 34",categoria:"Sapatos",preco:null,imagem:"produtos/produto-042.jpg",tag:"SAPATOS"},
  {id:43,nome:"Bota Cano Alto Slouchy PRETA",categoria:"Sapatos",preco:null,imagem:"produtos/produto-043.jpg",tag:"SAPATOS"},
  {id:44,nome:"Calçado do catálogo 44",categoria:"Sapatos",preco:null,imagem:"produtos/produto-044.jpg",tag:"SAPATOS"},
  {id:45,nome:"Calçado do catálogo 45",categoria:"Tênis",preco:null,imagem:"produtos/produto-045.jpg",tag:"TÊNIS"},
  {id:46,nome:"Calçado do catálogo 46",categoria:"Tênis",preco:null,imagem:"produtos/produto-046.jpg",tag:"TÊNIS"},
  {id:47,nome:"Calçado do catálogo 47",categoria:"Tênis",preco:null,imagem:"produtos/produto-047.jpg",tag:"TÊNIS"},
  {id:48,nome:"Caterpillar Adventure CARAMELO",categoria:"Tênis",preco:null,imagem:"produtos/produto-048.jpg",tag:"TÊNIS"},
  {id:49,nome:"Botina Bordada CARAMELO 40",categoria:"Sapatos",preco:null,imagem:"produtos/produto-049.jpg",tag:"SAPATOS"},
  {id:50,nome:"Calçado do catálogo 50",categoria:"Tênis",preco:null,imagem:"produtos/produto-050.jpg",tag:"TÊNIS"},
  {id:51,nome:"Calçado do catálogo 51",categoria:"Tênis",preco:null,imagem:"produtos/produto-051.jpg",tag:"TÊNIS"},
  {id:52,nome:"Calçado do catálogo 52",categoria:"Tênis",preco:null,imagem:"produtos/produto-052.jpg",tag:"TÊNIS"},
  {id:53,nome:"Calçado do catálogo 53",categoria:"Tênis",preco:null,imagem:"produtos/produto-053.jpg",tag:"TÊNIS"},
  {id:54,nome:"Calçado do catálogo 54",categoria:"Tênis",preco:null,imagem:"produtos/produto-054.jpg",tag:"TÊNIS"},
  {id:55,nome:"Calçado do catálogo 55",categoria:"Tênis",preco:null,imagem:"produtos/produto-055.jpg",tag:"TÊNIS"},
  {id:56,nome:"Calçado do catálogo 56",categoria:"Tênis",preco:null,imagem:"produtos/produto-056.jpg",tag:"TÊNIS"},
  {id:57,nome:"Calçado do catálogo 57",categoria:"Tênis",preco:null,imagem:"produtos/produto-057.jpg",tag:"TÊNIS"},
  {id:58,nome:"Nike V2K Run PRETO BRANCO 35",categoria:"Tênis",preco:null,imagem:"produtos/produto-058.jpg",tag:"TÊNIS"},
  {id:59,nome:"Adidas Samba CREMER BRANCO 34",categoria:"Tênis",preco:null,imagem:"produtos/produto-059.jpg",tag:"TÊNIS"},
  {id:60,nome:"Calçado do catálogo 60",categoria:"Tênis",preco:null,imagem:"produtos/produto-060.jpg",tag:"TÊNIS"},
  {id:61,nome:"Calçado do catálogo 61",categoria:"Tênis",preco:null,imagem:"produtos/produto-061.jpg",tag:"TÊNIS"},
  {id:62,nome:"Calçado do catálogo 62",categoria:"Tênis",preco:null,imagem:"produtos/produto-062.jpg",tag:"TÊNIS"},
  {id:63,nome:"Calçado do catálogo 63",categoria:"Tênis",preco:null,imagem:"produtos/produto-063.jpg",tag:"TÊNIS"},
  {id:64,nome:"Calçado do catálogo 64",categoria:"Tênis",preco:null,imagem:"produtos/produto-064.jpg",tag:"TÊNIS"},
  {id:65,nome:"Calçado do catálogo 65",categoria:"Tênis",preco:null,imagem:"produtos/produto-065.jpg",tag:"TÊNIS"},
  {id:66,nome:"Sandália E.V.A Trançada BRANCA 33/34",categoria:"Sandálias",preco:null,imagem:"produtos/produto-066.jpg",tag:"SANDÁLIAS"},
  {id:67,nome:"Calçado do catálogo 67",categoria:"Tênis",preco:null,imagem:"produtos/produto-067.jpg",tag:"TÊNIS"},
  {id:68,nome:"Calçado do catálogo 68",categoria:"Tênis",preco:null,imagem:"produtos/produto-068.jpg",tag:"TÊNIS"},
  {id:69,nome:"Calçado do catálogo 69",categoria:"Tênis",preco:null,imagem:"produtos/produto-069.jpg",tag:"TÊNIS"},
  {id:70,nome:"Calçado do catálogo 70",categoria:"Tênis",preco:null,imagem:"produtos/produto-070.jpg",tag:"TÊNIS"},
  {id:71,nome:"Calçado do catálogo 71",categoria:"Tênis",preco:null,imagem:"produtos/produto-071.jpg",tag:"TÊNIS"},
  {id:72,nome:"Calçado do catálogo 72",categoria:"Tênis",preco:null,imagem:"produtos/produto-072.jpg",tag:"TÊNIS"},
  {id:73,nome:"Calçado do catálogo 73",categoria:"Tênis",preco:null,imagem:"produtos/produto-073.jpg",tag:"TÊNIS"},
  {id:74,nome:"Sandália E.V.A Trançada BRANCA 33/34",categoria:"Sandálias",preco:null,imagem:"produtos/produto-074.jpg",tag:"SANDÁLIAS"},
  {id:75,nome:"Calçado do catálogo 75",categoria:"Tênis",preco:null,imagem:"produtos/produto-075.jpg",tag:"TÊNIS"}
];
let categoriaAtual = "Todos";
let buscaAtual = "";
let sacola = [];

const moeda = valor => valor.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
});

const grade = document.getElementById("gradeProdutos");

function obterProdutosVisiveis() {
  let lista = produtos.filter(produto =>
    (categoriaAtual === "Todos" || produto.categoria === categoriaAtual) &&
    (produto.nome + " " + produto.categoria)
      .toLocaleLowerCase("pt-BR")
      .includes(buscaAtual)
  );

  if (document.getElementById("ordenacao").value === "nome") {
    lista.sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
  }

  return lista;
}

function renderizarProdutos() {
  const lista = obterProdutosVisiveis();

  grade.innerHTML = lista.map(produto => `
    <article class="produto-card">
      <div class="produto-foto">
        <img src="${produto.imagem}" alt="${produto.nome}" loading="lazy">
        <span class="etiqueta-produto">${produto.tag}</span>
        <button class="adicionar" data-adicionar="${produto.id}"
          aria-label="Adicionar à sacola">+</button>
      </div>

      <div class="produto-info">
        <span class="produto-categoria">${produto.categoria}</span>
        <h3>${produto.nome}</h3>
        <p>Consulte cores, numeração e disponibilidade.</p>
        <strong class="preco">
          ${produto.preco === null ? "Consulte o valor" : moeda(produto.preco)}
        </strong>
      </div>
    </article>
  `).join("");

  document.getElementById("semResultados").hidden = lista.length !== 0;
}

function atualizarContador() {
  document.getElementById("contadorCarrinho").textContent =
    sacola.reduce((total, item) => total + item.quantidade, 0);
}

function abrirSacola() {
  document.getElementById("fundoModal").hidden = false;
  renderizarSacola();
}

function fecharSacola() {
  document.getElementById("fundoModal").hidden = true;
}

function adicionarProduto(id) {
  let item = sacola.find(produto => produto.id === id);

  if (item) {
    item.quantidade++;
  } else {
    sacola.push({ id, quantidade: 1 });
  }

  atualizarContador();
  renderizarSacola();
  abrirSacola();
}

function renderizarSacola() {
  const container = document.getElementById("itensCarrinho");

  if (!sacola.length) {
    container.innerHTML = "<p>Sua sacola está vazia.</p>";
  } else {
    container.innerHTML = sacola.map(item => {
      const produto = produtos.find(p => p.id === item.id);

      return `
        <article class="item-sacola">
          <img src="${produto.imagem}" alt="${produto.nome}">
          <div>
            <h3>${produto.nome}</h3>
            <p>Preço a confirmar</p>

            <div class="controles-qtd">
              <button data-qtd="${produto.id}" data-delta="-1">−</button>
              <span>${item.quantidade}</span>
              <button data-qtd="${produto.id}" data-delta="1">+</button>
            </div>

            <button class="remover-item" data-remover="${produto.id}">
              Remover
            </button>
          </div>
        </article>
      `;
    }).join("");
  }

  document.getElementById("totalCarrinho").textContent = "A confirmar";
  document.getElementById("finalizarPedido").disabled = !sacola.length;
}

function enviarWhatsApp(mensagem) {
  window.open(
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`,
    "_blank",
    "noopener"
  );
}

function finalizarPedido() {
  if (!sacola.length) return;

  const linhas = sacola.map(item => {
    const produto = produtos.find(p => p.id === item.id);

    return `- ${produto.nome} | Quantidade: ${item.quantidade} | preço a confirmar`;
  });

  enviarWhatsApp([
    "Olá! Vim pelo site da Leves Passos by Daya.",
    "",
    "Gostaria de consultar este pedido:",
    ...linhas,
    "",
    "Pode confirmar preço, disponibilidade, numeração, frete e pagamento?"
  ].join("\n"));
}
document.getElementById("formBusca").addEventListener("submit", evento => {
  evento.preventDefault();

  buscaAtual = document.getElementById("campoBusca")
    .value.trim().toLocaleLowerCase("pt-BR");

  renderizarProdutos();
});

document.getElementById("campoBusca").addEventListener("input", evento => {
  buscaAtual = evento.target.value.trim().toLocaleLowerCase("pt-BR");
  renderizarProdutos();
});

document.getElementById("ordenacao").addEventListener(
  "change",
  renderizarProdutos
);

document.getElementById("filtros").addEventListener("click", evento => {
  const botao = evento.target.closest("[data-filtro]");
  if (!botao) return;

  categoriaAtual = botao.dataset.filtro;

  document.querySelectorAll("#filtros [data-filtro]").forEach(elemento => {
    elemento.classList.toggle(
      "ativo",
      elemento.dataset.filtro === categoriaAtual
    );
  });

  document.querySelectorAll("nav [data-filtro]").forEach(elemento => {
    elemento.classList.toggle(
      "selecionado",
      elemento.dataset.filtro === categoriaAtual
    );
  });

  renderizarProdutos();
});

document.querySelectorAll("nav [data-filtro]").forEach(link => {
  link.addEventListener("click", () => {
    categoriaAtual = link.dataset.filtro;

    document.querySelectorAll("#filtros [data-filtro]").forEach(elemento => {
      elemento.classList.toggle(
        "ativo",
        elemento.dataset.filtro === categoriaAtual
      );
    });

    renderizarProdutos();
  });
});

grade.addEventListener("click", evento => {
  const botao = evento.target.closest("[data-adicionar]");

  if (botao) {
    adicionarProduto(Number(botao.dataset.adicionar));
  }
});

document.getElementById("abrirCarrinho")
  .addEventListener("click", abrirSacola);

document.getElementById("fecharCarrinho")
  .addEventListener("click", fecharSacola);

document.getElementById("fundoModal").addEventListener("click", evento => {
  if (evento.target.id === "fundoModal") {
    fecharSacola();
  }
});

document.addEventListener("keydown", evento => {
  if (evento.key === "Escape") {
    fecharSacola();
  }
});

document.getElementById("itensCarrinho").addEventListener("click", evento => {
  const botaoQuantidade = evento.target.closest("[data-qtd]");
  const botaoRemover = evento.target.closest("[data-remover]");

  if (botaoQuantidade) {
    const item = sacola.find(
      produto => produto.id === Number(botaoQuantidade.dataset.qtd)
    );

    if (item) {
      item.quantidade += Number(botaoQuantidade.dataset.delta);
    }

    sacola = sacola.filter(item => item.quantidade > 0);

    atualizarContador();
    renderizarSacola();
  }

  if (botaoRemover) {
    sacola = sacola.filter(
      item => item.id !== Number(botaoRemover.dataset.remover)
    );

    atualizarContador();
    renderizarSacola();
  }
});

document.getElementById("limparCarrinho").addEventListener("click", () => {
  sacola = [];
  atualizarContador();
  renderizarSacola();
});

document.getElementById("finalizarPedido")
  .addEventListener("click", finalizarPedido);

document.getElementById("falarLoja").addEventListener("click", () => {
  enviarWhatsApp(
    "Olá! Vim pelo site da Leves Passos by Daya e gostaria de informações sobre os produtos."
  );
});

renderizarProdutos();
atualizarContador();
