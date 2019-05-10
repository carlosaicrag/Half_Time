var reverse = function (x) {
    let reverseNum = [];
    let negativeBool = false;

    if(x < 0) negativeBool = true;
    if(x === 0) return 0;
    x = Math.abs(x);

    while (x > 0) {
        reverseNum.push(x % 10)
        x = Math.floor(x / 10)
    }
    if(negativeBool){
        return -1 * parseInt(reverseNum.join(""))
    }else{
        return parseInt(reverseNum.join(""))
    }
};

console.log(reverse(0))