const request = require('request');

const forecast = (latitude, logitude, callback) => {
  const url = 'https://api.darksky.net/forecast/a127b322ca6e2567a9e6f6ef65becb51/'+ latitude + ',' + logitude;

  request({ url, json: true}, (error, {body}) => {
    if (error) {
      callback('Unable to connect to wether services!', undefined)
    } else if (body.error) {
      callback('Unable to find location.', undefined)
    } else {
      callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. The high today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow +'. There is a ' + body.currently.precipProbability +'% chance of rain.' )
    }
  })
}

module.exports = forecast