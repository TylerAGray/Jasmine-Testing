// Describe block for the Helpers test suite
describe("Helpers Tests (with setup and tear-down)", function() {

    // Before each test case, set up initial values and submit a payment
    beforeEach(function () {
        // Set initial bill and tip amounts
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        // Submit payment information
        submitPaymentInfo();
    });

    // Test case: should sum total tip amount of all payments on sumPaymentTotal()
    it('should sum total tip amount of all payments on sumPaymentTotal()', function () {
        // Expect total tip amount to be 20
        expect(sumPaymentTotal('tipAmt')).toEqual(20);

        // Update bill and tip amounts and submit another payment
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
        submitPaymentInfo();

        // Expect total tip amount to be 60
        expect(sumPaymentTotal('tipAmt')).toEqual(60);
    });

    // Test case: should sum total bill amount of all payments on sumPaymentTotal()
    it('should sum total bill amount of all payments on sumPaymentTotal()', function () {
        // Expect total bill amount to be 100
        expect(sumPaymentTotal('billAmt')).toEqual(100);

        // Update bill and tip amounts and submit another payment
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
        submitPaymentInfo();

        // Expect total bill amount to be 300
        expect(sumPaymentTotal('billAmt')).toEqual(300);
    });

    // Test case: should sum total tip percent on sumPaymentTotal()
    it('should sum total tip percent on sumPaymentTotal()', function () {
        // Expect total tip percent to be 20
        expect(sumPaymentTotal('tipPercent')).toEqual(20);

        // Update bill and tip amounts and submit another payment
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();

        // Expect total tip percent to be 40
        expect(sumPaymentTotal('tipPercent')).toEqual(40);
    });

    // Test case: should sum tip percent of a single tip on calculateTipPercent()
    it('should sum tip percent of a single tip on calculateTipPercent()', function () {
        // Expect tip percent to be calculated correctly for different bill and tip amounts
        expect(calculateTipPercent(100, 23)).toEqual(23);
        expect(calculateTipPercent(111, 11)).toEqual(10);
    });

    // Test case: should generate new td from value and append to tr on appendTd(tr, value)
    it('should generate new td from value and append to tr on appendTd(tr, value)', function () {
        // Create a new table row
        let newTr = document.createElement('tr');

        // Call appendTd function to append a new table cell with the value 'test'
        appendTd(newTr, 'test');

        // Expect the table row to have one cell with the value 'test'
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
    });

    // Test case: should generate delete td and append to tr on appendDeleteBtn(tr, type)
    it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function () {
        // Create a new table row
        let newTr = document.createElement('tr');

        // Call appendDeleteBtn function to append a delete button to the table row
        appendDeleteBtn(newTr);

        // Expect the table row to have one cell with the delete button ('X')
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
    });

    // After each test case, reset input values and clear tables
    afterEach(function() {
        // Reset input values
        billAmtInput.value = '';
        tipAmtInput.value = '';
        // Clear payment table body
        paymentTbody.innerHTML = '';
        // Clear summary table cells
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        // Clear server table body
        serverTbody.innerHTML = '';
        // Reset payments data
        allPayments = {};
        paymentId = 0;
    });
});
