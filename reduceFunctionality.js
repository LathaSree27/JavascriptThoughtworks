var numbers = [11, 22, 33, 44, 55];

reduceFunction = (number_array, cumulative) => {
    var total = 0;
    for(var i = 0 ; i < number_array.length ; i++) {
        total = cumulative(total, number_array[i]);
    }
    return total;
};
add = (total, number) =>  total + number;

console.log(reduceFunction(numbers, add));
