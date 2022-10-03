function dayOfProgrammer(year) {
    // Write your code here
    let day = 256;
    if (year < 1916) day -= 1;
    const date = new Date(year, 0, day, 0, 0, 0, 0);

    var dayOfMonth = date.getDate();
    var month = date.getMonth()+1;

    if (dayOfMonth <= 9) dayOfMonth = "0" + dayOfMonth.toString();
    if (month <= 9) month = "0" + month.toString();

    let str = `${dayOfMonth}.${month}.${year}`;
    return str;
}

console.log(dayOfProgrammer(1984));
console.log(dayOfProgrammer(2017));
console.log(dayOfProgrammer(2016));
console.log(dayOfProgrammer(1700));
