// Function to calculate the value at a given row and column
function calculateValue() {
    const row = parseInt(document.getElementById('row').value);
    const col = parseInt(document.getElementById('col').value);
    const rows = 225; // Total rows in the grid

    // Calculate the value based on the formula
    const value = (col * rows) + row;
    
    // Display the result
    document.getElementById('result').innerText = value;
}
