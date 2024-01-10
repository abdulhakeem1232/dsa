// function fib(n){
//     if(n==1)
//     return 0
//     let fib=[0,1]
//     for(i=2;i<n;i++){
//         fib[i]=fib[i-1]+fib[i-2]
//     }
//     return fib
// }

function fib(n){
    if(n<2)
    return n
return fib(n-1)+fib(n-2)
}



console.log('1',fib(1))
console.log('2',fib(2))

console.log('5',fib(5))
console.log('7',fib(7))
console.log('10',fib(10))