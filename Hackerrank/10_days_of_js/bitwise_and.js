function getMaxLessThanK(n, k) {
    let best = 0;
    const nums = [];
    for (let i=1; i <= n; i++) {nums.push(i)}
    for (let i=0; i < n - 1; i++) {
        let j = i + 1;
        for (j; j < n; j++) {
            let tmp = Math.max(best, nums[i]&nums[j]);
            tmp < k ? best = tmp : {};
        }
    }
    return best;
}
console.log(getMaxLessThanK(5, 2));