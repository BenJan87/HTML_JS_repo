function getCount(objects) {
    let count = 0;
    objects.forEach( function(obj) {if (obj.x == obj.y) count += 1});
    return count;
}

function create_obj(num, arr) {
    const arr_obj= [];
    for (let i=0; i < num*2; i += 2) {
        obj = {x: arr[i], y: arr[i+1]};
        arr_obj.push(obj);
    }
    console.log(arr_obj)
    return arr_obj;
}

const num_of_obj = 5;
const arr = [1, 1, 2, 3, 3, 3, 3, 4, 4, 5];
console.log(getCount(create_obj(num_of_obj, arr)));