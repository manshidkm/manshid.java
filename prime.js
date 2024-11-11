let num = 29;
let isprime =true;
for (let i = 2; i <= Math.sqrt(num); i++){
    if (num % i === 0) {
        isprime = false;
        break;
    }
}
if (num <=1){
    is prime = false;
}
console.log(is prime ? num : num);
