export default class Image {
  constructor(data) {
    this.image = data.url
    this.id = data.id
  }


  get Template() {
    return /*html*/ `
    style="background-image:${this.image}"
    `
  }
}