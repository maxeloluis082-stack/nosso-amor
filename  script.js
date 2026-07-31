// ================================
// BOTÃO "ENTRAR"
// ================================

const botao = document.getElementById("entrar");

if (botao) {
    botao.addEventListener("click", () => {

        document.getElementById("historia").scrollIntoView({
            behavior: "smooth"
        });

    });
}

// ================================
// CONTADOR DO MOMENTO EM QUE COMEÇAMOS A FICAR
// ================================

// ALTERE PARA A DATA DE VOCÊS
const inicio = new Date("2026-06-08T00:00:00");
function atualizarContador() {

    const agora = new Date();

    const diferenca = agora - inicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);

    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);

    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

}

setInterval(atualizarContador, 1000);

atualizarContador();

// ================================
// BOTÃO DA MÚSICA
// ================================

const audio = document.getElementById("audio");
const playMusic = document.getElementById("playMusic");

if (playMusic) {

    playMusic.addEventListener("click", () => {

        if (audio.paused) {

            audio.play();

            playMusic.innerHTML = "⏸️ Pausar Música";

        } else {

            audio.pause();

            playMusic.innerHTML = "▶️ Tocar Música";

        }

    });

}

// ================================
// CORAÇÕES FLUTUANDO
// ================================

const container = document.querySelector(".coracoes");

function criarCoracao() {

    if (!container) return;

    const coracao = document.createElement("div");

    coracao.classList.add("coracao");

    coracao.innerHTML = "💙";

    coracao.style.left = Math.random() * 100 + "vw";

    coracao.style.fontSize = (20 + Math.random() * 30) + "px";

    coracao.style.animationDuration = (6 + Math.random() * 5) + "s";

    container.appendChild(coracao);

    setTimeout(() => {

        coracao.remove();

    }, 11000);

}

setInterval(criarCoracao, 500);