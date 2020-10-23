import {
  ProxyState
} from "../AppState.js";
import weatherService from "../Services/WeatherService.js";
import Weather from "../models/Weather.js"

function drawWeather() {
  let template = ""
  template = ProxyState.weather.Template
  document.getElementById("weather").innerHTML = template
}
export default class WeatherController {
  constructor() {
    ProxyState.on("weather", drawWeather);
    this.getWeather()
  }

  getWeather() {
    try {
      weatherService.getWeather()
    } catch (e) {
      console.error(e)
    }
  }
}