export default class Weather {
  constructor(data) {

    this.city = data.name
    this.kelvin = data.main.temp
    this.f = Math.round((this.kelvin - 273.15) * (9 / 5) + 3)
  }

  get Template() {
    return /*html*/ `
    <div class="row mt-3">
    <div class="col-2"><i class="fas fa-cloud-sun"></i></div>
    <div class="col-2">
    <h6>${this.f}&deg</h6>
    <p>${this.city}</p>
    </div>
    </div>

    `
  }
}