function tocaSom (idElementAudio) {
    const element = document.querySelector(idElementAudio);

    if (element && element.localName === 'audio') {
        element.play();
    } else if (element === null) {
        console.log('Elemento não encontrado')
    } else {
        console.log('Elemento não válido.')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(event) {
        if (event.code === "Enter" || event.code === "Space"){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}
