// Describe block for the Payments test suite
describe("Payments test (with setup and tear-down)", function() {

    // Before each test, set up initial values for bill amount and tip amount
    beforeEach(function () {
      billAmtInput.value = '100';
      tipAmtInput.value = '20';
    });
  
    // Test case: should add a new payment to allPayments on submitPaymentInfo()
    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
      submitPaymentInfo();
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['payment1'].billAmt).toEqual('100');
      expect(allPayments['payment1'].tipAmt).toEqual('20');
      expect(allPayments['payment1'].tipPercent).toEqual(20);
    });
  
    // Test case: should not add a new payment if billAmt is empty
    it('should not add a new payment if billAmt is empty', function () {
      billAmtInput.value = '';
      submitPaymentInfo();
      expect(Object.keys(allPayments).length).toEqual(0);
    });
  
    // Test case: should not add a new payment if tipAmt is empty
    it('should not add a new payment if tipAmt is empty', function () {
      tipAmtInput.value = '';
      submitPaymentInfo();
      expect(Object.keys(allPayments).length).toEqual(0);
    });
  
    // Test case: should not add a new payment if billAmt and tipAmt are empty
    it('should not add a new payment if billAmt and tipAmt are empty', function () {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      submitPaymentInfo();
      expect(Object.keys(allPayments).length).toEqual(0);
    });
  
    // Test case: should update the payment table when new payment is added
    it('should update the payment table when new payment is added', function () {
      submitPaymentInfo();
      const paymentRow = document.querySelector('#paymentTable tbody tr');
      expect(paymentRow.cells[0].innerText).toEqual('$100');
      expect(paymentRow.cells[1].innerText).toEqual('$20');
      expect(paymentRow.cells[2].innerText).toEqual('20%');
    });
  
    // After each test, reset input values and clear tables
    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    });
});
