function processNumbers() {
    const input = document.getElementById('numbersInput').value;
    const numbers = input.split(',').map(Number);

    // Double the numbers using map
    const doubled = numbers.map(num => num * 2);

    // Filter out numbers less than 10
    const filtered = doubled.filter(num => num >= 10);

    // Sum the numbers using reduce
    const sum = filtered.reduce((acc, num) => acc + num, 0);

    document.getElementById('result').innerText = `Doubled: ${doubled.join(', ')}\nFiltered: ${filtered.join(', ')}\nSum: ${sum}`+" Congrats! YOU have a dynamic personality....";
}
function manipulateString() {
    const input = document.getElementById('userInput').value;
    const substring = input.substring(1, 5); // Extract substring from index 1 to 4
    const splitString = input.split(' '); // Split the string by spaces

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Original String: ${input}</p>
        <p>Extracted Substring (1, 5): ${substring}</p>
        <p>Split String: ${splitString.join(', ')}</p>
    `;
}
