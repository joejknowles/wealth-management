describe('Portfolio Feature', function () {

  var investments;
  var availableFunds;

  beforeEach(function () {
    browser.get('http://localhost:8080');
    availableFunds = element.all(by.repeater('fund in FundsAvailable.list'));
    investments = element.all(by.repeater('fund in Investments.investments'));
    availableFunds.get(0).$('#add').click();
    availableFunds.get(1).$('#add').click();

  });

  it('shows user a list of their investments', function () {
    expect(investments.get(0).getText()).toContain('Aberdeen Fund');
    expect(investments.get(1).getText()).toContain('Aberystwyth Fund');
  });

  it('user can add a investment', function () {
    availableFunds.get(0).$('#add').click();
    expect(investments.get(0).getText()).toContain('Aberdeen Fund')
  });

  it('shows the name of each of the users investments', function () {
    expect(investments.get(0).$('#fundTitle').getText()).toContain('Aberdeen Fund');
  });

  it('shows the value of each investment', function () {
    expect(investments.get(0).$('#amountInvested').getText()).toContain('£1000');
  });

  it('shows the sector of each investment', function () {
    expect(investments.get(0).$('#sector').getText()).toContain('Mixed');
  });
});