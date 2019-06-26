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
        currentGame = new Game();
        playingDeck = new Deck();   
        rules = new HouseRules();           
        this.emptyHands();
        this.shuffleDeck();

        // currentGame.players.push(new Player());
        let randName1 = opponentsArray[Math.floor(Math.random() * opponentsArray.length)];
        let randName2 = opponentsArray[Math.floor(Math.random() * opponentsArray.length)];
        let randmoney1 = (Math.floor(Math.random() * 2000) + 500)
        let randmoney2 = (Math.floor(Math.random() * 2000) + 500)
        currentGame.players.push(new Player(name, money));
        currentGame.players.push(new Player(randName1, randmoney1));
        currentGame.players.push(new Player(randName2, randmoney2));

        
        // Player 1
        player1.hole[0] = (playingDeck.deckShuffled.shift());
        player1.hole[1] = (playingDeck.deckShuffled.shift());
        $('#p1').html('<img src="' + player1.hole[0].image + '" alt="">');
        $('#p1').append('<img src="' + player1.hole[1].image + '" alt="">');

        // Player 2
        player2.hole[0] = (playingDeck.deckShuffled.shift());
        player2.hole[1] = (playingDeck.deckShuffled.shift());
        $('#p2').append('<img src="assets/small/back.png" alt="">');
        $('#p2').append('<img src="assets/small/back.png" alt="">');

        // Player 3
        player3.hole[0] = (playingDeck.deckShuffled.shift());
        player3.hole[1] = (playingDeck.deckShuffled.shift());
        $('#p3').append('<img src="assets/small/back.png" alt="">');
        $('#p3').append('<img src="assets/small/back.png" alt="">');
    }

    emptyHands(){
        $('#p1').empty();
        $('#p2').empty();
        $('#p3').empty();
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
            $(`#cc${i+1}`)[0].childNodes[0].src = `${oneCard.image}`;
            // $(`#cc${i+1}`).append('<img src="' + oneCard.image + '" alt="">');
            // $(`#cc${i+1}`)[0].childNodes[0].removeAttr('src').replaceWith('<img src="' + oneCard.image + '" alt="">');
        })
    }

    theShowDown(){
        console.log("The Showdownnn!");
    }

    addToPot(){

    }

    distributeWinningPot(){

    }




    // Checking the logic
    checkHand(){
        let temp = undefined;
        
        if(temp === undefined){
            console.log("Full House...");
            temp = rules.fullHouse(player1);
            console.log(temp);
        }
        if(temp === undefined){
            console.log("Four of a Kind...");
            temp = rules.fourOfAKind(player1);
            console.log(temp);
        }
        if(temp === undefined){
            console.log("Flush...");
            temp = rules.flush(player1);
            console.log(temp);
        }
        // if(temp === undefined){
        // //     console.log("Straight...");
        // //     temp = rules.threeOfAKind(player1);
        // // console.log(temp);
        // // }
        if(temp === undefined){
            console.log("Three of a Kind...");
            temp = rules.threeOfAKind(player1);
            console.log(temp);
        }
        if(temp === undefined){
            console.log("Two Pairs...");
            temp = rules.twoPairs(player1);
            console.log(temp);
        }
        if(temp === undefined){
            console.log("One Pair...")
            temp = rules.onePair(player1);    
            console.log(temp);
        }
        if(temp === undefined){
            console.log("High Card");
            temp = rules.highCard(player1);
            console.log(temp);
        }
        switch(temp.title){
            case "Full House":
                console.log("Setting the Full House");
                player1.highhand = temp;
                break;
            case "Four of a Kind":
                console.log("Setting the Four of a Kind");
                player1.highhand = temp;
                break;
            case "Flush":
                console.log("Setting the Flush");
                player1.highhand = temp;
                break;
            case "Three of a Kind":
                console.log("Setting the Three of a Kind");
                player1.highhand = temp;
                break;
            case "Two Pairs":
                console.log("Setting the Two Pairs");
                player1.highhand = temp;
                break;
            case "One Pair":
                console.log("Setting the One Pair");
                player1.highhand = temp;
                break;
            case "High Card":
                console.log("High Hand");
                player1.highhand = temp;
                break;
        }        
    }
}