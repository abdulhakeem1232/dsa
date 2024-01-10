// function binarySearch(arr,target){
// let lindex=0
// let rindex=arr.length-1
// while(lindex<=rindex){
//     let mindex=Math.floor((lindex+rindex)/2)
    
//     if(arr[mindex]==target)
//     return mindex
//     else if(target>arr[mindex]){
//         lindex=mindex+1;
//     }
//     else{
//         rindex=mindex-1
//     }
// }
// return -1
// }

function binarySearch(arr, target, l = 0, r = arr.length - 1) {
    if (l >= r)
        return -1;
    
    let m = Math.floor((l + r) / 2);

    if (arr[m] == target)
        return m;
    else if (target > arr[m])
        return binarySearch(arr, target, m + 1, r);
    else
        return binarySearch(arr, target, l, m - 1);
}

let arr = [5, 7, 8, 9, 18, 90]
console.log('1', binarySearch(arr, 8));
console.log('2', binarySearch(arr, 555));
console.log('3', binarySearch(arr, 18));