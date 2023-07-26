/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // 从小到大排列
    nums.sort((a,b) => a-b);
    let res = [];
    
    for(let i = 0 ; i < nums.length - 2 ; i++){
        if(i !== 0 && nums[i] === nums[i - 1]){
            continue
        }
        let num1 = nums[i]
        let startIndex = i + 1;
        let endIndex = nums.length - 1;
        while(startIndex < endIndex){
            if(startIndex > i +1 && nums[startIndex] === nums[startIndex - 1]){
                startIndex++
                continue
            }
            if(endIndex < nums.length - 1 && nums[endIndex] === nums[endIndex + 1]){
                endIndex--
                continue
            }


            let num2 = nums[startIndex]
            let num3 = nums[endIndex]
            if(num1 + num2 + num3 === 0){
                res.push([num1,num2,num3])
                startIndex++
                endIndex--
            }
            if(num1 + num2 + num3 > 0){
                endIndex--
            }
            if(num1 + num2 + num3 < 0){
                startIndex++
            }
        }
    }

    return res;
};