// Task 1
function calculateAverage () {
  var numbers = prompt("Enter numbers", "1,2,3,4");
  if (numbers===null) return;
  var arr = numbers.split(",");
  var sum = 0, average;
  for (var i = 0; i < arr.length; i++) {
    if (isNaN(parseInt(arr[i]))) {
      alert("Enter a number");
      return;
    }
    arr[i] = parseInt(arr[i]);
    sum += arr[i]
  }
  average = sum/arr.length;
  console.log(average);
}
// calculateAverage();

//=====================================================

// Task 2
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

//=====================================================

// Task 3

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

//=====================================================

// Task 4

function verifyValue() {
  var value1 = prompt("Enter your value for compare");
  var value2 = prompt("Enter your value for compare");


    if ( value1===null || value2===null) {
      alert("Goodbye");
    } else if (value1 === value2) {
      alert("Value are equal");
    }
}

// verifyValue();

//=====================================================

// Task 5 - Mirror reflection of value

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


