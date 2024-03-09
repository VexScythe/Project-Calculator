/*let firstNum = "2",
    secondNum = "3",
    operator = "";*/

class Calculator{
    constructor(firstNumber, secondNumber){
        this.firstNum = Number(firstNumber);
        this.secondNum = Number(secondNumber);
    }

    add() {
        return this.firstNum + this.secondNum;
    }

    subtract () {
        return this.firstNum - this.secondNum;
    }

    multiply () {
        return this.firstNum * this.secondNum;
    }

    divide () {
        if (this.secondNum !== 0){
            return parseFloat((this.firstNum / this.secondNum).toFixed(6));
        }
        return "error";
    }
}

/*let calculator = new Calculator("2", "4");

console.log(calculator);
console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());
console.log(calculator.divide());*/

