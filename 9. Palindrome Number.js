/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0 || (x != 0 && x % 10 == 0)){
        return false;
    }else if( x < 10){
        return true;
    }else{

        var newX = 0;
        while(x > newX ){
           newX = newX * 10 + x % 10;
           x = parseInt(x / 10);
        }

       return x == newX || x == parseInt(newX / 10);
    }

};