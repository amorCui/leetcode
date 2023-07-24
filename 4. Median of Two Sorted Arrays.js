/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let size1 = nums1.length;
    let size2 = nums2.length;
    if(size2 < size1){
        return findMedianSortedArrays(nums2, nums1);
    }

    let low = 0;
    let high = size1;

    while(low <= high){
        let point1 = Math.floor((low + high) / 2 );
        let point2 = Math.floor((size1 + size2 + 1)/2) - point1;

        let start1 = point1 === 0? Number.NEGATIVE_INFINITY: nums1[point1 - 1];
        let start2 = point2 === 0? Number.NEGATIVE_INFINITY: nums2[point2 - 1];

        let end1 = point1 === size1? Number.POSITIVE_INFINITY: nums1[point1];
        let end2 = point2 === size2? Number.POSITIVE_INFINITY: nums2[point2];


        if(start1 <= end2 && start2 <= end1){
            if((size1 + size2) %2 === 1){
                return Math.max(start1, start2)
            }else{
                return (Math.max(start1, start2) + Math.min(end1, end2))/2
            }
        }else if(start1 > end2){
            high = point1 - 1
        }else{
            low = point1 + 1
        }
    }

};