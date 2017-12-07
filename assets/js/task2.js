var currency = {
    "usd": 0.03,
    "uah": 1,
    "euro": 0.025
};

function calculate() {

    var amountUAH = prompt("Enter amount UAH (number) for exchanging", "1, 10, 100, etc");
    if (amountUAH === null) {
        alert("Goodbye");
        return;
    }
    if (!Number.isFinite(parseFloat(amountUAH))) {
        alert("Enter a number please");
        return;
    }

    var currencyTo = prompt("Еnter currency to exchange",
        "usd, uah, euro" );
    if (currencyTo === null) {
        alert("Goodbye");
        return;
    }
    if (!isNaN(+currencyTo) || !(currencyTo.toLowerCase() in currency)) {
        alert("Enter valid currency please");
        return;
    }

    var totalAmount = currency[currencyTo] * amountUAH;

    alert("Exchanging UAH ==>" + currencyTo.toUpperCase() + "\n= " + totalAmount);
}

// calculate();