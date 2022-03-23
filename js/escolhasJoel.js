function faseUm() {

    var qtdDeTentativas = 2
    var tentativaAtual = 0

    while (qtdDeTentativas >= tentativaAtual) {

        var resposta = prompt ('Escreva sua resposta:')

        if (resposta == 'b' || resposta == 'B') {
            alert ('Resposta certa!')
            window.location.href="../html/joelFaseDois.html";
            break
        } else if  (resposta != 'b' || resposta !='B') {
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

    var qtdDeTentativas = 2
    var tentativaAtual = 0

    while (qtdDeTentativas >= tentativaAtual) {

        var resposta = prompt ('Escreva sua resposta:')

        if (resposta == 'c' || resposta == 'C') {
            alert ('Resposta certa!')
            window.location.href="../html/joelFaseTres.html";
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

    var qtdDeTentativas = 2
    var tentativaAtual = 0

    while (qtdDeTentativas >= tentativaAtual) {

        var resposta = prompt ('Escreva sua resposta:')

        if (resposta == 'a' || resposta == 'A') {
            alert ('Resposta certa!')
            window.location.href="../html/joelWin.html";
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