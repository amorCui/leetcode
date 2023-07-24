/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let configHex = [
        'I', 'V', 'X', 'L', 'C', 'D', 'M'
    ];

    let rst = '';
    let val = num;
    for(let index = 0 ; index < configHex.length ; index += 2 ){
        let modalVal = val % 10

        val = Math.floor( val / 10)
        if(modalVal <= 3){
            rst = configHex[index].repeat(modalVal) + rst
            continue
        }

        let midVal = Math.floor(modalVal / 5)
        modalVal = modalVal % 5
        
        if(modalVal <= 3){
            rst = configHex[index + 1] + configHex[index].repeat(modalVal) + rst
            continue
        }

        if(modalVal === 4){
            rst = configHex[index] + configHex[index + midVal + 1] + rst
        }
            
        
    }
    return rst
};