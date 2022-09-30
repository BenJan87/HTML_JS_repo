function chocolateFeast(money, cost, wrappers) {
    let count = Math.floor(money/cost);
    let ratio = 0;
    let reminder = 0;
    let res = count;

    while (res >= wrappers) {
        ratio = Math.floor(res/wrappers);
        reminder = res % wrappers;
        count += ratio;
        res = ratio + reminder;
    } 
    return count;
}

console.log(chocolateFeast(15,3,2));
console.log(chocolateFeast(12,4,4));
console.log(chocolateFeast(6,2,2));
