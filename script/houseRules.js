class HouseRules{
    
    royalFlush(player){

    }

    straightFlush(player){

    }

    fourOfAKind(player){
        let card1 = player.hole[0].value;
        let card2 = player.hole[1].value;
        let fourOfKindArray1 = [];
        let fourOfKindArray2 = [];
        fourOfKindArray1.unshift(player.hole[0]);
        fourOfKindArray2.unshift(player.hole[1]);
        let numOfKind1 = 1;
        let numOfKind2 = 1;

        if(card1 === card2){
            // console.log("Hole Pair-----" + card1 + " and " + card2);
            fourOfKindArray1.push(player.hole[0]);
            fourOfKindArray2.push(player.hole[1]);
            numOfKind1++;
            numOfKind2++;
        }
        currentGame.communityCards.forEach((card) =>{
            if(card.value === card1){
                // console.log(card.value + " and " + card1);
                fourOfKindArray1.push(card);
                numOfKind1++;
            }
            if(card.value === card2){
                // console.log(card.value + " and " + card2);
                fourOfKindArray2.push(card);
                numOfKind2++;
            }
        });

        if(numOfKind1 === 4 && numOfKind2 === 4){
            if(card1 > card2){
                return {
                    title: "Four of a Kind",
                    card: fourOfKindArray1
                }
            }    
            else{
                return {
                    title: "Four of a Kind",
                    card: fourOfKindArray2
                }
            }        

        }
        else if(numOfKind1 === 4){
            // console.log("returning card 1 four of a kind")
            return {
                title: "Four of a Kind",
                card: fourOfKindArray1
            }
        }
        else if(numOfKind2 === 4){
            // console.log("returning card 2 four of a kind")
            return {
                title: "Four of a Kind",
                card: fourOfKindArray2
            }
        }
        else{
            // console.log("Reterning undefined")
            return undefined;
        }
    }

    // Works but needs to fix the data structure. RN it returns three of a kind an onepair titles
    fullHouse(player){
        let isThreeOfAKind = false;
        let isPair = false;
        let fullHouseArray = [];

        if(this.threeOfAKind(player) !== undefined){
            fullHouseArray.push(this.threeOfAKind(player));
            isThreeOfAKind = true;
        }
        if(this.onePair(player) !== undefined){
            fullHouseArray.push(this.onePair(player));
            isPair = true;
        }

        if(isPair === true && isThreeOfAKind === true){
            return {
                title: "Full House",
                card: fullHouseArray
            }
        }
        else{
            return undefined;
        }

        
    }

    flush(player){
        let flushArray = [];
        let cardArray = [];
        let cz = 0;
        let sun = 0;
        let mcafee = 0;
        let vitalik = 0;
        let flushSuit;
        let isFlushSuit = false;


        // Push all hole cards for player into cardArray
        cardArray.push(player.hole[0]);
        cardArray.push(player.hole[1]);

        // Push all community cards to cardArray
        currentGame.communityCards.forEach((card) =>{
                cardArray.push(card);
        });
        
        // Counts up all the Suits
        cardArray.forEach((each) =>{
            if(each.suit === "cz"){
                return cz++;
            }
            else if(each.suit === "sun"){
                sun++;
            }
            else if(each.suit === "mcafee"){
                mcafee++;
            }
            else if(each.suit === "vitalik"){
                vitalik++;
            }
        });
        
            
        // Checks cardArray for a Flush.
        if(cz >= 5){
            flushSuit = "cz";
            isFlushSuit = true;
        }
        else if(sun >= 5){            
            flushSuit = "sun";
            isFlushSuit = true;
        }
        else if(mcafee >= 5){
            flushSuit = "mcafee";
            isFlushSuit = true;            
        }
        else if(vitalik >= 5){
            flushSuit = "vitalik";
            isFlushSuit = true;            
        }

        // If there is a flush we return all card objects to FlushArray
        flushArray = cardArray.filter((each) =>{
            if(each.suit === flushSuit){
                return each;
            }
        });
        
        if(isFlushSuit){;
            return {
                title: "Flush",
                card: flushArray
            }
        }
        else{
            return undefined;
        }

    }


    // straight(player){
    //     let card1 = player.hole[0].value;
    //     let card2 = player.hole[1].value;

    //     currentGame.communityCards.forEach((card) =>{
    //         cardArray.push(card);
    // });
    // }

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
            // console.log("Hole Pair-----" + card1 + " and " + card2);
            // I dont think i need this since i unshift threeofkindarry 
            // threeOfKindArray1.push(card);
            // threeOfKindArray2.push(card);
            numOfKind1++;
            numOfKind2++;
        }
        currentGame.communityCards.forEach((card) =>{
            if(card.value === card1){
                // console.log(card.value + " and " + card1);
                threeOfKindArray1.push(card);
                numOfKind1++;
            }
            if(card.value === card2){
                // console.log(card.value + " and " + card2);
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
            // console.log("returning card 1 three of a kind")
            return {
                title: "Three of a Kind",
                card: threeOfKindArray1
            }
        }
        else if(numOfKind2 === 3){
            // console.log("returning card 2 three of a kind")
            return {
                title: "Three of a Kind",
                card: threeOfKindArray2
            }
        }
        else{
            // console.log("Reterning undefined")
            return undefined;
        }


        
    }

    // Glitchy when you have a hole card with 2 community cards the same. Counts as if its 2 different pairs
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
                // console.log("Checking 1")                 
                    // console.log("==================" + card1 + "-----------" + currentGame.communityCards[i].value);
                    highestTwoPair.push(player.hole[0]);
                    highestTwoPair.push(currentGame.communityCards[i]);  
                    if(card1 < currentLowestValue){
                        // console.log("Checking lowest " + card1 + " -------- " + currentLowestValue);
                        currentLowestValue = card1;
                    }             
                    numOfPairs++;     
                    // console.log(highestTwoPair);              
            }
            if(card2 === currentGame.communityCards[i].value){
                // console.log("Checking 2");                
                    // console.log("==================" + card2 + "-----------" + currentGame.communityCards[i].value);
                    highestTwoPair.push(player.hole[1]);
                    highestTwoPair.push(currentGame.communityCards[i]);  
                    if(card2 < currentLowestValue){
                        // console.log("Checking lowest " + card2 + " -------- " + currentLowestValue);
                        currentLowestValue = card2;
                    }         
                    // console.log(highestTwoPair);    
                    numOfPairs++;     
                
            }

        }
                if(numOfPairs == 2){
                    // console.log("Two Pairs return object :)");
                    return {
                        title: "Two Pairs",
                        card: highestTwoPair
                    }
    
                }
                else{
                    // will return undefined
                    // console.log("Two Pairs return undefined: numOfPairs " + numOfPairs + "-------- Objects: " + highestTwoPair);
                    return undefined;
                }
    }


    onePair(player){
        let card1 = player.hole[0].value;
        let card2 = player.hole[1].value;
        let currentHighestValue = 0;
        let highestPair = [];
        if(card1 === card2){
            // console.log("==================" + card1 + "-----------" + card2);
           highestPair.push(player.hole[0]);
           highestPair.push(player.hole[1]);

        }

        for(let i = 0; i < currentGame.communityCards.length; i++){
            if(card1 === currentGame.communityCards[i].value){
                // console.log("Checking 1");
                if(card1 > currentHighestValue){
                    // console.log("==================" + card1 + "-----------" + currentGame.communityCards[i].value);
                    currentHighestValue = card1;
                    highestPair = [];
                    highestPair.push(player.hole[0]);
                    highestPair.push(currentGame.communityCards[i]);                    
                }
            }
            if(card2 === currentGame.communityCards[i].value){
                // console.log("Checking 2");
                if(card2 > currentHighestValue){
                    // console.log("==================" + card2 + "-----------" +  currentGame.communityCards[i].value);
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
