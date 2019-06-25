class HouseRules{
    constructor(){
        this.name = "Matt";
    }


    royalFlush(){
        return true;
    }

    straightFlush(){

    }

    fourOfAKind(){

    }

    fullHouse(){

    }

    flush(){

    }

    straight(){

    }

    threeOfAKind(player){
        let card1 = player.hole[0].value;
        let card2 = player.hole[1].value;
        let threeOfKindArray1 = [];
        let threeOfKindArray2 = [];
        threeOfKindArray1.unshift(player.hole[0]);
        threeOfKindArray2.unshift(player.hole[1]);
        let numOfKind1 = 1;
        let numOfKind2 = 1;

        if(card1 === card2){
            console.log("Hole Pair-----" + card1 + " and " + card2);
            threeOfKindArray1.push(card);
            threeOfKindArray2.push(card);
            numOfKind1++;
            numOfKind2++;
        }
        currentGame.communityCards.forEach((card) =>{
            if(card.value === card1){
                console.log(card.value + " and " + card1);
                threeOfKindArray1.push(card);
                numOfKind1++;
            }
            if(card.value === card2){
                console.log(card.value + " and " + card2);
                threeOfKindArray2.push(card);
                numOfKind2++;
            }
        });

        if(numOfKind1 === 3 && numOfKind2 === 3){
            if(card1 > card2){
                return {
                    title: "Three of a Kind",
                    card: threeOfKindArray1
                }
            }    
            else{
                return {
                    title: "Three of a Kind",
                    card: threeOfKindArray2
                }
            }        

        }
        else if(numOfKind1 === 3){
            console.log("returning card 1 three of a kind")
            return {
                title: "Three of a Kind",
                card: threeOfKindArray1
            }
        }
        else if(numOfKind2 === 3){
            console.log("returning card 2 three of a kind")
            return {
                title: "Three of a Kind",
                card: threeOfKindArray2
            }
        }
        else{
            console.log("Reterning undefined")
            return undefined;
        }


        
    }

    twoPairs(player){
        let card1 = player.hole[0].value;
        let card2 = player.hole[1].value;
        let highestTwoPair = [];
        let currentLowestValue = 14;
        let numOfPairs = 0;

        if(card1 === card2){
           highestTwoPair.push(player.hole[0]);
           highestTwoPair.push(player.hole[1]);
           currentLowestValue = card1;
           numOfPairs++;
           currentLowestValue = card1;
        }

        for(let i = 0; i < currentGame.communityCards.length; i++){
            if(card1 === currentGame.communityCards[i].value){
                console.log("Checking 1")                 
                    console.log("==================" + card1 + "-----------" + currentGame.communityCards[i].value);
                    highestTwoPair.push(player.hole[0]);
                    highestTwoPair.push(currentGame.communityCards[i]);  
                    if(card1 < currentLowestValue){
                        console.log("Checking lowest " + card1 + " -------- " + currentLowestValue);
                        currentLowestValue = card1;
                    }             
                    numOfPairs++;     
                    console.log(highestTwoPair);              
            }
            if(card2 === currentGame.communityCards[i].value){
                console.log("Checking 2");                
                    console.log("==================" + card2 + "-----------" + currentGame.communityCards[i].value);
                    highestTwoPair.push(player.hole[1]);
                    highestTwoPair.push(currentGame.communityCards[i]);  
                    if(card2 < currentLowestValue){
                        console.log("Checking lowest " + card2 + " -------- " + currentLowestValue);
                        currentLowestValue = card2;
                    }         
                    console.log(highestTwoPair);    
                    numOfPairs++;     
                
            }

        }
                if(numOfPairs == 2){
                    console.log("Two Pairs return object :)");
                    return {
                        title: "Two Pairs",
                        card: highestTwoPair
                    }
    
                }
                else{
                    // will return undefined
                    console.log("Two Pairs return undefined: numOfPairs " + numOfPairs + "-------- Objects: " + highestTwoPair);
                    return undefined;
                }
    }


    onePair(player){
        let card1 = player.hole[0].value;
        let card2 = player.hole[1].value;
        let currentHighestValue = 0;
        let highestPair = [];
        if(card1 === card2){
            console.log("==================" + card1 + "-----------" + card2);
           highestPair.push(player.hole[0]);
           highestPair.push(player.hole[1]);

        }

        for(let i = 0; i < currentGame.communityCards.length; i++){
            if(card1 === currentGame.communityCards[i].value){
                console.log("Checking 1");
                if(card1 > currentHighestValue){
                    console.log("==================" + card1 + "-----------" + currentGame.communityCards[i].value);
                    currentHighestValue = card1;
                    highestPair = [];
                    highestPair.push(player.hole[0]);
                    highestPair.push(currentGame.communityCards[i]);                    
                }
            }
            if(card2 === currentGame.communityCards[i].value){
                console.log("Checking 2");
                if(card2 > currentHighestValue){
                    console.log("==================" + card2 + "-----------" +  currentGame.communityCards[i].value);
                    currentHighestValue = card2;
                    highestPair = [];
                    highestPair.push(player.hole[1]);
                    highestPair.push(currentGame.communityCards[i]);
                }
            }
        }
        if(currentHighestValue > 0){
            return {
                   title: "One Pair",
                   card: highestPair
               }
        }
        else{
            return undefined;
        }

    }

    highCard(player){
        let card1 = player.hole[0].value;
        let card2 = player.hole[1].value;

        if(card1 > card2){
            return {
                title: "High Card",
                card: player.hole[0]
            }
        }
        else if(card2 >= card1){
            return {
                title: "High Card",
                card: player.hole[1]
            }
        }
        else{
            return undefined;
        }

    }
}
