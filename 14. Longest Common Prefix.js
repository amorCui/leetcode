/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let rst = '';
    if(strs.length === 0){
        return rst
    }
    if(strs.length === 1){
        return strs[0]
    }

    let checkStr = ''
    for(let str of strs[0]){
        checkStr = checkStr + str
        let flag = true
        for(let index = 1; index < strs.length ; index++){
            if(strs[index].indexOf(checkStr) !== 0){
                flag =false
                break;
            }
        }
        if(flag){
            rst = checkStr
        }
    }

    return rst
};