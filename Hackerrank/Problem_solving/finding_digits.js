function findDigits(n) {
    let w = n.toString();
    const digits = [];
    for (let i=0; i < w.length; i++) digits.push(w.charAt(i));

    const numbers = digits.map(function(el) {return parseInt(el)} );
    let count= 0
    
    numbers.forEach( (el) => {if (n % el == 0) count++})
    return count;
}   

console.log(findDigits(1012))