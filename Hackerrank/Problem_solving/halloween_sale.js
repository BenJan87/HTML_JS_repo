function howManyGames(p, d, m, s) {
    let moneyToSpend = s;
    let basicPrice = p;
    let substractValue = d;
    let minValue = m;


    let gamesToBuy = 0;

    while (true) {

        let disc = (basicPrice - substractValue * gamesToBuy >= minValue) ? basicPrice - substractValue * gamesToBuy : minValue;
        moneyToSpend -= disc;

        if (moneyToSpend < 0) {return gamesToBuy}
        else {gamesToBuy += 1}
    } 
}


console.log(howManyGames(20,3,6,70));
console.log(howManyGames(20,3,6,80));
console.log(howManyGames(20,3, 6, 85));

