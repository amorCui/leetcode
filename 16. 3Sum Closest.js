/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // 从小到大排列
   nums.sort((a,b) => a-b);
   let res = Infinity;
   
   for(let i = 0 ; i < nums.length - 2 ; i++){
       if(i !== 0 && nums[i] === nums[i - 1]){
           continue
       }
       // let num1 = nums[i]
       let startIndex = i + 1;
       let endIndex = nums.length - 1;
       while(startIndex < endIndex){
           // if(startIndex > i +1 && nums[startIndex] === nums[startIndex - 1]){
           //     startIndex++
           //     continue
           // }
           // if(endIndex < nums.length - 1 && nums[endIndex] === nums[endIndex + 1]){
           //     endIndex--
           //     continue
           // }

           let sum = nums[i] + nums[startIndex] + nums[endIndex]

           // let num2 = nums[startIndex]
           // let num3 = nums[endIndex]

           if(Math.abs(sum - target) < Math.abs(res - target)){
               res = sum
           }
           if(sum === target){
               endIndex--
               startIndex++
           }
           if(sum > target){
               endIndex--
           }
           if(sum < target){
               startIndex++
           }
       }
   }

   return res;
};