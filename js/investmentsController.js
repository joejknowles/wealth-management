rateMyPortfolio.controller('InvestmentsController', ['AvailableFunds', function (AvailableFunds) {
  var self = this;

  self.investments = [
  ];

  self.addFund = function (fund_index) {
    self.investments.push(AvailableFunds.list()[fund_index]);
  }

  self.diversity = function () {
    var total = 0;
    var totalInvestedEachSector = self.totalInvestedEachSector();
    for (var sectorName in totalInvestedEachSector) {
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
    for ( var i = 0; i < self.investments.length; i++) {
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