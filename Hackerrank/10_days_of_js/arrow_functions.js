function modifyArray(nums) {
    return nums.map((n) => n%2===0 ? n*2 : n*3);
}

const nums = [1,2,3,4,5,6,7]
console.log(modifyArray(nums))

function multiByNum(nums) {
    return nums.forEach((el) => {
        if (el%2===0) return 1;
        else return 3;
    });
}

console.log(multiByNum(nums))