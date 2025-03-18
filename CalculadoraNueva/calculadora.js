function obtenerValores() {
    const a = parseInt(document.getElementById("display").value);
    return { a };
}

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch {
        document.getElementById("display").value = "Error";
    }
}

function factorial() {
    const { a } = obtenerValores();
    if (isNaN(a) || a < 0) {
        document.getElementById("display").value = "Error";
        return;
    }
    let result = 1;
    for (let i = 2; i <= a; i++) result *= i;
    document.getElementById("display").value = result;
}