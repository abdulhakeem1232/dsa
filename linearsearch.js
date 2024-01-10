function linearSearch(arr,target){
    for(i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i
        }
    }
    return -1
}
let arr=[20,8,9,55,3,8,90]
console.log(linearSearch(arr,8));
console.log(linearSearch(arr,555));