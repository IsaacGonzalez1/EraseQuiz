function playVideo() {

    quitarSonido = document.getElementById('quitarSonido');
    repetir = document.getElementById('repetir');
    iniciarReproduccion = document.getElementById('iniciarReproduccion');
    
    avanzar = document.getElementById('avanzar');
    volverAtras = document.getElementById('volverAtras');

    repetir.addEventListener('click', btnVolverAreproducir);
    iniciarReproduccion.addEventListener('click', btnReproducir);
    
    bajarSonido.addEventListener('click', btnBajarSonido);
    quitarSonido.addEventListener('click', btnQuitarSonido);
    aumentarSonido.addEventListener('click', btnSubirSonido);

    avanzar.addEventListener('click', btnAvanzar);
    volverAtras.addEventListener('click', btnRetroceder);

}

function btnBajarSonido() {

    if (video.volume > 0.001) {

        video.volume = video.volume - 0.25;
        
    }
}

function btnSubirSonido() {

    if (video.volume < 1) {
        video.volume = video.volume + 0.25;
    }

    if (video.muted) {

        video.muted = false;
        video.volume = 0.25;
    }
}

function btnVolverAreproducir() {

    var play = document.getElementById('iniciarReproduccion');
    video.currentTime = 0;

    video.play();
    play.value = '\u23F8';

}

function btnQuitarSonido() {

    var quitarSonido = document.getElementById('quitarSonido');

    if (video.muted) {

        video.muted = false;
        quitarSonido.value = '\uD83D\uDD07';

    } else {

        video.muted = true;
        quitarSonido.value = '\uD83D\uDD0A';
    }

}

function btnReproducir() {

    var play = document.getElementById('iniciarReproduccion');

    if (!video.ended && !video.paused) {

        video.pause();
        play.value = '\u25BA';

    } else {
        
        video.play();
        play.value = '\u23F8';
    }
}

function btnAvanzar() {

    if (video.currentTime < video.duration && video.currentTime > video.duration - 4) {
        video.currentTime = video.duration;
    }

    if (video.currentTime < video.duration - 4) {
        video.currentTime = video.currentTime + 4;
    }

}

function btnRetroceder() {

    if (video.currentTime > 0 && video.currentTime < 4) {
        video.currentTime = 0;
    }

    if (video.currentTime > 4) {
        video.currentTime = video.currentTime - 4;
    }
}

window.addEventListener('load', playVideo, false);

$(document).ready(function() { 
barraReproduccion  = document.getElementById('barraReproduccion');
video = document.getElementById('video');

video.addEventListener('timeupdate', barraVideo, false); 
barraReproduccion.addEventListener("click", controlar); 

function barraVideo() {
     
    var porcent = Math.floor((100 / video.duration) * video.currentTime);
   
    barraReproduccion.value = porcent;
  
    barraReproduccion.innerHTML = porcent + '% played';

}

function controlar(e) {

  var porcientoBarra = e.offsetX / this.offsetWidth;
  video.currentTime = porcientoBarra * video.duration;

  e.target.value = Math.floor(porcientoBarra / 100);
  e.target.innerHTML = barraReproduccion.value + '% played';
  
}

});