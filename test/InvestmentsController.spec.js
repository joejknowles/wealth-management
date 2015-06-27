describe('InvestmentsController', function () {
  var ctrl;

  var mockedItems = [
      {'name': 'Aberdeen Fund', 'value': 1000, 'sector': 'Mixed'},
      {'name': 'Aberystwyth Fund', 'value': 100, 'sector': 'Mixed'},
      {'name': 'Liversedge Fund', 'value': 10, 'sector': 'Agriculture'},
      {'name': 'Brno Fund', 'value': 1000, 'sector': 'IT'},
      {'name': 'Leeds Fund', 'value': 20, 'sector': 'Financial'},
      {'name': 'London Fund', 'value': 2000, 'sector': 'Mixed'}
    ];

  beforeEach(module('RateMyPortfolio'));

  beforeEach(function() {

    availableFundsFactoryMock = {
      list: function() {
        return mockedItems;
      }
    };

    module(function($provide) {
      $provide.value('AvailableFunds', availableFundsFactoryMock);
    });

  });

  beforeEach(inject(function ($controller) {
    ctrl = $controller('InvestmentsController');
  }));

  beforeEach(function () {

    var mockedItems = [
      {'name': 'Aberdeen Fund', 'value': 1000, 'sector': 'Mixed'},
      {'name': 'Aberystwyth Fund', 'value': 100, 'sector': 'Mixed'},
      {'name': 'Liversedge Fund', 'value': 10, 'sector': 'Agriculture'},
      {'name': 'Brno Fund', 'value': 1000, 'sector': 'IT'}
    ];

    ctrl.investments = mockedItems;
  });

  it('returns a list of investments', function () {
    expect(ctrl.investments.length).toEqual(4);
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
    expect(ctrl.diversity()).toBe(0.5);
  });

  it('returns a different diversity index', function () {
    ctrl.investments[3].value = 300000;
    expect(ctrl.diversity()).toBe(0.01);
  });

  it('returns total for each sector', function () {
    expect(ctrl.totalInvestedEachSector()).toEqual({ Mixed: 1100, Agriculture: 10, IT: 1000 });
  });

  it('returns total invested', function () {
    expect(ctrl.totalInvested()).toEqual(2110);
  });

  it('can add a fund to list of investments', function () {
    ctrl.addFund(0);
    expect(ctrl.investments.length).toEqual(5);
  });

});