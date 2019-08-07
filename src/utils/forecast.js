const request = require('request');

const forecast = (latitude, logitude, callback) => {
  const url = 'https://api.darksky.net/forecast/a127b322ca6e2567a9e6f6ef65becb51/'+ latitude + ',' + logitude;

  request({ url: url, json: true}, (error, response) => {
    if (error) {
      callback('Unable to connect to wether services!', undefined)
    } else if (response.body.error) {
      callback('Unable to find location.', undefined)
    } else {
      callback(undefined, response.body.daily.data[0].summary)
    }
  })
}

module.exports = forecast