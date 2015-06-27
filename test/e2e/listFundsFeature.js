describe('Fund Listings Feature', function () {

  var investments;

  beforeEach(function () {
    browser.get('http://localhost:8080');
    investments = element.all(by.repeater('fund in Investments.investments'));
  });

  it('page has a title', function () {
    expect(browser.getTitle()).toEqual('RateMyPortfolio');
  });

  it('shows a list of investments', function () {
    expect(investments.get(0).getText()).toContain('Aberdeen Fund');
    expect(investments.get(1).getText()).toContain('Aberystwyth Fund');
  });

  it('shows the name of an investment', function () {
    expect(investments.get(0).$('#fundTitle').getText()).toContain('Aberdeen Fund');
  });

  it('shows the value of an investment', function () {
    expect(investments.get(0).$('#amountInvested').getText()).toContain('£1000');
  });

  it('shows the sector of an investment', function () {
    expect(investments.get(0).$('#sector').getText()).toContain('Mixed');
  });
});