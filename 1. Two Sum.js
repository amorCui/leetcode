/**
 * @param {number[]} nums
 * @param {number}  @return {number[]}target
                      *
 */
var twoSum = function(nums, target) {

    var map = new Map();
    map.set(nums[0],0);
    console.log(map);
    if(nums.length >= 2){
        for(var i = 1;i<nums.length;i++){
            if(map.has(target - nums[i])){
               return [map.get(target - nums[i]),i];
            }else{
                map.set(nums[i],i);
            }
        }
    }else{
        throw 'Array too short';
    }
    throw 'There is no result';

};