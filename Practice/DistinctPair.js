function distinctPair(arr){
let newSet = new Set(arr)
let count =0
for(let i = 0; i < arr.length; i++){
    let ch = arr[i].toString()
    let ch1 = ch.split('').reverse().join('')
    console.log(parseInt(ch1))
    if(newSet.has(parseInt(ch1))){
        count++
    
        newSet.delete(parseInt(ch1))
    }
    console.log(newSet)
}
return count

}

let callF = distinctPair([23,156,1650,651,165,32])
console.log(callF)