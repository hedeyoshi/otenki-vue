'use strict';

import key from './key.js';
console.log(key);

var app = new Vue({
  el: '#app',
  data: {
    city: null, //地域名
    temp: null, //気温
    condition: {
      main: null //天候名
    }
  },
  mounted: function () {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Osaka,jp&units=metric&appid=' + key)
      .then(function (response) {
        this.city = response.data.name
        this.temp = response.data.main.temp
        this.condition = response.data.weather[0]
      }.bind(this))
      .catch(function (error) {
        console.log(error)
      })
  },
  filters: {
    roundUp(value) {
      return Math.ceil(value)
    }
  }
})







