describe('Shop Listings Feature', function () {

  beforeEach(function () {
    browser.get('http://localhost:8080');
  });

  it('page has a title', function () {
    expect(browser.getTitle()).toEqual('RateMyPortfolio');
  });


});