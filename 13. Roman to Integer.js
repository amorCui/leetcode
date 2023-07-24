/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let total = 0;

    for(let index = 0 ; index < s.length; index++){
        let current = map[s[index]]
        let next = map[s[index + 1]]
        if(next > current){
            total += (next - current)
            index++
        }else{
            // next 《= current or next = undefined
            total += current
        }

    }

    return total;
};
