describe('InvestmentsController', function () {
  var ctrl;

  beforeEach(module('RateMyPortfolio'));

  beforeEach(inject(function ($controller) {
    ctrl = $controller('InvestmentsController');
  }));

  it('returns a list of investments', function () {
    expect(ctrl.investments.length).toEqual(6);
  });

  it('investments have a name', function () {
    expect(ctrl.investments[0].name).toEqual('Aberdeen Fund');
  });

  it('investments have an value', function () {
    expect(ctrl.investments[0].value).toEqual(1000);
  });

  it('investments have a sector', function () {
    expect(ctrl.investments[0].sector).toContain('Mixed');
  });

  it('returns a diversity index', function () {
    expect(ctrl.diversity()).toBe(0.01);
  });

  it('returns a different diversity index', function () {
    ctrl.investments[3].value = 300000;
    expect(ctrl.diversity()).toBe(0.02);
  });

  it('returns total for each sector', function () {
    expect(ctrl.totalInvestedEachSector()).toEqual({ Mixed: 3100, Agriculture: 10, IT: 1000000, Financial: 20 });
  });

  it('returns total invested', function () {
    expect(ctrl.totalInvested()).toEqual(1003130);
  });

});