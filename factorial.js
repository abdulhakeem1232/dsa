// function factorial(n){
//     let res=1
//     for(i=2;i<=n;i++){
//     res*=i
//     }
//     return res
// }

function factorial(n){
    if(n<2)
    return 1
return n*factorial(n-1)
}

// function test(n){
//     if(n<=1)
//     return
// factorial(n-1)
// console.log(n);
// factorial(n-1)
// }

function sum_of_digits(num){
    if(num==0){
        return 0
    }
    n=Math.floor(num/10)
    return num %10 +sum_of_digits(n)
}


console.log(sum_of_digits(123456789));
console.log(factorial(4));
console.log(factorial(5));