app.controller('MainController', function($scope, WeatherApi) {
  $scope.today = new Date();
  $scope.Data = {};
  $scope.Data.unit ='C';
  $scope.Data.sysChange = false;
  WeatherApi.getLoc().success(function(data) {
    var location = data.city + ',' + data.country;
    $scope.Data.city = data.city;
    $scope.Data.country = data.country;
    WeatherApi.getCurrent(location).success(function(data) {
      CurrentWeather(data)
    });
  });

  function CurrentWeather(data) {
    $scope.Data.temp = Math.round(data.main.temp);
    $scope.Data.Cel = Math.round(data.main.temp);
    $scope.Data.icon = data.weather[0].icon;
    $scope.Data.description = data.weather[0].description;
    $scope.Data.Fah = Math.round( ($scope.Data.temp * 9)/5 + 32 );
  }

  $scope.Data.sys= function(){
   if($scope.Data.sysChange){
     $scope.Data.unit ='C';
     $scope.Data.temp = $scope.Data.Cel;
     return $scope.Data.sysChange = false;
     }
    $scope.Data.unit ='F';
    $scope.Data.temp = $scope.Data.Fah;
    return $scope.Data.sysChange = true;
  }
  
  
});