/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let numList= ["0","1","2","3","4","5","6","7","8","9"];
    var numStr = str.trim();
    var num = 0;
    var flag = 1;
    var max = 2147483647;

    var strList = numStr.split("");
    for(var i = 0; i < strList.length; i++){
        var char = strList[i];
        //第一个如果是-号，更新flag
        if(i == 0){
            if(char == "-"){
                flag = -1;
                max = max +1;
                 continue;
            }
            if(char == "+"){
                 continue;
           }
        }
        
        if(numList.indexOf(char) >= 0){
           num = num * 10 + numList.indexOf(char);

           if(num > max){
              return flag * max ;
           }
        }else{
            break;
        }
    }
    return num * flag;
    
};