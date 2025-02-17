// Function to calculate the value at a given row and column
function calculateValue() {
    // Get the values for row and column from the input fields
    const row = parseInt(document.getElementById('row').value);
    const col = parseInt(document.getElementById('col').value);
    
    // Check if the row and column values are valid numbers
    if (isNaN(row) || isNaN(col)) {
        alert("Please enter valid row and column numbers.");
        return;
    }

    const rows = 225;  // Total rows in the grid

    // Calculate the value based on the formula
    const value = (col * rows) + row;
    
    // Update the result on the webpage
    document.getElementById('result').innerText = value;
}

// Function to toggle between dark and light modes
function toggleDarkMode() {
    const body = document.body;
    const darkModeButton = document.getElementById('darkModeToggle');

    body.classList.toggle('dark-mode');
    
    // Toggle the button text between 'Dark Mode' and 'Light Mode'
    if (body.classList.contains('dark-mode')) {
        darkModeButton.innerText = 'Switch to Light Mode';
    } else {
        darkModeButton.innerText = 'Switch to Dark Mode';
    }
}
