function isPositive(n) {
    if (n>0) return "YES";
    else if (n<0) throw new Error("Negative Error")
    else throw new Error("Zero Error")
}

console.log(isPositive(-3))