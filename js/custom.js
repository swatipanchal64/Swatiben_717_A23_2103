function convertToUSD() {
    const cadInput = document.getElementById('cadInput').value;
    const resultElement = document.getElementById('result');

    resultElement.textContent = ``;

    if (!isValidNumber(cadInput)) {
        resultElement.textContent = 'Please enter a valid number for Canadian Dollars.';
        return;
    }

    const exchangeRate = 0.75; // Hardcoded exchange rate
    const usdAmount = parseFloat(cadInput) * exchangeRate;
    document.getElementById('usdInput').value = usdAmount.toFixed(3);
}

function convertToCAD() {
    const usdInput = document.getElementById('usdInput').value;
    const resultElement = document.getElementById('result');

    resultElement.textContent = ``;

    if (!isValidNumber(usdInput)) {
        resultElement.textContent = 'Please enter a valid number for US Dollars.';
        return;
    }

    const exchangeRate = 1.33; // Hardcoded exchange rate
    const cadAmount = parseFloat(usdInput) * exchangeRate;

    document.getElementById('cadInput').value = cadAmount.toFixed(3);
}

function isValidNumber(input) {
    return !isNaN(input) && input.trim() !== '';
}
