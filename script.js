var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');

mudarJogador('X');

function clickChoice(id) {
    if (vencedor !== null) {
        return;
    }

    var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== "-") {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = "#000000";
    if (jogador === 'X') {
        jogador = '0';
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);
    checkWin();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checkWin() {
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if (checkLine(quadrado1, quadrado2, quadrado3)) {
        changeColor(quadrado1, quadrado2, quadrado3);
        changeWinner(quadrado1);
        return;
    }

    if (checkLine(quadrado4, quadrado5, quadrado6)) {
        changeColor(quadrado4, quadrado5, quadrado6);
        changeWinner(quadrado4);
        return;
    }

    if (checkLine(quadrado7, quadrado8, quadrado9)) {
        changeColor(quadrado7, quadrado8, quadrado9);
        changeWinner(quadrado7);
        return;
    }

    if (checkLine(quadrado1, quadrado4, quadrado7)) {
        changeColor(quadrado1, quadrado4, quadrado7);
        changeWinner(quadrado1);
        return;
    }

    if (checkLine(quadrado2, quadrado5, quadrado8)) {
        changeColor(quadrado2, quadrado5, quadrado8);
        changeWinner(quadrado2);
        return;
    }

    if (checkLine(quadrado3, quadrado6, quadrado9)) {
        changeColor(quadrado3, quadrado6, quadrado9);
        changeWinner(quadrado3);
        return;
    }

    if (checkLine(quadrado1, quadrado5, quadrado9)) {
        changeColor(quadrado1, quadrado5, quadrado9);
        changeWinner(quadrado1);
        return;
    }

    if (checkLine(quadrado3, quadrado5, quadrado7)) {
        changeColor(quadrado3, quadrado5, quadrado7);
        changeWinner(quadrado3);
        return;
    }
}

function changeWinner(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function changeColor(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';

}

function checkLine(quadrado1, quadrado2, quadrado3) {
    var check = false;
    if (quadrado1.innerHTML !== "-" && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        check = true;
    }

    return check;

}

function restart() {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }
    mudarJogador('X');
}