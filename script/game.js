
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


    generatePlayersHand(name, money){
        // currentGame = new Game();
        playingDeck = new Deck();   
        rules = new HouseRules();           
        // this.emptyHands();
        this.shuffleDeck();

        // currentGame.players.push(new Player());
    }

    emptyHands(){
        $('#p1').empty();
        $('#p2').empty();
        $('#p3').empty();
        $('#cc1 > img').prop('src', '');
        $('#cc2 > img').prop('src', '');
        $('#cc3 > img').prop('src', '');
        $('#cc4 > img').prop('src', '');
        $('#cc5 > img').prop('src', '');
        this.players[0].hole = [];
        this.players[0].highHand = [];
        this.players[1].hole = [];
        this.players[1].highHand = [];
        this.players[2].hole = [];
        this.players[2].highHand = [];
        this.communityCards = [];
    }

    // Debating wheather to place this method in houserules or game but i think its part of the game that will check the houserules    
   
    TESTFLUSH(){
        // currentGame.communityCards[0] = (playingDeck.deckShuffled.shift());
        // currentGame.communityCards[1] = (playingDeck.deckShuffled.shift());
        // currentGame.communityCards[2] = (playingDeck.deckShuffled.shift());
        // currentGame.communityCards[3] = (playingDeck.deckShuffled.shift());
        // currentGame.communityCards[4] = (playingDeck.deckShuffled.shift());
        // this.appendAll();

        $('#cc1').append('<img src="assets/small/cz2.png" alt="">');
        $('#cc2').append('<img src="assets/small/cz9.png" alt="">');
        $('#cc3').append('<img src="assets/small/cz3.png" alt="">');
        $('#cc4').append('<img src="assets/small/cz8.png" alt="">');
        $('#cc5').append('<img src="assets/small/cza.png" alt="">');

        currentGame.communityCards[0] = (cards[0]);
        currentGame.communityCards[1] = (cards[7]);
        currentGame.communityCards[2] = (cards[1]);
        currentGame.communityCards[3] = (cards[6]);
        currentGame.communityCards[4] = (cards[12]);


    }
    TESTFOUROFAKIND(){

        $('#cc1').append('<img src="assets/small/cz2.png" alt="">');
        $('#cc2').append('<img src="assets/small/cz2.png" alt="">');
        $('#cc3').append('<img src="assets/small/cz2.png" alt="">');
        $('#cc4').append('<img src="assets/small/cz8.png" alt="">');
        $('#cc5').append('<img src="assets/small/cza.png" alt="">');

        currentGame.communityCards[0] = (cards[0]);
        currentGame.communityCards[1] = (cards[0]);
        currentGame.communityCards[2] = (cards[0]);
        currentGame.communityCards[3] = (cards[6]);
        currentGame.communityCards[4] = (cards[12]);


    }

    TESTFULLHOUSE(){

        $('#cc1').append('<img src="assets/small/cz2.png" alt="">');
        $('#cc2').append('<img src="assets/small/cz2.png" alt="">');
        $('#cc3').append('<img src="assets/small/cz8.png" alt="">');
        $('#cc4').append('<img src="assets/small/cz8.png" alt="">');
        $('#cc5').append('<img src="assets/small/cza.png" alt="">');

        currentGame.communityCards[0] = (cards[0]);
        currentGame.communityCards[1] = (cards[0]);
        currentGame.communityCards[2] = (cards[6]);
        currentGame.communityCards[3] = (cards[6]);
        currentGame.communityCards[4] = (cards[12]);


    }



    flop(){
        currentGame.communityCards[0] = (playingDeck.deckShuffled.shift());
        currentGame.communityCards[1] = (playingDeck.deckShuffled.shift());
        currentGame.communityCards[2] = (playingDeck.deckShuffled.shift());
        this.appendAll();
    }
        // Dont forget to burn a card at the end, probably splice? .unshift
    
    
    theTurn(){
        currentGame.communityCards[3] = (playingDeck.deckShuffled.shift());
        this.appendAll()
    }
    
    theRiver(){
        currentGame.communityCards[4] = (playingDeck.deckShuffled.shift());
        this.appendAll()
    }

    appendAll(){
        currentGame.communityCards.forEach((oneCard, i) => {
            console.log("--------------------------------- ", $(`#cc${i+1}`)[0].childNodes[0])
            $(`#cc${i+1}`)[0].childNodes[0].src = `${oneCard.image}`;
            // $(`#cc${i+1}`).append('<img src="' + oneCard.image + '" alt="">');
            // $(`#cc${i+1}`)[0].childNodes[0].removeAttr('src').replaceWith('<img src="' + oneCard.image + '" alt="">');
        })
    }

    theShowDown(){
        currentGame.revealAllCards();
    }

    revealAllCards(){
        let p2c1 = currentGame.players[1].hole[0].image;
        let p2c2 = currentGame.players[1].hole[1].image;
        let p3c1 = currentGame.players[2].hole[0].image;
        let p3c2 = currentGame.players[2].hole[1].image;

        $('#p2').html('');
        $('#p2').html('');

        $('#p2').html('<img src=' + p2c1 + ' alt="">');
        $('#p2').append('<img src=' + p2c2 + ' alt="">');
        $('#p3').html('<img src=' + p3c1 + ' alt="">');
        $('#p3').append('<img src=' + p3c2 + ' alt="">');
    }

    addToPot(){

    }

    distributeWinningPot(){

    }




    // Checking the logic
    checkHand(player){
        let temp = undefined;
        
        if(temp === undefined){
            console.log("Full House...");
            temp = rules.fullHouse(player);
            console.log(temp);
        }
        if(temp === undefined){
            console.log("Four of a Kind...");
            temp = rules.fourOfAKind(player);
            console.log(temp);
        }
        if(temp === undefined){
            console.log("Flush...");
            temp = rules.flush(player);
            console.log(temp);
        }
        // if(temp === undefined){
        // //     console.log("Straight...");
        // //     temp = rules.threeOfAKind(currentGame.players[0]);
        // // console.log(temp);
        // // }
        if(temp === undefined){
            console.log("Three of a Kind...");
            temp = rules.threeOfAKind(player);
            console.log(temp);
        }
        if(temp === undefined){
            console.log("Two Pairs...");
            temp = rules.twoPairs(player);
            console.log(temp);
        }
        if(temp === undefined){
            console.log("One Pair...")
            temp = rules.onePair(player);    
            console.log(temp);
        }
        if(temp === undefined){
            console.log("High Card");
            temp = rules.highCard(player);
            console.log(temp);
        }
        switch(temp.title){
            case "Full House":
                console.log("Setting the Full House");
                player.highCard = temp;
                break;
            case "Four of a Kind":
                console.log("Setting the Four of a Kind");
                player.highCard = temp;
                break;
            case "Flush":
                console.log("Setting the Flush");
                player.highCardd = temp;
                break;
            case "Three of a Kind":
                console.log("Setting the Three of a Kind");
                player.highCard = temp;
                break;
            case "Two Pairs":
                console.log("Setting the Two Pairs");
                player.highCard = temp;
                break;
            case "One Pair":
                console.log("Setting the One Pair");
                player.highCard = temp;
                break;
            case "High Card":
                console.log("High Hand");
                player.highCard = temp;
                break;
        }        
    }
}
