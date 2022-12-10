function pageCount(n, p) {
    let countSt = 0;
    let countEnd = 0;
    let pages = (n%2 == 0) ? n+1 : n;
    
    // if (p == 1 || p == n || p == n-1) {return 0;}
    
    while (pages != p && pages - 1 != p) {
        pages -= 2;
        countEnd += 1;
    }
    
    while (countSt*2 != p && countSt*2 + 1 != p ) {
        countSt += 1;   
    }
    
    return Math.min(countSt, countEnd)
}

console.log(pageCount(6, 2))
console.log(pageCount(5, 4))
console.log(pageCount(5, 1))

