/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var max = 0;
    for(var i = 0; i < s.length; i++){
        var strSet = new Set();
        for(var j = i + 1; j <= s.length; j++){
		
            var str = s.substring(i, j);
            var char = s.substring(j-1, j);
		
            if(!strSet.has(char)){
                strSet.add(char);
                if(str.length > max ){
                    max = str.length;   
                }
            }else{
				break;
			}
        }
    }
    return max;
};