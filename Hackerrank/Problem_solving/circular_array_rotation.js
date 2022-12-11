function circularArrayRotation(arr, loop, indicies) {
    let newLoop = loop % arr.length;
    for (let i = 0; i < newLoop; i++) {
        arr.unshift(arr[arr.length - 1]);
        arr.pop()
    }

    const newPlaces = [];
    indicies.forEach(i => {
        newPlaces.push(arr[i])
    });

    return newPlaces;

}


console.log(circularArrayRotation([3,4,5], 2, [1, 2]))
console.log(circularArrayRotation([3,1,2], 1, [0, 1, 2]))