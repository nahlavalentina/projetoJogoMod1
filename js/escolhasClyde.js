function faseUm() {

    var qtdDeTentativas = 1
    var tentativaAtual = 0

    while (qtdDeTentativas >= tentativaAtual) {

        var resposta = prompt ('Escreva sua resposta: (a, b ou c)')

        if (resposta == 'a' || resposta == 'A') {
            alert ('Resposta certa!')
            window.location.href="../html/clydeFaseDois.html";
            break
        } else if  (resposta != 'a' || resposta !='A') {
            if (qtdDeTentativas > 0) {
                alert (`Resposta errada! Você ainda tem ${qtdDeTentativas} chance(s).`);
            qtdDeTentativas --
            } else {
                alert ('Não foi dessa vez!')
                window.location.href="../html/gameOver.html";
                break
            }
        }
    }
}

function faseDois() {

    var qtdDeTentativas = 1
    var tentativaAtual = 0

    while (qtdDeTentativas >= tentativaAtual) {

        var resposta = prompt ('Escreva sua resposta: (a, b ou c)')

        if (resposta == 'c' || resposta == 'C') {
            alert ('Resposta certa!')
            window.location.href="../html/clydeFaseTres.html";
            break
        } else if  (resposta != 'c' || resposta !='C') {
            if (qtdDeTentativas > 0) {
                alert (`Resposta errada! Você ainda tem ${qtdDeTentativas} chance(s).`);
            qtdDeTentativas --
            } else {
                alert ('Não foi dessa vez!')
                window.location.href="../html/gameOver.html";
                break
            }
        }
    }
}

function faseTres() {

    var qtdDeTentativas = 1
    var tentativaAtual = 0

    while (qtdDeTentativas >= tentativaAtual) {

        var resposta = prompt ('Escreva sua resposta: (a, b ou c)')

        if (resposta == 'a' || resposta == 'A') {
            alert ('Resposta certa!')
            window.location.href="../html/clydeWin.html";
            break
        } else if  (resposta != 'a' || resposta !='A') {
            if (qtdDeTentativas > 0) {
                alert (`Resposta errada! Você ainda tem ${qtdDeTentativas} chance(s).`);
            qtdDeTentativas --
            } else {
                alert ('Não foi dessa vez!')
                window.location.href="../html/gameOver.html";
                break
            }
        }
    }
}