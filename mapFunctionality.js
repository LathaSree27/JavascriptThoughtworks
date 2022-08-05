var present_age = [15 ,23 ,13 ,40 ,25];

age_after_7years = (given_ages,years) => {
    var future_age = [];
    for(var i = 0 ; i < given_ages.length ; i++){
        future_age[i] = add_7(given_ages[i]);
    }
    return future_age;
};

add_7 = (age) => age + 7;

console.log(age_after_7years(present_age, add_7));
