/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let MIN = Math.pow(-2,31);
    let MAX = Math.pow(2,31) - 1;
    var rst = 0;
    if( x > MAX || x < MIN){
        return rst;
    }
    if(x > -10 && x < 10){
       return x;
    }
    
    if( x >= 0){
        while(x / 10 > 0){
            rst = 10 * rst + x % 10;
             console.log(rst);
            x = Math.floor(x / 10);
        }
       return rst > MAX || rst < MIN ? 0 :rst;
    }else{
        while(x / 10 < 0){
            rst = 10 * rst + x % 10;
            console.log(rst);
            x = Math.ceil(x / 10);
        }
        return rst > MAX || rst < MIN ? 0 :rst;
    }
};