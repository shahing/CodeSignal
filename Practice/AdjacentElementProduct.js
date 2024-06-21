function adjacentElementProduct(arr){
    if(arr.length<2){
        return null;
    }

    let maxProduct = arr[0]* arr[1]; //18

    for(let i=1; i<arr.length; i++){
        let currentProduct = arr[i]* arr[i+1];
        if(currentProduct>maxProduct){
            maxProduct = currentProduct;
    }
   
    }
    return maxProduct;

}

let callF = adjacentElementProduct([3, 6, -2, -5, 7, 3])
console.log(callF)