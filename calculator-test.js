// Test suite for the calculator
describe("Calculator Tests", function() {
  
  // Test case: Calculate the monthly rate correctly
  it('should calculate the monthly rate correctly', function () {
    // Define input values for the test case
    const values = {
      amount: 10000,
      years: 5,
      rate: 5
    };
    // Expect the calculated monthly payment to equal '188.71'
    expect(calculateMonthlyPayment(values)).toEqual('188.71');
  });

  // Test case: Return a result with 2 decimal places
  it("should return a result with 2 decimal places", function() {
    // Define input values for the test case
    const values = {
      amount: 15000,
      years: 7,
      rate: 6.5
    };
    // Expect the calculated monthly payment to equal '246.91'
    expect(calculateMonthlyPayment(values)).toEqual('246.91');
  });

  // Test case: Handle zero amount
  it("should handle zero amount", function() {
    // Define input values for the test case
    const values = {
      amount: 0,
      years: 3,
      rate: 4
    };
    // Expect the calculated monthly payment to equal '0.00'
    expect(calculateMonthlyPayment(values)).toEqual('0.00');
  });

  // Test case: Handle zero years
  it("should handle zero years", function() {
    // Define input values for the test case
    const values = {
      amount: 20000,
      years: 0,
      rate: 8
    };
    // Expect the calculated monthly payment to equal 'Infinity'
    expect(calculateMonthlyPayment(values)).toEqual('Infinity');
  });

  // Test case: Handle zero rate
  it("should handle zero rate", function() {
    // Define input values for the test case
    const values = {
      amount: 25000,
      years: 10,
      rate: 0
    };
    // Expect the calculated monthly payment to equal '0.00'
    expect(calculateMonthlyPayment(values)).toEqual('0.00');
  });


});

