export default class Quote {
  constructor(data) {
    this.id = data.quote.id
    this.quote = data.quote.body
    this.author = data.quote.author
  }

  get Template() {
    return /*html*/ `
    <div class="text-white">
    <h5>${this.quote}</h5>
    <h6>Author: ${this.author}</h6>
    </div>
    `
  }
}