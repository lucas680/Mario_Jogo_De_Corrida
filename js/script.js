
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const over = document.querySelector('.game-over');
const restart = document.querySelector('.restart');
const pontuacao = document.getElementById('pontos');
const pontuacao2 = document.getElementById('pontos2');
const div_pontos = document.querySelector('.div-pontos');

console.log(pontuacao.value);

var pontos = 0;
var count = true;

function jump() {


	mario.classList.add("jump");

	setTimeout(()=>{

		mario.classList.remove("jump");

	}, 500);

};

const loop = setInterval(()=>{

	const pipePosition = pipe.offsetLeft;
	const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


	if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
		pipe.style.animation = 'none';
		pipe.style.left = pipePosition+'px';

		mario.style.animation = 'none';
		mario.style.bottom = marioPosition+'px';

		mario.src = './imagens/game-over.png';
		mario.style.width = '75px';
		mario.style.marginLeft = '50px';

		over.style.visibility = 'visible';
		restart.style.visibility = 'visible';

		pontuacao2.value = pontos;

		div_pontos.style.visibility = 'visible';
		pontuacao.style.visibility = 'hidden';

		clearInterval(loop);

	}if(pipePosition <= 20 && pipePosition > 0 && marioPosition > 80 && count == true){

		pontos = pontos + 1;

		pontuacao.value = pontos;

		if(pontos == 10){
			pipe.style.animation = 'pipe-animation 1.5s infinite linear';
		}
		if(pontos == 20){
			pipe.style.animation = 'pipe-animation 1s infinite linear';
		}

		count = false;

	}
	if(pipePosition < 0){
		count = true;
	}


}, 10);


document.addEventListener('keydown', jump);