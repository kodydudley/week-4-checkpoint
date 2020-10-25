export default class Todo {
  constructor({
    data
  }) {
    this.description = data.message,
      this.id = data._id;
  }

  get Template() {
    return /*html*/ `
    <form onsubmit="app.todoController.addTodo(e)">
  <div class="form-group">
    <label for="todos">Todos</label>
    <input type="text" class="form-control" id="description" aria-describedby="emailHelp" placeholder="Enter Todo">
  </div>
  <button onclick="submit" type="submit" class="btn btn-primary">Submit</button>
</form>
    `
  }

}