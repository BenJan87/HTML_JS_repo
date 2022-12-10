function nonDivisibleSubset(k, s) {
    const divArray = s.map(function(el) {return el % k});
    divArray.sort(function(a, b) {return a-b});

    const counterArray = [];
    let tmpCount = 1;

    for (let i=0; i<divArray.length - 1; i++) {
        if (divArray[i] !== divArray[i+1]) {
            counterArray.push([divArray[i], tmpCount]);
            tmpCount = 1;
            if (i == divArray.length - 2) {counterArray.push([divArray[i+1], 1])}
        }
        else {
            tmpCount += 1;
            if (i == divArray.length - 2) {counterArray.push([divArray[i], tmpCount])}
        }

    }
}



console.log(nonDivisibleSubset(3, [1,7,2,4])) /* => 3 */
console.log(nonDivisibleSubset(4, [19,10,12,10,24,25,22]))
