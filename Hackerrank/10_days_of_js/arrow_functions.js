function modifyArray(nums) {
    return nums.map((n) => n%2===0 ? n*2 : n*3);
}

const nums = [1,2,3,4,5,6,7]
console.log(modifyArray(nums))