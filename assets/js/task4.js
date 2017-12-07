function verifyValue() {
    var value1 = prompt("Enter your value for compare");
    var value2 = prompt("Enter your value for compare");


    if ( value1===null || value2===null) {
        alert("Goodbye");
    } else if (value1 === value2) {
        alert("Value are equal");
    } else {
        alert("Values are not equal");
    }
}

// verifyValue();