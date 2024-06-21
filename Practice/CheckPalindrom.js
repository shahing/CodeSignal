function checkPalindrome(x){
    if(x=== x.split("").reverse().join("")){
        return true;
    }
    else{
        return false;
    }
}

let callCheckPalindrome= checkPalindrome("Shahin")
console.log(callCheckPalindrome)

callCheckPalindrome= checkPalindrome("111")
console.log(callCheckPalindrome)