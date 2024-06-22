function alternativeSum(a){
    let result =[]
    let a1 = a[0]
    let a2 = a[1]
    for(let i=2; i<a.length;i++){
       
        if(i%2==0){
            a1= a1 + a[i]
        }else{
            a2 =a2 + a[i]
        }

    }
    result.push(a1)
    result.push(a2)

    return result
}

let callF = alternativeSum([50,60,60,45,70])//[180,105]
console.log(callF)