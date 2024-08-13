const apiKey = '602ec6e4e8e94f06b6a194623241308'; // Your actual API key
const city = 'Daska'; // City name
const requestURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

fetch(requestURL)
    .then(response =>  response.json())
    .then(data => {
        console.log('Weather Data:', data);
    })
    .catch(error => {
        console.error('There was an error!', error);
    });


    /*
    Weather Data: {
  location: {
    name: 'Daska',
    region: 'Punjab',
    country: 'Pakistan',
    lat: 32.33,
    lon: 74.35,
    tz_id: 'Asia/Karachi',
    localtime_epoch: 1723578434,
    localtime: '2024-08-14 00:47'
  },
  current: {
    last_updated_epoch: 1723578300,
    last_updated: '2024-08-14 00:45',
    temp_c: 30,
    temp_f: 86,
    is_day: 0,
    condition: {
      text: 'Patchy rain nearby',
      icon: '//cdn.weatherapi.com/weather/64x64/night/176.png',
      code: 1063
    },
    wind_mph: 5.6,
    wind_kph: 9,
    wind_degree: 133,
    wind_dir: 'SE',
    pressure_mb: 1003,
    pressure_in: 29.61,
    precip_mm: 0.1,
    precip_in: 0,
    humidity: 71,
    cloud: 70,
    feelslike_c: 35.2,
    feelslike_f: 95.3,
    windchill_c: 30,
    windchill_f: 86,
    heatindex_c: 35.2,
    heatindex_f: 95.3,
    dewpoint_c: 24.1,
    dewpoint_f: 75.4,
    vis_km: 10,
    vis_miles: 6,
    uv: 1,
    gust_mph: 8.7,
    gust_kph: 14
  }
}
PS D:\JSFINAL>













    */