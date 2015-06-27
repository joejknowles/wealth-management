var rateMyPortfolio = angular.module('RateMyPortfolio', ['ngResource']);

rateMyPortfolio.controller('InvestmentsController', [function () {
  var self = this;

  self.investments = [
    {'name': 'Aberdeen Fund', 'value': 1000, 'sector': 'Mixed'},
    {'name': 'Aberystwyth Fund', 'value': 100, 'sector': 'Mixed'},
    {'name': 'Liversedge Fund', 'value': 10, 'sector': 'Agriculture'},
    {'name': 'Brno Fund', 'value': 1000000, 'sector': 'IT'},
    {'name': 'Leeds Fund', 'value': 20, 'sector': 'Financial'},
    {'name': 'London Fund', 'value': 2000, 'sector': 'Mixed'}
  ];

  self.diversity = function () {
    var total = 0;
    for (var sectorName in self.totalInvestedEachSector()) {
      var proportion = self.findSectorProportion(sectorName);
      total += (proportion * proportion);
    };
    return parseFloat((1 - total).toFixed(2));
  };

  self.findSectorProportion = function (sectorName) {
    return self.totalInvestedEachSector()[sectorName] / self.totalInvested();
  };

  self.totalInvestedEachSector = function () {
    var sectors = {};
    for (i = 0; i < self.investments.length; i++) {
      investment = self.investments[i]
      if (!sectors[investment.sector]) {
        sectors[investment.sector] = 0;
      }
      sectors[investment.sector] += investment.value;
    }
    return sectors;
  };

  self.totalInvested = function () {
    var total = 0;
    for (var sector in self.totalInvestedEachSector()) {
      total += self.totalInvestedEachSector()[sector];
    }
    return total;
  };

}]);