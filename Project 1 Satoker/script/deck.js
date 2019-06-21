class Deck{
    constructor(){
        this.deck =[
            {suit: ["Mcafee", "CZ", "Vitalik", "Justin Sun"]},
            {rank:["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]},
            {McAfee: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]},
            {CZ: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]},
            {Vitalik: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]},
            {"Justin Sun": ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]}
        ];
        this.deckShuffled = []
        this.RANKS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
        this.SUITS = ["Mcafee", "CZ", "Vitalik", "Justin Sun"];
       
    }

    shuffleDeck(){
        return this.SUITS.forEach((suit) =>{
            for(let i = 0; i < this.RANKS.length; i++){
                this.deckShuffled.push(suit + " " + this.RANKS[i]);
            }
        });
    }

    dealHands(){
        
    }

    collectHands(){

    }


}