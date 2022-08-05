var numbers = [21, 35, 14, 32, 29, 8];

checkingConditionForEven = (givenNumbers, isEven) => {
    var evenNumbers = [];
    var index = 0;
    for(var i = 0 ; i < givenNumbers.length ; i++) {
        if(isEvenNumber(givenNumbers[i]))
            evenNumbers[index++] = givenNumbers[i];
    }
    return evenNumbers;
};

isEvenNumber = (num) => num %2 == 0;

console.log(checkingConditionForEven(numbers, isEvenNumber));
