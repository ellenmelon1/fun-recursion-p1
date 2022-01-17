function factorial(num) {
    if (num <= 0 ){
        return 1;
    }

    return num * factorial(num-1);
    
}

function sum(num) {
    if (num <= 1){
        return num;
    }
    return num + sum(num-1);
}

function reverseString(str){
    if (str.length <=1) return str;

    let lastChar = str[str.length-1];

    let slicedStr = str.slice(0,-1);

    return lastChar + reverseString(slicedStr);

}

function countWhiteSpaces(str){

    console.log(str.split(" "));
    console.log(str);
    console.log(str.split(" ").length);

    cuttingPoint = str.indexOf(" ");
    console.log(cuttingPoint);
    console.log(str.slice(cuttingPoint));
    
    if (str.split(" ").length < 2) return 0;
    if (str.split(" ").length == 2) return 1;


    //let slicedStr = str.slice(cuttingPoint);
    //let whiteSpaceInstance = 1;

    //return whiteSpaceInstance + countWhiteSpaces(slicedStr);

}

function totalInts(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;

}

//new code

module.exports = {factorial, sum, reverseString,countWhiteSpaces, totalInts};