// Variáveis do placar
let pontosJogador = 0;
let pontosPc = 0;

// Elementos do ecrã
let textoJogador = document.getElementById("pontos-jogador");
let textoPc = document.getElementById("pontos-pc");
let mensagem = document.getElementById("mensagem");

// Botões
let btnPedra = document.getElementById("btn-pedra");
let btnPapel = document.getElementById("btn-papel");
let btnTesoura = document.getElementById("btn-tesoura");
let btnReset = document.getElementById("btn-reset");

// Função principal do jogo
function jogar(escolhaJogador) {
  // O computador escolhe um número de 0 a 2
  let opcoes = ["pedra", "papel", "tesoura"];
  let numeroSorteado = Math.floor(Math.random() * 3);
  let escolhaPc = opcoes[numeroSorteado];

  // Verifica quem ganhou
  if (escolhaJogador === escolhaPc) {
    mensagem.innerText = "Empate! Ambos escolheram " + escolhaJogador + ".";
  } else if (
    (escolhaJogador === "pedra" && escolhaPc === "tesoura") ||
    (escolhaJogador === "papel" && escolhaPc === "pedra") ||
    (escolhaJogador === "tesoura" && escolhaPc === "papel")
  ) {
    pontosJogador = pontosJogador + 1;
    textoJogador.innerText = pontosJogador;
    mensagem.innerText = "Ganhaste! " + escolhaJogador + " vence " + escolhaPc + ".";
  } else {
    pontosPc = pontosPc + 1;
    textoPc.innerText = pontosPc;
    mensagem.innerText = "Perdeste! " + escolhaPc + " vence " + escolhaJogador + ".";
  }
}

function reiniciarJogo() {
  pontosJogador = 0;
  pontosPc = 0;
  textoJogador.innerText = 0;
  textoPc.innerText = 0;
  mensagem.innerText = "Placar reiniciado! Joga novamente.";
}

btnPedra.addEventListener("click", function() {
  jogar("pedra");
});

btnPapel.addEventListener("click", function() {
  jogar("papel");
});

btnTesoura.addEventListener("click", function() {
  jogar("tesoura");
});

btnReset.addEventListener("click", reiniciarJogo);

// Acessibilidade pelo teclado (teclas 1, 2, 3 e R)
document.addEventListener("keydown", function(evento) {
  if (evento.key === "1") {
    jogar("pedra");
  } else if (evento.key === "2") {
    jogar("papel");
  } else if (evento.key === "3") {
    jogar("tesoura");
  } else if (evento.key === "r" || evento.key === "R") {
    reiniciarJogo();
  }
});