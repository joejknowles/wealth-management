describe('Available Funds Listings Feature', function () {

  var availableFunds;

  beforeEach(function () {
    browser.get('http://localhost:8080');
    availableFunds = element.all(by.repeater('fund in FundsAvailable.list'));
  });

  it('shows a list of available funds', function () {
    expect(availableFunds.get(0).getText()).toContain('Aberdeen Fund');
    expect(availableFunds.get(1).getText()).toContain('Aberystwyth Fund');
  });

  it('shows the name of an investment', function () {
    expect(availableFunds.get(0).$('#fundTitle').getText()).toContain('Aberdeen Fund');
  });

  it('shows the value of an investment', function () {
    expect(availableFunds.get(0).$('#amountInvested').getText()).toContain('£1000');
  });

  it('shows the sector of an investment', function () {
    expect(availableFunds.get(0).$('#sector').getText()).toContain('Mixed');
  });
});