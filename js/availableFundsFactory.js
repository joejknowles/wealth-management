rateMyPortfolio.factory('AvailableFunds', [function() {

  var all = [
    {'name': 'Aberdeen Fund', 'value': 1000, 'sector': 'Mixed'},
    {'name': 'Aberystwyth Fund', 'value': 100, 'sector': 'Mixed'},
    {'name': 'Liversedge Fund', 'value': 10, 'sector': 'Agriculture'},
    {'name': 'Brno Fund', 'value': 1000, 'sector': 'IT'},
    {'name': 'Leeds Fund', 'value': 20, 'sector': 'Financial'},
    {'name': 'London Fund', 'value': 2000, 'sector': 'Mixed'}
  ];

  return {
    list: function() {
      return all;
    }
  };


}]);
