// https://github.com/Sumaiya176/Assignment-3


// 1st problem starts
// This function will convert kilometer to meter.
function kilometerToMeter(distance) {
    if (distance < 0) {
        return "distance cannot be negative";
    }
    else {
        var inMeter = distance * 1000;
        return inMeter;
    }
    return inMeter;
}
// 1st problem ends



// 2nd problem starts
// This function will give you the total cost of your products.
function budgetCalculator(watchNumber, phoneNumber, laptopNumber) {
    if (watchNumber <= 0 && phoneNumber <= 0 && laptopNumber <= 0) {
        return "Buying products never be zero & negative";
    }
    // highly recommended to not to use any negative or zero values
    // use all positive int argument

    else {
        totalBudget = (watchNumber * 50) + (phoneNumber * 100) + (laptopNumber * 500);
    }
    return totalBudget;
}
// 2nd problem ends



// 3rd problem starts
function hotelCost(days) {
    if (days <= 0) {
        return "Spending night in hotel never be negative or zero.";
    }
    // you are recommended to not to use any negative & zero argument.
    else if (days <= 10) {
        var totalCost = days * 100;
    }
    else if (days <= 20) {
        var primaryCost = 10 * 100;
        var secondaryCost = (days - 10) * 80;
        totalCost = primaryCost + secondaryCost;
    }
    else {
        var primaryCost = 10 * 100;
        var secondaryCost = 10 * 80;
        var tertiaryCost = (days - 20) * 50;
        totalCost = primaryCost + secondaryCost + tertiaryCost;
    }
    return totalCost;
}
// 3rd problem ends



// 4th problem starts
// This function results the largest string among all strings.
var namelength = 1;
function megaFriend(nameOfFriends) {
    var arrayLength = nameOfFriends.length;
    if (arrayLength == 0) {
        return 'Error! This is an empty array!!';
    }
    else if (nameOfFriends == '') {
        return 'You have to put some strings in array.';
    }
    else {
        for (var i = 0; i < nameOfFriends.length; i++) {
            var element = nameOfFriends[i].length;
            if (element > namelength) {
                namelength = nameOfFriends[i].length;
                var largestName = nameOfFriends[i];
            }
        }
    }
    return largestName;
}
// 4th problem ends


