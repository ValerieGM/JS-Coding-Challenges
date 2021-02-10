const triangleArea = (a, b, c) => {
    let semiParameter = (a + b + c) / 2;
    
    return (Math.sqrt(semiParameter * (semiParameter - a) * (semiParameter - b) * (semiParameter - c)));
}

console.log(triangleArea(6, 7, 9));