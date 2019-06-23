console.log("Game loaded");
class Game{
    constructor(){
        this.players = [];
        this.pot = 0;
        this.communityCards = [];
    }

    generatePlayers(){

    }


    // Debating wheather to place this method in houserules or game but i think its part of the game that will check the houserules    
    checkHand(player){
        
        if(currentGame.royalFlush()){
            console.log("works");
        }
    }

    flop(){
        for(let i = 1; i <= 3; i++){
            let imagefile = playingDeck.testShuffle();
            console.log(imagefile);
            let path = `<img src="${imagefile}" alt="">`;
            console.log(path);
            this.communityCards.push(path);
            $(`'#cc${i}'`).html(path);
        }
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