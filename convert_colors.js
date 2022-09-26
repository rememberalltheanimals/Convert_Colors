// Variables declaration
let Red;
let Green;
let Blue;
let Luminance;


// Assignment from prompt and validate the user input
Red = prompt("Enter Red value between 0.0 and 1.0");
if (Red > 1 || Red < 0) { alert("Enter the number between 0.0 and 1.0");} 

Green = prompt("Enter Green value between 0.0 and 1.0");
if (Green > 1 || Green < 0) { alert("Enter the number between 0.0 and 1.0");}

Blue = prompt("Enter Blue value between 0.0 and 1.0");
if (Blue > 1 || Blue < 0) { alert("Enter the number between 0.0 and 1.0");}

// Conversion to number
Red = parseFloat(Red);
Green = parseFloat(Green);
Blue = parseFloat(Blue);


// Conversion formular
let rho = (1/Red+Green+Blue)*Red;
let gamma = (1/Red+Green+Blue)*Green;
let beta = (1/Red+Green+Blue)*Blue;

Luminance = Math.max(Red, Green, Blue);

let RGB = [Red, Green, Blue];
let rgb = [rho, gamma, beta, Luminance];

// Display
document.write("RGB " + "(" + RGB + ") to rho, gamma, beta and Luminance is " + "(" + rgb + ").");
