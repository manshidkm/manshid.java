let start = 1;  
let end = 20;   
let evenCount = 0;
for (let i = start; i <= end; i++) {
    
    if (i % 2 === 0) {
        evenCount++; 
    }
}
console.log("Number of even numbers in the range:", evenCount);