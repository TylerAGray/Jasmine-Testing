// Event listener for when the DOM content is loaded
window.addEventListener('DOMContentLoaded', function() {
  // Get the form element by its ID
  const form = document.getElementById("calc-form");
  // If the form exists
  if (form) {
    // Initialize the initial values
    setupIntialValues();
    // Add an event listener for form submission
    form.addEventListener("submit", function(e) {
      // Prevent the default form submission behavior
      e.preventDefault();
      // Update the loan calculation
      update();
    });
  }
});

// Function to get the current UI values (loan amount, years, and rate)
function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Function to set up initial values in the UI
function setupIntialValues() {
  // Set default values for loan amount, years, and rate
  document.getElementById("loan-amount").value = 10000;
  document.getElementById("loan-years").value = 5;
  document.getElementById("loan-rate").value = 5;
  // Update the monthly payment based on initial values
  update();
}

// Function to update the UI with the calculated monthly payment
function update() {
  // Get the current UI values
  const values = getCurrentUIValues();
  // Calculate the monthly payment
  const monthlyPayment = calculateMonthlyPayment(values);
  // Update the UI with the calculated monthly payment
  updateMonthly(monthlyPayment);
}

// Function to calculate the monthly payment
function calculateMonthlyPayment(values) {
  // Calculate the monthly interest rate
  const monthlyRate = values.rate / 100 / 12;
  // Calculate the total number of payments
  const numberOfPayments = values.years * 12;
  // Calculate the numerator of the monthly payment formula
  const numerator = values.amount * monthlyRate;
  // Calculate the denominator of the monthly payment formula
  const denominator = 1 - Math.pow(1 + monthlyRate, -numberOfPayments);
  // Calculate the monthly payment
  return (numerator / denominator).toFixed(2);
}

// Function to update the UI with the calculated monthly payment
function updateMonthly(monthly) {
  // Update the UI element displaying the monthly payment
  document.getElementById("monthly-payment").innerText = '$' + monthly;
}
