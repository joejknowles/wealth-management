rateMyPortfolio.controller('AvailableFundsController', ['AvailableFunds', function (AvailableFunds) {
  var self = this;

  self.list = function() {
    return AvailableFunds.list();
  };


}]);