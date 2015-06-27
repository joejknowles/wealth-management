describe('Fund Listings Feature', function () {

  var investments;

  beforeEach(function () {
    browser.get('http://localhost:8080');
    investments = element.all(by.repeater('fund in Investments.investments'));
  });

  it('shows a diversity index', function() {
    expect($('#diversityIndex').getText()).toContain('Diversity Index: 0.38');
  });

});