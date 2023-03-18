function birthday(s, d, m) {
    let count = 0;

    s.forEach((element, index) => {
        const subarray = s.slice(index, index + m);
        let tmp = 0;
        subarray.forEach(element => {
            tmp += element;
        });
        if (tmp == d) {count++;}
    });

    return count;
}




console.log(birthday([2,2,1,3,2], 4, 2)) // 2
console.log(birthday([1,2,1,3,2], 3, 2)) // 2
console.log(birthday([1,1,1,1,1,1], 3, 2)) // 0
console.log(birthday([4], 4, 1)) // 1