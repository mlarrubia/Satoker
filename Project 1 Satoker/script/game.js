
class Game{
    constructor(){
        this.players = [];
        this.pot = 0;
        this.communityCards = [];
    }

    generatePlayers(){

    }

    flop(){
        this.communityCards.push(playingDeck.dealCard());
        this.communityCards.push(playingDeck.dealCard());
        this.communityCards.push(playingDeck.dealCard());
        // Dont forget to burn a card at the end, probably splice?
    }
    
    theTurn(){
        this.communityCards.push(playingDeck.dealCard());       
        // Dont forget to burn a card at the end, probably splice?
    }
    
    theRiver(){
        this.communityCards.push(playingDeck.dealCard());
        // Dont forget to burn a card at the end, probably splice?
    }

    theShowDown(){
        // Players reveal cards
    }

    addToPot(){

    }

    distributeWinningPot(){

    }
}