// debugger;
let s = "javascriptloops";
let vowels = ['a', 'e', 'i', 'o', 'u'];
s = s.split("");
let rest = [];

s.forEach(function(el) {
    if (vowels.includes(el)) {console.log(el)}
    else {rest.push(el)}
});
rest.forEach((el) => console.log(el));