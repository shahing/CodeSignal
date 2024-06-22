function commonCharacterCount(s1, s2) {
  let splitS1 = s1.split("")
  console.log(splitS1)
    let count =0

  for (let i = 0; i < splitS1.length; i++) {
    console.log("string ",s2)
    console.log("char",splitS1[i])
    if(s2.indexOf(splitS1[i])>-1){
        let indexOfS1 = s2.indexOf(splitS1[i])//0
        console.log(indexOfS1)
        count++
        s2 = s2.replace(s2.charAt(indexOfS1),"")
        console.log(s2)
      
    }
  }
  return count
}

let callF = commonCharacterCount("aabcc","adcaa")
console.log(callF)