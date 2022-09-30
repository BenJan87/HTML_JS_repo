function migratoryBirds(arr) {
    const types = [];
    let len = new Set(arr).size;
    let counted = new Set(arr);
    counted = Array(len).fill(0);

    arr.forEach( (el) => {
        if (types.includes(el)) counted[types.indexOf(el)]++;
        else {
            types.push(el);
            counted[types.indexOf(el)]++;
        }
    })
    
    let best = 0;
    let all_res = [];
    counted.forEach((el) => {if (el > best) best = el});
    
    for (let i=0; i < len; i++) {
        if (counted[i] === best) {
            all_res.push(types[i])
        }
    }
    all_res.sort(function(a, b){return a - b})
    return all_res[0];
}


console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]))