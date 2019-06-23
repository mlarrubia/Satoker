console.log("Deck loaded");
class Deck{
    constructor(){
        // this.deck =[
        //     {suit: ["Mcafee", "CZ", "Vitalik", "Justin Sun"]},
        //     {rank:["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]},
        //     {McAfee: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]},
        //     {CZ: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]},
        //     {Vitalik: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]},
        //     {"Justin Sun": ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]}
        // ];
        this.deckShuffled = [];
        this.RANKS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
        this.SUITS = ["Mcafee", "CZ", "Vitalik", "Justin Sun"];
        
        this.testDeck = [
                'images/small1.png',
                'images/small2.png',
                'images/small3.png',            
        ];
       
    }

    shuffleDeck(){
        return this.SUITS.forEach((suit) =>{
            for(let i = 0; i < this.RANKS.length; i++){
                console.log();
                this.deckShuffled.push({suit: suit, rank: this.RANKS[i]});
            }
        });
    }

    dealCard(){
        let randIndex = Math.floor(Math.random() * this.deckShuffled.length);
        return this.deckShuffled.splice(randIndex, 1);
    }

    // To delete
    testShuffle(){
        let randIndex = Math.floor(Math.random() * this.testDeck.length);
        // console.log(randIndex);
        // console.log(playingDeck.testDeck[randIndex])
        return playingDeck.testDeck[randIndex];
    }

    collectHands(){

    }

    

}