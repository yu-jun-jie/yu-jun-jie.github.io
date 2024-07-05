// 清除输入
function clearDisplay() {
    document.getElementById('display').value = '';
}

// 获取输入
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// 减去一个输入
function deleteLastInput() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

//计算结果
function calculateResult() {
    try {
        // 计算表达式
        const result = eval(document.getElementById('display').value);
        //记录日志
        // console.log(`${document.getElementById('display').value}=${result}`);
        logMessage(`${document.getElementById('display').value}=${result}`);
        //更新显示
        document.getElementById('display').value = parseFloat(result.toFixed(10));

    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

//打印日志
function logMessage( details) {
    const logTable = document.getElementById('logTable').getElementsByTagName('tbody')[0];
    const newRow = logTable.insertRow();

    const timeCell = newRow.insertCell(0);
    const detailsCell = newRow.insertCell(1);

    const now = new Date();
    timeCell.textContent = now.toLocaleTimeString('default', { hour12: false });
    detailsCell.textContent = details;
}