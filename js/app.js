
var app = angular.module('Weather', []);




/* http://ipinfo.io/json sample
{
  "ip": ip,
  "hostname": hostname,
  "city": city,
  "region": state,
  "country": country,
  "loc": longitude, latitude,
  "org": ISP,
  "postal": postal code
}
*/
    
/* http://api.openweathermap.org/data
{
    "coord": {
        "lon":longitude,
        "lat":latitude
    },
    "weather":[
        {
            "id":803,
            "main":"Clouds",
            "description":"broken clouds",
            "icon":"04d"
        }
    ],
    "base":"stations",
    "main": {
        "temp":299.99,
        "pressure":1011,
        "humidity":54,
        "temp_min":297.15,
        "temp_max":302.15
    },
    "visibility":16093,
    "wind": {
        "speed":4.1,
        "deg":270
    },
    "clouds": {
        "all":75
    },
    "dt":1493488260,
    "sys": {
        "type":1,
        "id":2390,
        "message":0.1928,
        "country":"US",
        "sunrise":1493459040,
        "sunset":1493509531
    },
    "id":4956184,
    "name":city,
    "cod":200
}

*/