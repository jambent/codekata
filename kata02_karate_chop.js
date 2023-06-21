function chop(targetInt,sortedIntArray){
    
    let upperBound = sortedIntArray.length - 1;
    let lowerBound = 0;
    
    let midIndex;
    let midIndexValue;

    while(lowerBound <= upperBound){
        if(lowerBound === upperBound){
            midIndexValue = sortedIntArray[lowerBound];
            if (targetInt === midIndexValue){
                return lowerBound;
            }
            else{
                return -1;
            }
        }
        else{
            midIndex = Math.floor((upperBound - lowerBound) / 2) + lowerBound;
            midIndexValue = sortedIntArray[midIndex];

            if (targetInt === midIndexValue){
                return midIndex;
            }

            else if(targetInt < midIndexValue){
                upperBound = midIndex - 1;   //If we know target is below midIndex, we don't need to even consider midIndex next
            }
        
            else if (targetInt > midIndexValue){
                lowerBound = midIndex + 1;  //If we know target is above midIndex, we don't need to even consider midIndex next
            } 
        }
    }
    return -1;

}

result = chop(-4, [1,3,7,8,9,10]);
console.log(result);
