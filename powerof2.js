// function powerOfTwo(n){
//     if(n<1)
//     return false
// while(n>1){
//     if(n%2 !=0){
//         return false
//     }
//     n=n/2
// }
// return true
// }

function powerOfTwo(n){
    if(n<1)
    return false

    if(n==1)
    return true
if(n%2==0)
return powerOfTwo(n/2)
else
return false
}

console.log(powerOfTwo(6));
console.log(powerOfTwo(8));
console.log(powerOfTwo(10));
console.log(powerOfTwo(12));