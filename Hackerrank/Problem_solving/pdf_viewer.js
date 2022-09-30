function designerPdfViewer(heights, word) {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    const lo_alphabet = alphabet.map(el => {return el.toLowerCase()});

    const indexes = [];
    let best = 0;

    for (let i=0; i < word.length;i++) indexes.push(lo_alphabet.indexOf(word.charAt(i)));
    indexes.forEach( (index) => {if (heights[index] > best) best = heights[index]});

    return word.length*best;
}

console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], "zaba"))