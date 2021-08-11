// https://github.com/nasimit2020/problem-solving-assignment-3

// KiloMeter to Meter Calculation
function kilometerToMeter(kilometer) {
    var meter = 1000;
    var totalMeter = kilometer * meter;
    if (kilometer <= 0) {
        return "please put the right value."
    }
    else {
        return totalMeter;
    }
}

// Budget Calculator
function budgetCalculator(watch, phone, laptop) {
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    var totalBudgetCost = (watch * watchPrice) + (phone * phonePrice) + (laptop * laptopPrice);
    if ((watch, phone, laptop) < 0) {
        return "please put the right value."
    }
    else {
        return totalBudgetCost;
    }
}

// Calcution Hotel Cost
function hotelCost(day) {
    var firstTenDays = 100;
    var secondTenDays = 80;
    var afterTewntyDays = 50;
    if (day <= 10) {
        var totalCost = firstTenDays * day;
        return totalCost;
    }
    else if (day <= 20) {
        var firstTenDaysCost = (firstTenDays * 10);
        var secondTenDaysCost = (secondTenDays * (day - 10));
        var totalCost = firstTenDaysCost + secondTenDaysCost;
        return totalCost;
    }
    else if (day > 20) {
        var firstTenDaysCost = (firstTenDays * 10);
        var secondTenDaysCost = (secondTenDays * 10);
        var afterTewntyDaysCost = (afterTewntyDays * (day - 20));
        var totalCost = firstTenDaysCost + secondTenDaysCost + afterTewntyDaysCost;
        return totalCost;
    }
}

// Find largest name of friends array 
var friends = ["Md. Nasim Reza", "Rahaman", "Marium Khatun", "Sanjida rahama", "Shakh"];
function megaFriend() {
    var lgth = 0;
    var longest;
    for (var i = 0; i < friends.length; i++) {
        if (friends[i].length > lgth) {
            var lgth = friends[i].length;
            longest = friends[i];
        }
    }
    return longest;
}