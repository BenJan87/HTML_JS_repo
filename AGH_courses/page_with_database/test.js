const firstElementArr = [];
for (let i = 0; i < 24; i++) {
    let str = i.toString();
    if (str.length === 1) {str = '0' + str;}
    firstElementArr.push(str);
}

console.log(firstElementArr);