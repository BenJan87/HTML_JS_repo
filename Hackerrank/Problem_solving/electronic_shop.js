function getMoneySpent(keyboards, drives, money) {
    let keyboardsLength = keyboards.length;
    let drivesLength = drives.length;
    let best = -1

    for (let i=0; i < keyboardsLength; i++) {
        for (let j=0; j < drivesLength; j++) {
            let spendings = keyboards[i] + drives[j];
            if (spendings <= money && spendings > best) best = spendings;
        }
    }
    return best;
}

console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60))