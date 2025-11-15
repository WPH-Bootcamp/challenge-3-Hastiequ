// code here, goodluck!!

'use strict';

const prompt = require('prompt-sync')();  // Mengimpor prompt-sync

// 1. Fungsi untuk meminta input angka yang valid
function getValidNumberInput(promptMessage) {
    let input;
    while (true) {
        input = prompt(promptMessage);       // meminta input dari pengguna
        let number = Number(input);          // konversi eksplisit

        if (!isNaN(number)) {                // cek apakah input valid sebagai angka
            return number;
        }

        console.log("Input tidak valid. Masukkan angka yang benar.");
    }
}

// 2. Fungsi untuk meminta operator yang valid
function getValidOperatorInput(promptMessage) {
    const validOperators = ["+", "-", "*", "/", "%", "**"];
    let input;
    
    while (true) {
        input = prompt(promptMessage);  // meminta input dari pengguna
        
        if (validOperators.includes(input)) {   // cek apakah operator valid
            return input;
        }
        
        console.log("Operator tidak valid. Gunakan: +, -, *, /, %, **");
    }
}

// 3. Fungsi untuk operasi aritmatika dasar
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { 
    if (b === 0) {
        return "Error: Division by zero!";
    }
    return a / b;
}
function modulo(a, b) { return a % b; }
function power(a, b) { return a ** b; }

// 4. Fungsi utama untuk kalkulator
function calculator() {
    while (true) {
        let num1 = getValidNumberInput("Masukkan angka pertama: ");
        let operator = getValidOperatorInput("Masukkan operator (+, -, *, /, %, **): ");
        let num2 = getValidNumberInput("Masukkan angka kedua: ");

        // Menentukan operasi berdasarkan operator yang dipilih
        let result;
        switch (operator) {
            case "+":
                result = add(num1, num2);
                break;
            case "-":
                result = subtract(num1, num2);
                break;
            case "*":
                result = multiply(num1, num2);
                break;
            case "/":
                result = divide(num1, num2);
                break;
            case "%":
                result = modulo(num1, num2);
                break;
            case "**":
                result = power(num1, num2);
                break;
        }

        // Menampilkan hasil perhitungan
        console.log(`Hasil: ${result}`);

        // Menganalisis hasil
        analyzeResult(result);

        // Menanyakan apakah pengguna ingin melanjutkan
        let continueCalc = prompt("Apakah Anda ingin melakukan perhitungan lain? (ya/tidak): ").toLowerCase();
        if (continueCalc === 'tidak') {
            break;
        }
    }
}

// 5. Fungsi untuk menganalisis hasil perhitungan
function analyzeResult(result) {
    if (typeof result === 'number') {
        // Mengecek apakah angka positif, negatif, atau nol
        if (result > 0) {
            console.log("Angka positif.");
        } else if (result < 0) {
            console.log("Angka negatif.");
        } else {
            console.log("Angka nol.");
        }

        // Mengecek apakah angka tersebut integer atau floating-point
        if (Number.isInteger(result)) {
            console.log("Angka adalah integer.");
        } else {
            console.log("Angka adalah floating-point.");
        }

        // Mengecek apakah angka genap atau ganjil menggunakan ternary operator
        console.log(result % 2 === 0 ? "Angka genap." : "Angka ganjil.");
    } else if (typeof result === 'string') {
        // Menampilkan pesan error jika ada
        console.log(result);  // Error message: "Error: Division by zero!"
    } else {
        // Menggunakan Nullish Coalescing untuk menangani undefined atau null
        console.log(result ?? "Hasil tidak valid atau terjadi kesalahan.");
    }
}

// 6. Memulai kalkulator
calculator();
