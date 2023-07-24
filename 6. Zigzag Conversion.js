/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let arr = converString2Arr(s, numRows);
    return arr.join('')
};


var converString2Arr = function(s, numRows){
    if(numRows === 1) return [s]
    let arr = []
    for(let index = 0 ; index < numRows; index++){
        arr.push('');
    }

    for(let index = 0 ; index < s.length; index++){
        let filter = index % (2 * numRows - 2)
        //filter < numRows ? arr[filter].push(s[index]): arr[2*numRows - filter - 2].push(s[index]);
        if(filter < numRows){
            arr[filter] = arr[filter] + s[index]
        }else{
            arr[2*numRows - filter - 2] = arr[2*numRows - filter - 2] + s[index]
        }
    }
    return arr;
}