const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//사용자 입력 부분
function getUserNumInput() {
  return parseInt(userInput.value);
}

//계산 로그 생성 및 보여주기
function createAndWriteoutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor.js
}

//로그 기록
function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    newResult: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNum = getUserNumInput();
  const initialResult = currentResult;
  currentResult += enteredNum;
  createAndWriteoutput('+', initialResult, enteredNum);
  writeToLog('ADD', initialResult, enteredNum, currentResult);
}

function subtract() {
  const enteredNum = getUserNumInput();
  const initialResult = currentResult;
  currentResult -= enteredNum;
  createAndWriteoutput('-', initialResult, enteredNum);
  writeToLog('SUBTRACT', initialResult, enteredNum, currentResult);
}

function multiply() {
  const enteredNum = getUserNumInput();
  const initialResult = currentResult;
  currentResult *= enteredNum;
  createAndWriteoutput('*', initialResult, enteredNum);
  writeToLog('MULTIPLY', initialResult, enteredNum, currentResult);
}

function divide() {
  const enteredNum = getUserNumInput();
  const initialResult = currentResult;
  currentResult /= enteredNum;
  createAndWriteoutput('/', initialResult, enteredNum);
  writeToLog('DIVIDE', initialResult, enteredNum, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
