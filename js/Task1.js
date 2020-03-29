// Task 1.Candies

function totalOptions1(x, y, z, w) {
    // At first, initialize the variable with a zero value (the number of successful combinations)
    let result = 0; 

    // Initialize variables for the number of gifts of different types
    let xCount, yCount, zCount; 

    // increase the number of units in the cycle
    // the condition denote the maximum upper bound 
    // after which we stop checking (xCount <= w / x, yCount <= w / y, zCount <= w / z)
    // Summarize the number of gifts multiplied by their weight and compare with the input value W
    // If the condition is met, the result grows
    for(xCount = 0; xCount <= w/x; xCount++) {      
      for(yCount = 0; yCount <= w/y; yCount++) {  
        for(zCount = 0; zCount <= w/z; zCount++) {  
          if(xCount * x + yCount * y + zCount * z === w) { 
                    result++; 
                }
            }
        }
    }

    return result; 
}

console.log(totalOptions1(10,25,15,40));

// After writing the function, I noticed that when I test a function with large numbers, it works very slowly
// so in the next solution I made the optimization by changing the condition.
// If in the first option we increase the number of gifts, then now we do the same but using weight
// Now the condition is as follows: (yCount <= w - xCount; zCount <= w - yCount - xCount)
// The calculation speed has increased due to the fact that we cut off unnecessary iterations in two nested loops

// For clarity of what happens in each cycle, I leave the console log

function totalOptions(x, y, z, w) {
    let result = 0;

    const start = Date.now();

    let xCount, yCount, zCount;
    for(xCount = 0; xCount <= w; xCount += x) {
        // console.log("for 1: xCount=" + xCount);
      for(yCount = 0; yCount <= w - xCount; yCount += y) {
        // console.log("----for 2: yCount=" + yCount);
            for(zCount = 0; zCount <= w - yCount - xCount; zCount += z) {
            // console.log("--------for 3: zCount=" + zCount);
                if(xCount + yCount + zCount === w) {
                // console.log("xCount:",xCount, "+","yCount:",yCount,"+","zCount",zCount);
                    result++;
                } 
            }
        }
    }

    console.log("time: " + (Date.now() - start));

    return result;
}

console.log(totalOptions(10,25,15,40));








