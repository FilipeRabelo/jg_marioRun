
const mario = document.querySelector(".mario");
const pipe  = document.querySelector(".pipe");

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition  = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  // console.log(marioPosition);

  // condicao onde o jogo acaba

  if(pipePosition <= 160 && pipePosition && marioPosition < 80 ){

    pipe.style.animation   = "none";
    pipe.style.left        = `${pipePosition}px`;

    mario.style.animation  = "none";
    mario.style.bottom     = `${marioPosition}px`;

    mario.src              = './img/game-over.png';
    mario.style.width      = '75px';
    mario.style.marginLeft = '50px';

    clearInterval(loop); // para parar o loop

  }

}, 10);

// document.addEventListener("keydown", jump);

// Função para tratar eventos de tecla e toque

const handleEvent = (event) => {

  if (event.type === 'keydown' && event.key === ' ') { // Verifica se a tecla pressionada é a barra de espaço
    jump();
  }

  if (event.type === 'touchstart') { // Verifica se é um toque na tela
    jump();
  }

};

// Adiciona eventos de teclado e toque

document.addEventListener("keydown", handleEvent);
document.addEventListener("touchstart", handleEvent);