/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var maxArea = 0;
    var i = 0,j =height.length -1;
    while ( i < j ){
        maxArea = Math.max(maxArea, (j - i ) * Math.min(height[j], height[i]));
        height[i] > height[j] ? j--: i++;
    }
    return maxArea;
};