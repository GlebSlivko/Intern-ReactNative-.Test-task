// Task 2.Secretary Jimny

// In this task, it should be noted that the first second will always go to make 1 copy of the original
// Example: Under the condition N = 5 x = 1; y = 2, the algorithm will proceed as follows:
// 1 second - 1 copy
// 2 second - 2 copies (1 on x)
// 3 second - 4 copies (1 on x, 1 on y)
// 4 second - 5 copies (1 per x) 

function minimumTime(N, x, y) {
    // We initialize the variable result = 0. We will return it as follows:
    // Initialize the variable сopies = 0. We will increase it
    let result = 0; 
    let copies = 0; 

    // The operation Math.min allows you to write a variable to the smaller of the numbers
    const min = Math.min(x, y);

    // here we immediately added the print time of the first copy to the result
    result += min;

    // Initially, we have the original
    copies++;

    // Next, increase the number of copies using the form loop. It works as long as the condition is satisfied (i <N * min)
    // This condition is necessary in order to link the counter to the total operating time of the fastest printer at this stage, only it matters to us

    // Next, use "division without remainder"
    // Suppose the first printer prints one copy in 3 seconds. then I have to add +1 to the copy counter every 3 seconds
    // Suppose the second prints a copy in 5 seconds, then every 5 seconds another +1 to the same counter
    // If second is divided by "x" without remainder - then we have a copy and we do +1, and if second is divided by "y" without remainder - another +1
    // If there are more copies than necessary or equal to the required number, we stop the cycle
    for(let i = 1; i < N * min; i++) {   
        if( i % x === 0) {
            copies++;
        }

        if( i % y === 0) {
            copies++;
        }

        if(copies >= N) {
            result += i;
            break;
        }
    }

    return result;
}

console.log(minimumTime(8, 4, 6));

