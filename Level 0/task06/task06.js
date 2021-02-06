// const maxNumber = (a, b, c) => {
//     if (a > b && a > c) return a;
//     else if (b > a && b > c) return b;
//     else return c;
// }

const maximum = (...numbers) => {
    let temp;

    for (let v = 1; v < numbers.length; v++) {
        if  (typeof numbers[v] !== "number") {
            return "Error: Input numbers only!!"
        }
        
        temp = numbers[0];
        if (temp < numbers[v]) {
            temp = numbers[v];
        }
    }
    return temp;
}