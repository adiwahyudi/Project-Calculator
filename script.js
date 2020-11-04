// Ketika tombol ditekan akan merubah layar
const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click",(event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
        console.log("screen updated!")
    })
})

// Function yang merubah value di layar
const calculatorScreen  = document.querySelector(".calculator-screen")
const updateScreen = (number) => {
    calculatorScreen.value = number
}

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) =>{
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) =>{
    prevNumber = currentNumber
    calculationOperator = operator
    currentNumber = ''
}

//Tanda Sama Dengan ('=')

const equalSign = document.querySelector(".equal-sign")

equalSign.addEventListener('click', () =>{
    calculate()
    updateScreen(currentNumber)
    console.log('equal sign is pressed')
})

//Kalkulasi 

const calculate = () =>{
    let result = ''
    switch(calculationOperator){
        case "+":
            result = parseInt(prevNumber) + parseInt(currentNumber)
            break
        case "-":
            result = prevNumber - currentNumber
            break
        case "*":
            result = prevNumber * currentNumber
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ''
}

//All-Clear a.k.a AC

const clearBtn = document.querySelector(".all-clear")

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
    console.log('all set clear!')
})

const clearAll = () =>{
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

//Make it Decimal!

const decimal = document.querySelector('.decimal')

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
    console.log('decimal clicked')
})