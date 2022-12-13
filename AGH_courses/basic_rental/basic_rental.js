

// function returningBike ()
var magazine = document.getElementById("begin_magazine");

function splitMagazine(strArr) {
    const magazineArr = []
    if (strArr.length % 4 !== 0 || strArr.length === 0) {console.log("Incorrect length of magazine");return false}
    
    for (let i = 0; i < strArr.length; i += 4) {
        try {
            var amount = parseInt(strArr[i+2]);
            if (amount < 0) {throw new Error("Negative")}
        }
        catch(err) {console.log("Incorrect number for amount"); return false}

        const tmpArr = [strArr[i], strArr[i+1] ,amount, strArr[i+3]];
        magazineArr.push(tmpArr);
    }

    return magazineArr
}

function rent(name, surname, model, timeRent, finMagazine, buyersList) {
    let found = 0

    finMagazine.forEach( (element, index) => {
        if (element[1] === model && element[2] > 0) {
            found = 1;
            finMagazine[index][2] -= 1;
            buyersList.push([name, surname, model, timeRent, ""/*timeReturn*/]);
        }
    });

    if (found === 0) {console.log("Incorrect model or amount - check magazine with 'magazine'")}
}

function vehReturn(name, surname, model, timeReturn, finMagazine, buyersList) {
    let found = 0;
    buyersList.forEach((element, index) => {
        if (element[0] === name && element[1] === surname && element[2] === model) {
            buyersList[index][4] = timeReturn;
            found = 1;
        }
    });
    
    if (!found) {console.log("Not such bike was rented"); return}

    finMagazine.forEach( (element, index) => {
        if (element[1] === model) {
            finMagazine[index][2] += 1;
        }
    })
}

magazine.addEventListener("blur", function () {
    if (magazine.value) {console.log(magazine.value)};
    const bikeArray = magazine.value.replace(/\s+/g, ' ').split(' ').filter((e) => e.length > 0);

    // stop accessing magazine
    var parentMagazine = document.getElementById("body");
    var childMagazine = document.getElementById("begin_magazine");
    parentMagazine.removeChild(childMagazine);

    const finMagazine = splitMagazine(bikeArray);
    if (!finMagazine) {console.log("Incorrect magazine -> refresh page and insert magazine once again");return}

    var operation = document.getElementById("operation");
    const buyersList = [];
    operation.addEventListener("blur", function () {
        let toDoOperation = operation.value.replace(/\s+/g, ' ').split(' ').filter((e) => e.length > 0);
        
        let currOperation = toDoOperation[0];
        switch(currOperation) {
            case "magazine":
                console.log("Current state of magazine: ");
                finMagazine.forEach(element => {
                    console.log(element[0] + " " + element[1] + " " + element[2]);
                });
                break;

            case "show_buyers":
                console.log("Below there is buyers list: ")
                buyersList.forEach(element => {
                    console.log(element[0] + " " + element[1] + " " + element[2] + " " + element[3] + " " + element[4]);
                });
                break;

            case "rent":
                if (toDoOperation.length < 5) {console.log("not enough arguments");break}
                console.log("Rent operation");
                rent(toDoOperation[1], toDoOperation[2], toDoOperation[3], toDoOperation[4], finMagazine, buyersList);
                break;
        
            case "return":
                if (toDoOperation.length < 5) {console.log("not enough arguments");break}
                console.log("Return operation");
                vehReturn(toDoOperation[1], toDoOperation[2], toDoOperation[3], toDoOperation[4], finMagazine, buyersList);
                break;
            default:
                console.log("Thah opeartion doesn't exist");
        }

    });

});




