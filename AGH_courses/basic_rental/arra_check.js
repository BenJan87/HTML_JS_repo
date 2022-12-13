const arr = [[0,1,2,3], [4,5,6,7]]

arr.forEach((el,index) => {
    if (el[2] == 2) {
        arr[index][2] = 9;

    }
});
console.log(arr);