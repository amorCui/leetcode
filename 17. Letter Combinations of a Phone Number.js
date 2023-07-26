/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let rst = []
    if(digits === ''){
        return rst
    }
    let map = {
        '2':['a','b','c'],
        '3':['d','e','f'],
        '4':['g','h','i'],
        '5':['j','k','l'],
        '6':['m','n','o'],
        '7':['p','q','r', 's'],
        '8':['t','u','v'],
        '9':['w','x','y', 'z'],
    }

    rst = [""];
    for(let i = 0 ; i < digits.length; i++){
        let temporary = []
        let point = map[digits[i]]
        for(let j = 0; j < rst.length; j++){
            for(let k = 0; k < point.length; k++){
                temporary.push(`${rst[j]}${point[k]}`)
            }
        }
        rst = temporary
    }

    return rst
};