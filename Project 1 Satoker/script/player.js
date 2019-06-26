class Player{
    constructor(playerName){
        // Object of 2 cards, your hand
        this.hole = [];
        // Crpto to be implemented
        this.money = 0;
        this.highhand = [];
        this.name = playerName
    }

    newHand(){
        this.hole.push(playingDeck.dealCard());
        this.hole.push(playingDeck.dealCard());
    }

    strategicDecision(){
       
    }
    
    fold(){
        this.hole = [];
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