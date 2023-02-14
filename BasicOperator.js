function basicOp(operation, value1, value2) {
    //code
    // if (operation == "+") return value1 + value2;
    // if (operation == "-") return value1 - value2;
    // if (operation == "*") return value1 * value2;
    // if (operation == "/") return value1 / value2;

    return eval(value1+operation+value2)

}
console.log(basicOp('*',8,3))