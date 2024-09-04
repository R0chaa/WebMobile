// 1. Ordenação de um array de números
let numbers = [34, 7, 23, 32, 5, 62];

// Ordenando em ordem crescente
numbers.sort((a, b) => a - b);
console.log("Ordem crescente:", numbers);

// Ordenando em ordem decrescente
numbers.sort((a, b) => b - a);
console.log("Ordem decrescente:", numbers);


// 2. Filtrando maiores de idade
let ages = [18, 21, 14, 45, 30, 17];

// Filtrar maiores de idade (idade >= 18)
let adults = ages.filter(age => age >= 18);
console.log("Maiores de idade:", adults);


// 3. Multiplicando cada número por 2
let numbersToDouble = [1, 2, 3, 4];

// Multiplicando cada número por 2
let doubled = numbersToDouble.map(num => num * 2);
console.log("Números dobrados:", doubled);


// 4. Somando todos os números
let numbersToSum = [10, 20, 30, 40];

// Somando todos os números
let sum = numbersToSum.reduce((total, current) => total + current, 0);
console.log("Soma dos números:", sum);


// 5. Utilizando o operador spread para combinar arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// Combinando arrays
let combined = [...array1, ...array2];
console.log("Arrays combinados:", combined);

// Copiando um array
let copy = [...array1];
console.log("Cópia do array:", copy);
