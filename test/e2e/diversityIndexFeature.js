describe('Fund Listings Feature', function () {

  var availableFunds;

  beforeEach(function () {
    browser.get('http://localhost:8080');
    availableFunds = element.all(by.repeater('fund in FundsAvailable.list'));
  });

  it('shows a diversity index', function() {
    availableFunds.get(0).$('#add').click();
    availableFunds.get(1).$('#add').click();
    availableFunds.get(2).$('#add').click();
    expect($('#diversityIndex').getText()).toContain('Diversity Index: 0.02');
  });

});