{
    // Question: Design a TypeScript function repeatString that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.
    // Define arrow function for typeScript
    var repeatString = function (str, num) {
        var result = "";
        for (var i = 0; i < num; i++) {
            result += str;
        }
        return result;
    };
    console.log(repeatString("Hello", 5));
}
