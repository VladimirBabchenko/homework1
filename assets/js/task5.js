function reflectionValue() {
    var value1 = prompt("Enter your value first for comparison", "");
    var value2 = prompt("Enter your value second for comparison", "")

    if (!Number.isFinite(+value1) || !Number.isFinite(+value2)) {
        console.log("enter a numbers");
        return;
    }

    if (value1.length !== value2.length) {
        console.log("Values are not mirror");
        return;
    }

    for (var i = 0; i < value1.length; i++) {
        if (value1[i] !== value2[(value1.length-1) - i]) {
            console.log("Values are not mirror");
            return;
        } else {
            console.log("Values are mirror");
        }
    }
}

// reflectionValue();