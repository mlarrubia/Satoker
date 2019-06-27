class Player{
    constructor(playerName, money){
        // Object of 2 cards, your hand
        this.hole = [];
        // Crpto to be implemented
        this.money = money;
        this.highhand = [];
        this.name = playerName;
    }

    newHand(){
        this.hole.push(playingDeck.dealCard());
        this.hole.push(playingDeck.dealCard());
    }

    // AIstrategicDecision(){
    //    if(dealButtonVariable === 0){
    //        let randNum = Math.floor(Math.random() * 100);
    //        if(randNum <= 10){
    //            this.fold();
    //        }
    //        else{
    //            this.money -= 100;
    //            currentGame.pot += 100;
    //            $('#inputAmount').text("$" + this.money);
    //        }
    //    }
    // }

    
    fold(){
        this.hole = [];
        this.highHand = [];
    }

    check(){

    }

    call(){

    }

    raise(){

    }

    showDown(){
        // Reveal cards
    }

}
