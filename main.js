const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
for (let i = 0; i < botoes.length; i++) {
  // Para a variável i = 0, quando i for menor que o tamanho do array(número de itens da lista .botao),
  // i++ adiciona 1 a i enquanto i for menor que o tamanho do array.
  botoes[i].onclick = function () {
    // .onclick = function(){} é uma função que é executada quando o botão é clicado.
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo"); //primeiro remove a classe ativo de todos os botões.
      textos[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo"); //adiciona a classe ativo ao botão clicado, onde a classe ativo possui um estilo diferente.
    textos[i].classList.add("ativo");
  };
}
const contadores = document.querySelectorAll(".contador");
// querySelectorAll retorna um array(lista) de elementos que correspondem ao seletor CSS especificado, no caso,
// todos os elementos com a classe "contador".
const tempoObjetivo1 = new Date("2025-10-05T00:00:00");
// Constantes com as datas que serão usadas para calcular o tempo restante.
const tempoObjetivo2 = new Date("2025-12-05T00:00:00");
const tempoObjetivo3 = new Date("2025-12-30T00:00:00");
const tempoObjetivo4 = new Date("2025-02-01T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];
// Cria um array(lista) com as datas que serão usadas para calcular o tempo restante.
function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  // new Date() retorna a data e hora atual.
  let tempoFinal = tempoObjetivo - tempoAtual;
  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);
  // Transforma o tempo de milisegundos em segundos, minutos, horas e dias.
  segundos %= 60;
  // %= é o operador de módulo, que retorna o resto da divisão.
  minutos %= 60;
  horas %= 24;
  if (tempoFinal > 0) {
    // Se o tempo final for maior que 0, retorna os valores de dias, horas, minutos e segundos do tempo final.
    return [dias, horas, minutos, segundos];
  } else {
    // Se não, retorna 0 para todos os valores.
    return [0, 0, 0, 0];
  }
}

function atualizaCronometro() {
  for (let i = 0; i < contadores.length; i++) {
    // Para todos os itens do array contadores.
    document.getElementById("dias" + i).textContent = calculaTempo(
      tempos[i]
    )[0];
    document.getElementById("horas" + i).textContent = calculaTempo(
      tempos[i]
    )[1];
    document.getElementById("min" + i).textContent = calculaTempo(tempos[i])[2];
    document.getElementById("seg" + i).textContent = calculaTempo(tempos[i])[3];
  }
}

function comecaCronometro() {
  atualizaCronometro();
  setInterval(atualizaCronometro, 1000);
  // setInterval é uma função que executa uma função a cada intervalo de tempo especificado, neste caso, 1 segundo.
}

comecaCronometro();
