function getSecondLargest(nums) {
    nums.sort(function(a, b){return a - b});
    nums = [...new Set(nums)];
    return nums[nums.length-2];
}
// debugger;
nums = [1,3,2,5,6,6];
console.log(getSecondLargest(nums));