const currentNumber = document.querySelectorAll("#num");
const operatorChoice = document.querySelectorAll("#operator");
const clear = document.querySelector("#clear");
const decimal = document.querySelector("#decimal");
const equal = document.querySelector("#equal");
const displayCurrentNumber = document.querySelector(".displaycurrent");
const displayPastNumber = document.querySelector(".displaypast");

let calculator = {
    currentNum: "",
    previusNum: "",
    operator: "",
    operationList: [],
    
    operate() {
        let result = parseFloat(this.previusNum);
        switch(this.operator) {
            case '+':
                result += parseFloat(this.currentNum);
                break;
            case '-':
                result -= parseFloat(this.currentNum);
                break;
            case 'x':
                result *= parseFloat(this.currentNum);
                break;
            case '/':
                if (parseFloat(this.currentNum) !== 0) {
                    result /= parseFloat(this.currentNum);
                } else {
                    return "Error";
                }
                break;
        }
        return result;
    },

    handleNumber(num) {
        if (calculator.currentNum.length <= 11){
            this.currentNum += num;
            console.log(calculator);
        }
    },

    handleOperator(chooseOperator) {
        if (this.currentNum !== "") {
            if (this.previusNum !== "" && this.operator !== "") {
                const result = this.operate();
                this.previusNum = result;
                this.currentNum = "";
                this.operationList.push(result);
            } else {
                this.previusNum = this.currentNum;
                this.currentNum = "";
                this.operationList.push(this.previusNum);
            }
            this.operationList.push(chooseOperator);
        }
        this.operator = chooseOperator;
        displayPastNumber.textContent = this.operationList.join(' ') + " ";
    },  
};

currentNumber.forEach(button => {
    button.addEventListener("click", () => {
        calculator.handleNumber(button.textContent);
        displayCurrentNumber.textContent = calculator.currentNum;
    })
});

operatorChoice.forEach(button => {
    button.addEventListener("click", () => {
            calculator.handleOperator(button.textContent);
            displayPastNumber.textContent = calculator.previusNum + " " + button.textContent;
            displayCurrentNumber.textContent = calculator.currentNum;
    })
});

decimal.addEventListener("click", () => {
    if(!calculator.currentNum.includes(".")){
        calculator.currentNum += ".";
        displayCurrentNumber.textContent = calculator.currentNum;
    }
});

clear.addEventListener("click", () => {
    const confirmed = confirm("Are you sure you want to clear data?");
    if (confirmed) {
        calculator.currentNum = "";
        calculator.previusNum = "";
        calculator.operator = "";
        displayCurrentNumber.textContent = "";
        displayPastNumber.textContent = "";
    }     
});

equal.addEventListener("click", () => {
    if (calculator.currentNum !== "") {
        calculator.operationList.push(calculator.currentNum);
    }
    const result = calculator.operate();
    displayPastNumber.textContent = "";
    displayCurrentNumber.textContent = result;
    calculator.currentNum = result.toString();
    calculator.operationList = [];
});