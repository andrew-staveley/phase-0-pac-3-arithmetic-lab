function add(valueOne, valueTwo) {
    return valueOne + valueTwo;
}

function subtract(valueOne, valueTwo) {
    return valueOne - valueTwo;
}

function multiply(valueOne, valueTwo) {
    return valueOne * valueTwo;
}

function divide(valueOne, valueTwo) {
    return valueOne / valueTwo;
}

function increment(bolognaCount) {
    bolognaCount++;
    return bolognaCount;
}

function decrement(salamiCount) {
    salamiCount--;
    return salamiCount;
}

function makeInt(value) {
    return parseInt(value, 10);
}

function preserveDecimal(value) {
    return parseFloat(value);
}

add(1, 2);
subtract(1, 2);
multiply(1, 2);
divide(1, 2);
increment(0);
decrement(720);
makeInt("0.012");
preserveDecimal("12.4");