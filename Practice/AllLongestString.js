function allLongestStrings(arr){
    let longestStringLength = arr[0].length
    console.log(longestStringLength)

    let result = []

    for(let i = 1; i < arr.length; i++){
        currentStringLength = arr[i].length//2
        if(currentStringLength>=longestStringLength){
            longestStringLength = currentStringLength
            result.push(arr[i])
        }
        

    }

}


let callF = allLongestStrings(["aba","aa","ad","vcd","aba"])
console.log(callF)