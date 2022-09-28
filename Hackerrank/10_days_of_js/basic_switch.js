function getLetter(s) {
    // debugger;
    let letter;
    let st = s.charAt(0);
    switch (true) {
        case 'aeiou'.includes(st):
            letter = "A";
            break;
        case 'bcdfg'.includes(st):
            letter = "B";
            break;
        case 'hjklm'.includes(st):
            letter = "C"
            break;
        default:
            letter = "D"
    }
    return letter;
}
s = "cjndsld"
console.log(getLetter(s))

