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

    threeOfAKind(){

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
                // If less than 2 go ahead and push it
                if(numOfPairs < 2){                   
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
                // If there are 2 we need to check to see which is the lowest pair remove and replace it. 
                else if(card1 > currentLowestValue && numOfPairs == 2){
                    console.log("==================" + card1 + "-----------" + currentGame.communityCards[i].value);
                    let lowestIndex;
                    highestTwoPair.forEach((card, index) =>{
                        if(card.value < lowest){
                            console.log("Checking lowest " + card1 + " -------- " + currentLowestValue);
                            lowestIndex = index;
                        }
                    })
                    console.log(highestTwoPair);
                    highestTwoPair[lowestIndex - 1] = player.hole[0];
                    highestTwoPair[lowestIndex] = currentGame.communityCards[i];
                    numOfPairs++;                  
                }
            }
            if(card2 === currentGame.communityCards[i].value){
                console.log("Checking 2")
                // If less than 2 go ahead and push it
                if(numOfPairs < 2){                   
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
                // If there are 2 we need to check to see which is the lowest pair remove and replace it. 
                else if(card2 > currentLowestValue && numOfPairs == 2){
                    console.log("==================" + card2 + "-----------" + currentGame.communityCards[i].value);
                    let lowestIndex;
                    highestTwoPair.forEach((card, index) =>{
                        if(card.value < lowest){
                            console.log("Checking lowest " + card2 + " -------- " + currentLowestValue);
                            lowestIndex = index;
                        }
                    });
                    highestTwoPair[lowestIndex - 1] = player.hole[1];
                    highestTwoPair[lowestIndex] = currentGame.communityCards[i];
                    numOfPairs++;  
                    console.log(highestTwoPair);                
                }
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
