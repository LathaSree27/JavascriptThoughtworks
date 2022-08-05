var names = ["Latha", "Vaishnavi", "Meghana"];

forEachFun = (namesArray, printToOutput) => {
    for(var i = 0 ; i < namesArray.length ; i++) {
        printToOutput(namesArray[i]);
    }
};

printName = item => console.log(item);
forEachFun(names, printName);
