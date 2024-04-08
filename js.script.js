const pikashu = document.querySelector('.pikashu');
const pipe = document.querySelector('.pipe');


const pulo = () => {
    pikashu.classList.add('pulo');

    setTimeout(() => {
        
        pikashu.classList.remove('pulo');

    }, 500);
}


const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const pikashuPosition = +window.getComputedStyle(pikashu).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && pikashuPosition < 70){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        pikashu.style.animation = 'none';
        pikashu.style.bottom = `${pikashuPosition}px`;

        pikashu.src = 'gameover.png';
        pikashu.style.width = '300px';
       
       
        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', pulo);