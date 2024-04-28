describe("Servers test (with setup and tear-down)", function() {

  beforeEach(function () {
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server if serverName is empty', function () {
    serverNameInput.value = ''; // Set serverNameInput to an empty string
    submitServerInfo(); // Call submitServerInfo function
    expect(Object.keys(allServers).length).toEqual(0); // Expect no server to be added
  });

  it('should correctly calculate the average tip amount per server', function () {
    // Add multiple servers with different tip amounts
    serverNameInput.value = 'Bob';
    submitServerInfo();
    allPayments['payment1'] = { tipAmt: 10 }; // Add payment for server Alice
    allPayments['payment2'] = { tipAmt: 20 }; // Add payment for server Bob
    updateServerTable(); // Update the server table
    expect(document.getElementById('server1').cells[1].innerText).toEqual('$10.00'); // Check Alice's average tip
    expect(document.getElementById('server2').cells[1].innerText).toEqual('$20.00'); // Check Bob's average tip
  });

  it('should not calculate the average tip if there are no payments', function () {
    // Add a server with no payments
    serverNameInput.value = 'Charlie';
    submitServerInfo();
    updateServerTable(); // Update the server table
    expect(document.getElementById('server3').cells[1].innerText).toEqual('$0.00'); // Expect average tip to be $0.00
  });

  afterEach(function() {
    // teardown logic
  });
});
