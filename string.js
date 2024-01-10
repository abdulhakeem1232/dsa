
function replacefirstlast(string,first,last){
    let res=first
    for(i=1;i<string.length-1;i++){
        res+=string[i]
    }
    res+=last
    return res
}

function ispalindrome(string){
    let clean=string.replace(/[^A-Za-z0-9]/g,'').toLowerCase()
    for(i=0;i<Math.floor(clean.length/2);i++){
        if(clean[i]!=clean[clean.length-1-i]){
            return false
        }
    }
    return true
}
function anagram(s1,s2){
    let string1=s1.split('').sort().join('')
    let string2=s2.split('').sort().join('')
    return string1==string2
}

function increment(str){
    let res=''
    for(i=0;i<str.length;i++){
        let ascii=str.charCodeAt(i)+2
        if(ascii>122)
        ascii=96+(ascii%122)
        res+=String.fromCharCode(ascii)
    }
    return res
}

console.log(ispalindrome('hakeem'));
console.log(ispalindrome("A man, a plan, a canal, Panama"));
console.log(replacefirstlast('abdul hakeem','l','b'));
console.log(anagram('car','rat'));
console.log(anagram('silent','listen'));
console.log(increment('acz'));