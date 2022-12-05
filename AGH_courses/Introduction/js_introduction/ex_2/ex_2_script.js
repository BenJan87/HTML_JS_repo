let sum = 0;
let insertion = window.prompt("Insert word");

function cyfry(napis) {
    let count = 0;
    napis.split("").forEach(element => {if (Number.isInteger(parseInt(element))) {count += parseInt(element);}});
    return count;
}

function litery(napis) {
    let count = 0;
    napis.split("").forEach(element => {if (!Number.isInteger(parseInt(element))) {count += 1;}});
    return count;
}

function suma(napis) {
    let count = "";
    napis.split("").every(element => {
        if (Number.isInteger(parseInt(element))) {count += element;return true;} 
        else {return false;}
    });

    if (count.length === 0) {count = 0;}
    count = parseInt(count);
    return count;
    // return sum + count;
}



while (typeof insertion === 'string') {
    sum += suma(insertion);
    let new_str = "\t"+cyfry(insertion)+"\t"+litery(insertion)+"\t"+sum;
    
    const p = document.createElement('p');
    const root = document.getElementById('root');
    p.textContent = new_str;
    root.appendChild(p);

    console.log(new_str)
    insertion = window.prompt("Insert word");
}