function requirements() {
    console.group("Data");
    var name = prompt("Enter your name", "Vova, Dima");
    var surname = prompt("Enter surname", "Petrov, Ivanov, Sidorov");
    var age = prompt("Enter your age");
    var gender = prompt("Enter your gender", "male, female");
    var country = prompt("Enter country birth", "Ukraine, Ireland, China");
    var city = prompt ("Enter city of accomodation", "Odessa, Kiev");
    if (name===null || surname===null || age===null || gender===null || country===null || city===null) {
        alert("As you wish");
        return;
    }

    if ((!isNaN(+name)) || (!isNaN(+surname)) || (!isNaN(+gender)) || (!isNaN(country)) || (!isNaN(city))) {
        alert("Enter a valid value");
        return;
    }

    if (!Number.isFinite(parseInt(age))) {
        alert("Enter a valid age");
        return;
    }
    console.log("Your name = " + name + "\nYour surname = " + surname + "\nYour" +
        " age = " + age + "\nYour gender = " + gender + "\nYour country = " + country + "\nYour city = " + city);
    console.groupEnd();

}

// requirements();