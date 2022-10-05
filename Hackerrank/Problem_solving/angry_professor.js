function angryProfessor(k, a) {
    let count = 0;
    let flag = 0; 
    a.forEach( (el) => {
        if (el <= 0) count += 1;
        if (k === count) flag += 1;
    });
    if (flag) return "NO";
    return "YES";
}

console.log(angryProfessor(3, [-1, 0, 1 ,2]));