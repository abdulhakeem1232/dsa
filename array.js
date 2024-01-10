// let arr=[9,0,'ka']
// arr.push(25)
// arr.unshift(7)
// for(const item of arr){
//     console.log(item);
// }

// let map=new Map([['a',7],['b',10],['c',14]])
// console.log(map);
// map.set('d',7)
// map.set('e',0)
// for(const [key,values] of map){
//     console.log(`${key}:${values}`);
// }

let arr=[-4,-3,-2,-1,0,1,2,5]
function findZero(arr){
    let left=0,right=arr.length-1
    while(left<right){
        let sum=arr[left]+arr[right]
        if(sum==0){
            return [left,right]
        }
        else if(sum>0)
        right--
    else
    left++
    }
}
console.log(findZero(arr));
