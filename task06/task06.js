const maximum = (...numbers) => {
    let temp = 0;

    for (let v = 0; v < numbers.length; v++) {
        if  (typeof numbers[v] !== "number") {
            return "Error: Input numbers only!!"
        }
        
        if (temp < numbers[v]) {
            temp = numbers[v];
        }
    }
    return temp;
}