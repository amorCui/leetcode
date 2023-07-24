/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length < 2){
        return s;
    }
    
    let max = s[0];
    for(let index = 0; index <= s.length - 2; index++ ){
        let isJumpSingleLoop = false;
        let isJumpDoubleLoop = false;

        let singleCurrent = s[index];
        let doubleCurrent = '';
      
        
        for(let point = 0 ; index - point >= 0 ; point++ ){
            if(isJumpSingleLoop && isJumpDoubleLoop){
                break
            }
            // case 1: aba
            if(index >0 && point > 0 && !isJumpSingleLoop){
                if(index + point < s.length  && s[index - point] === s[index + point]){
                    singleCurrent = s[index - point] + singleCurrent + s[index + point]   
                }else{
                    isJumpSingleLoop = true;
                }
            }
            
            // case 2: abba
            if(!isJumpDoubleLoop){
                 if(index + 1 + point < s.length && s[index - point] === s[index + 1 + point]){
                    doubleCurrent = s[index - point] + doubleCurrent + s[index + 1 + point]
                }else{
                    isJumpDoubleLoop = true;
                }
            }
        }

        max = max.length < singleCurrent.length? singleCurrent: max;
        max = max.length < doubleCurrent.length? doubleCurrent: max;
    }
    return max;
};