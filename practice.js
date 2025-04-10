let arr = new Array(5); // Define an array of size 5

console.log("Initial length of array:", arr.length); // Now it will print 5

// Taking input from the user
for (let j = 0; j < arr.length; j++) {
    arr[j] = Number(prompt(`Enter element ${j + 1}:`));
}

let gtr = arr[0]; // Assume the first element is the greatest

// Finding the greatest number
for (let i = 1; i < arr.length; i++) {  
    if (gtr < arr[i]) {
        gtr = arr[i]; // Update if a greater number is found
    }
}

console.log("Greatest number is: " + gtr);
