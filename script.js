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
    
    operate() {
        switch(this.operator){
            case "+": 
                return Number(this.previusNum) + Number(this.currentNum);
                break;
            case "-":
                return this.previusNum - this.currentNum;
                break;
            case "x":
                return this.previusNum * this.currentNum;
                break;
            case "/":
                if (this.currentNum !== "0"){
                    return parseFloat((this.previusNum / this.currentNum).toFixed(6));
                }else  return "error";
                break;
            }
    },

    handleNumber(num) {
        if (calculator.currentNum.length <= 16){
            this.currentNum += num;
            console.log(calculator);
        }
    },

    handleOperator(chooseOperator) {
        this.operator = chooseOperator;
        this.previusNum = this.currentNum;
        this.currentNum = "";
        console.log(calculator);
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
    const result = calculator.operate();
    displayPastNumber.textContent = "";
    displayCurrentNumber.textContent = result;
    calculator.currentNum = result;
});