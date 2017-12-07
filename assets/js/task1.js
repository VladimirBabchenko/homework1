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