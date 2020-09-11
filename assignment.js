function feetToMile(foot) {
    var mile = 5280;
    var result = foot / mile;
    return result;
}

var totalMile = feetToMile(26125443);
console.log(totalMile);