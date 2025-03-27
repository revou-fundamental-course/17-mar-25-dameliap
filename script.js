// Function to calculate area and perimeter of a square
function calculateSquare() {
    let side = parseFloat(document.getElementById('squareSide').value);

    // Input validation
    if (isNaN(side) || side <= 0) {
        document.getElementById('squareResult').innerHTML = "<span class='text-danger'>Please enter a valid number greater than 0.</span>";
        return;
    }

    let area = side * side;
    let perimeter = 4 * side;

    let resultDiv = document.getElementById('squareResult');
    resultDiv.innerHTML = 
        `<strong>Calculation:</strong><br>
         Luas = ${side} × ${side} = ${area} cm²<br>
         Keliling = 4 × ${side} = ${perimeter} cm`;

    // Show result with animation
    resultDiv.classList.add("show");
}

// Function to calculate area and perimeter of a rectangle
function calculateRectangle() {
    let length = parseFloat(document.getElementById('rectLength').value);
    let width = parseFloat(document.getElementById('rectWidth').value);

    // Input validation
    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        document.getElementById('rectangleResult').innerHTML = "<span class='text-danger'>Please enter valid numbers greater than 0.</span>";
        return;
    }

    let area = length * width;
    let perimeter = 2 * (length + width);

    let resultDiv = document.getElementById('rectangleResult');
    resultDiv.innerHTML = 
        `<strong>Calculation:</strong><br>
         Luas = ${length} × ${width} = ${area} cm²<br>
         Keliling = 2 × (${length} + ${width}) = ${perimeter} cm`;

    // Show result with animation
    resultDiv.classList.add("show");
}

// Function to reset the square calculator
function resetSquare() {
    document.getElementById('squareSide').value = "";
    document.getElementById('squareResult').innerHTML = "";
    document.getElementById('squareResult').classList.remove("show");
}

// Function to reset the rectangle calculator
function resetRectangle() {
    document.getElementById('rectLength').value = "";
    document.getElementById('rectWidth').value = "";
    document.getElementById('rectangleResult').innerHTML = "";
    document.getElementById('rectangleResult').classList.remove("show");
}