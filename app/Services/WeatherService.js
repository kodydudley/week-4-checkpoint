import {
  ProxyState
} from "../AppState.js";
import Weather from "../models/Weather.js";
import {
  api
} from "./AxiosService.js";

class WeatherService {
  async getWeather() {
    let res = await api.get('weather');
    ProxyState.weather = new Weather(res.data);
  }
}

const weatherService = new WeatherService();
export default weatherService;