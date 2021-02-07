const triangleArea = (a, b, c) => {
    let semiParameter = (a + b + c) / 2;
    
    return (Math.sqrt(semiParameter * (semiParameter - a) * (semiParameter - b) * (semiParameter - c)));
}