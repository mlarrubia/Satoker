class Player{
    constructor(){
        // Object of 2 cards
        this.hand = [];
        // Crpto to be implemented
        this.money = 0;
    }

    newHand(){
        this.hand.push(playingDeck.dealCard());
        this.hand.push(playingDeck.dealCard());
    }

    strategicDecision(){
        // Create Probablility for fold, check, call, raise, allin 
        // if(){

        // }
        // else if(){

        // }
    }
    
    fold(){
        this.hand = [];
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