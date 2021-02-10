const toFahrenheit = (celsius) => {
    return (((9 / 5) * celsius) + 32);
}

const toCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * (5 / 9));
}

console.log(toFahrenheit(35));
console.log(toCelsius(95));