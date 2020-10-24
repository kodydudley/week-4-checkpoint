export default class Todo {
  constructor({
    id
  }) {
    this.message = id.data.message
    this.id = id;
  }

  get Template() {
    return /*html*/ `
    <form onsubmit="app.todoController.addTodo(e)">
  <div class="form-group">
    <label for="todos">Todos</label>
    <input type="text" class="form-control" id="todo" aria-describedby="emailHelp" placeholder="Enter Todo">
  </div>
  <button onclick="submit" type="submit" class="btn btn-primary">Submit</button>
</form>
    `
  }
  get TodoTemplate() {
    return /*html*/ `
<h6>${this.message}</h6>
  <button type="button" class="btn btn-danger btn-block" onclick="app.todoontroller.addTodo('${this.id}')">Add Todo
</button>
`
  }

}