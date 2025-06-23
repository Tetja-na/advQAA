function divide (numerator, denominator) {
    if (typeof numerator !== "number" || typeof denominator !== "number")
{
    throw new Error ("Both arguments must be numbers");
}
if (denominator ===0) {
    throw new Error ("Cannot divide by zero");
}
return numerator / denominator;
}
[
    [10, 2],
    [5, 0],
    ["10" , 2]
].forEach(([a , b]) => {
    try {
        console.log("Result:", divide(a, b));
    } catch (err) {
        console.log("Error:", err.message);
    } finally {
        console.log("Aufgabe ist zu Ende\n");
    }
}
);