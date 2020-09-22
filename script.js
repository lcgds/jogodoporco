/*Regras

    Se o dado parar em '1', o jogador perderá seus Pontos Temporários e passará a vez para o próximo. 
    
    Porém, se o dado parar em qualquer outro número, o valor será considerado como Ponto Temporário e o jogador poderá jogar o dado novamente.
    
    Ao passar a vez, o jogador terá seus Pontos Temporários adicionados aos Pontos Totais e passará a vez para o próximo. 
    
    Ganha quem fizer 50 pontos primeiro.

*/

let dice = {
    value: null,
    roll: function () {
        this.value = Math.floor((Math.random() * 6) + 1);
        switch (this.value) {
            case 1:
                document.getElementById("Dice").innerHTML = "<svg width='96px' height='96px' viewBox='0 0 16 16' class='bi bi-dice-1-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'> <path fill-rule='evenodd' d='M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z'/> </svg>";
                break;
            case 2:
                document.getElementById("Dice").innerHTML = "<svg width='96px' height='96px' viewBox='0 0 16 16' class='bi bi-dice-2-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'> <path fill-rule='evenodd' d='M0 3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3zm5.5 1a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' /></svg>";
                break;
            case 3:
                document.getElementById("Dice").innerHTML = "<svg width='96px' height='96px' viewBox='0 0 16 16' class='bi bi-dice-3-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'> <path fill-rule='evenodd' d='M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' /> </svg>";
                break;
            case 4:
                document.getElementById("Dice").innerHTML = "<svg width='96px' height='96px' viewBox='0 0 16 16' class='bi bi-dice-4-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'> <path fill-rule='evenodd' d='M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm1 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm8 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM4 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' /> </svg>";
                break;
            case 5:
                document.getElementById("Dice").innerHTML = "<svg width='96px' height='96px' viewBox='0 0 16 16' class='bi bi-dice-5-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'> <path fill-rule='evenodd' d='M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' /> </svg>";
                break;
            case 6:
                document.getElementById("Dice").innerHTML = "<svg width='96px' height='96px' viewBox='0 0 16 16' class='bi bi-dice-6-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'> <path fill-rule='evenodd' d='M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm1 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm8 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM12 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM4 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' /> </svg>";
                break;
        }
        console.log(this.value);
    },
}

let player1 = {

    TemporaryPoints: 0,

    TotalPoints: 0,

    rollDice: function () {
        dice.roll();
        game.processValue();
    },

    pass: function () {
        this.TotalPoints += this.TemporaryPoints;
        this.addTotalPoints();

        if (this.TotalPoints >= 50) {
            alert('O Jogador 1 ganhou! Parabéns!');
            game.restart();
        } else {
            this.TemporaryPoints = 0;
            this.removeTemporaryPoints();

            game.alternatePlayer();
        }
    },

    addTemporaryPoints: function () {
        document.getElementById("player1TemporaryPoints").textContent = this.TemporaryPoints;
    },

    removeTemporaryPoints: function () {
        document.getElementById("player1TemporaryPoints").textContent = 0;
    },

    addTotalPoints: function () {
        document.getElementById("player1TotalPoints").textContent = this.TotalPoints;
    },

}

let player2 = {

    TemporaryPoints: 0,

    TotalPoints: 0,

    rollDice: function () {
        dice.roll();
        game.processValue();
    },

    pass: function () {
        this.TotalPoints += this.TemporaryPoints;
        this.addTotalPoints();

        if (this.TotalPoints >= 50) {
            alert('O Jogador 2 ganhou! Parabéns!');
            game.restart();
        } else {
            this.TemporaryPoints = 0;
            this.removeTemporaryPoints();

            game.alternatePlayer();
        }
    },

    addTemporaryPoints: function () {
        document.getElementById("player2TemporaryPoints").textContent = this.TemporaryPoints;
    },

    removeTemporaryPoints: function () {
        document.getElementById("player2TemporaryPoints").textContent = 0;
    },

    addTotalPoints: function () {
        document.getElementById("player2TotalPoints").textContent = this.TotalPoints;
    },
}

let game = {

    players: [player1, player2],
    idActualPlayer: 0,

    actualPlayer: function () {
        return this.players[this.idActualPlayer];
    },

    processValue: function () {
        if (dice.value == 1) {
            this.actualPlayer().TemporaryPoints = 0;
            this.actualPlayer().removeTemporaryPoints();

            this.alternatePlayer();
        } else {
            this.actualPlayer().TemporaryPoints += dice.value;
            this.actualPlayer().addTemporaryPoints();
        }
    },

    alternatePlayer: function () {
        switch (this.actualPlayer()) {
            case player1:
                this.idActualPlayer = 1;
                document.getElementById("player1").classList.remove('player-active');
                document.getElementById("player1").classList.add('player-inactive');
                document.getElementById("player2").classList.remove('player-inactive');
                document.getElementById("player2").classList.add('player-active');
                break;
            case player2:
                this.idActualPlayer = 0;
                document.getElementById("player2").classList.remove('player-active');
                document.getElementById("player2").classList.add('player-inactive');
                document.getElementById("player1").classList.remove('player-inactive');
                document.getElementById("player1").classList.add('player-active');
                break;
        }
    },

    restart: function () {
        location.reload();
    }
}

