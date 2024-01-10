// let obj={
//     m1:60,
//     m2:21,
//     m3:90,
//     m4:59
// }
// let sum=0
// for(let item in obj){
//     sum+=obj[item]
// }
// console.log(sum);

let obj={
    name:'hakeem',
    age:21,
}
obj.gender='male'
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(obj.age);
console.log(obj);
delete obj.age
console.log(obj.age);