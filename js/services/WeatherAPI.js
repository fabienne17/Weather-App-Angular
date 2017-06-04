app.factory('WeatherApi', function($http) {
  var obj = {};
  
  obj.getLoc = function() {
    return $http.jsonp("http://ipinfo.io/json?callback=JSON_CALLBACK");
  };

  obj.getCurrent = function(location) {
    var api = "http://api.openweathermap.org/data/2.5/weather?q=";
    var units = "&units=metric";
    var appid = "&APPID=270b0d34f396611a7ab9e9cfc825e5e5";
    var callback = "&callback=JSON_CALLBACK";
    
    return $http.jsonp(api + location + units + appid + callback);
  };

  return obj

});