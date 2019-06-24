console.log("Game loaded");
class Game{
    constructor(){
        this.players = [];
        this.pot = 0;
        this.communityCards = [];
    }

    // Not sure if it works. Tried using splice to remove from copyDeck but error persist.
    shuffleDeck(){
        let temp = [];
        for(let i = 0; i < cards.length; i++){
            let copyDeck = {...cards};
            let randIndex = Math.floor(Math.random() * (52 - i)); 
            playingDeck.deckShuffled.push(copyDeck[randIndex]);
        }        
    }


    generatePlayersHand(){
        console.log("Generatign players hand...")
        this.emptyHands();
        this.shuffleDeck();
        
        // Player 1
        player1.hole[0] = (playingDeck.deckShuffled.shift());
        player1.hole[1] = (playingDeck.deckShuffled.shift());
        $('#p1').append('<img src="' + player1.hole[0].image + '" alt="">');
        $('#p1').append('<img src="' + player1.hole[1].image + '" alt="">');

        // Player 2
        player2.hole[0] = (playingDeck.deckShuffled.shift());
        player2.hole[1] = (playingDeck.deckShuffled.shift());
        $('#p2').append('<img src="' + player2.hole[0].image + '" alt="">');
        $('#p2').append('<img src="' + player2.hole[1].image + '" alt="">');

        // Player 3
        player3.hole[0] = (playingDeck.deckShuffled.shift());
        player3.hole[1] = (playingDeck.deckShuffled.shift());
        $('#p3').append('<img src="' + player3.hole[0].image + '" alt="">');
        $('#p3').append('<img src="' + player3.hole[1].image + '" alt="">');
    }

    emptyHands(){
        $('#p1').empty();
        $('#p2').empty();
        $('#p3').empty();
    }

    // Debating wheather to place this method in houserules or game but i think its part of the game that will check the houserules    
    checkHand(player){
        
        if(currentGame.royalFlush()){
            console.log("works");
        }
    }

    flop(){
        console.log("---------------------- ", currentGame.communityCards)
        currentGame.communityCards[0] = (playingDeck.deckShuffled.shift());
        currentGame.communityCards[1] = (playingDeck.deckShuffled.shift());
        currentGame.communityCards[2] = (playingDeck.deckShuffled.shift());
        this.appendAll()
    }
        // Dont forget to burn a card at the end, probably splice? .unshift
    
    
    theTurn(){
        console.log("===================== ", currentGame.communityCards)
        currentGame.communityCards[3] = (playingDeck.deckShuffled.shift());
        this.appendAll()
    }
    
    theRiver(){
        console.log(">>>>>>>>>>>>>>>>>>> ", currentGame.communityCards)
        currentGame.communityCards[4] = (playingDeck.deckShuffled.shift());
        this.appendAll()
    }

    appendAll(){
        currentGame.communityCards.forEach((oneCard, i) => {
            console.log("<><><><<><><><><>><><>><><>><   ",$(`#cc${i+1}`));
            console.log("<><><><<><><><><>><><>><><>><   ",$(`#cc${i+1}`)[0].childNodes[0]);
            $(`#cc${i+1}`)[0].childNodes[0].src = `${oneCard.image}`;
            // $(`#cc${i+1}`).append('<img src="' + oneCard.image + '" alt="">');
            // $(`#cc${i+1}`)[0].childNodes[0].removeAttr('src').replaceWith('<img src="' + oneCard.image + '" alt="">');
        })
    }

    theShowDown(){
        // Players reveal cards
    }

    addToPot(){

    }

    distributeWinningPot(){

    }
}