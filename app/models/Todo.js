export default class Todo {
  constructor({
    id
  }) {
    this.message = id.data.message
    this.id = id;
  }

  get Template() {
    return /*html*/ `
    <h1>${this.message}</h1>
    `
  }
}