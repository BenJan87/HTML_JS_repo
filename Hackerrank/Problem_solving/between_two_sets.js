function only_dupl(arr) {
    const dupl = [];
    const res = new Set();
    arr.forEach( (el) => {(dupl.includes(el)) ? res.add(el) : dupl.push(el);})
    return res;
}

function getTotal(arr_1, arr_2) {
    const set_1 = new Set(arr_1);
    const set_2 = new Set(arr_2);
    const smallest = Math.min.apply(Math, arr_2);
    const poss_set_all = [];
    let count = 0;

    set_2.forEach( (el) => {
        for(let i=1; i <= smallest; i++) {
            if (el % i == 0) poss_set_all.push(i);
        }
    })

    const poss_set_dup = only_dupl(poss_set_all);

    poss_set_dup.forEach( (el_poss) => {
        let flag = 0;
        for (el_1 of set_1) {
            if (el_poss % el_1 != 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) count++;

    })
    
    return count;
}

const arr_test = [1,1,2,2,3,6,6,7];
const arr_1 = [2, 4];
const arr_2 = [16, 32, 96];

// console.log(only_dupl(arr_test));
console.log(getTotal(arr_1, arr_2));