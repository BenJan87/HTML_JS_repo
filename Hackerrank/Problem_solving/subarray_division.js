function birthday(s, d, m) {
    const slicedArr = divideArray(s, m);
    let count = 0;

    slicedArr.forEach(smallArr => {
        let sum = smallArr.reduce((acc, current) => acc + current, 0);
        if (sum === d) {count += 1;}
    });

    return count;
}


function divideArray(arr, m, used = []) {
    
}


console.log(birthday([2,2,1,3,2], 4, 2))