export default class Todo {
  constructor(data) {
    this.description = data.description,
      this.id = data._id;
    this.completed = data.completed
  }

  get Template() {
    if (this.completed) {
      return /*html*/ `
  <div class="row">
    <div class="col-2">
      <button onclick="app.todoController.toggleTodoStatus('${this.id}')" class="btn btn-success"><i class="fas fa-check-square"></i></button>
    </div>
    <div class="col-8 bg-dark text-light">
      <h6 class="line-through text-center ">${this.description}</h6>
    </div>
    <div class="col-2">
      <button onclick="app.todoController.removeTodo('${this.id}')" class="btn btn-danger"><i class="fas fa-minus-circle"></i></button>
    </div>
</div>
    `
    } else {
      return /*html*/ `
  <div class="row">
    <div class="col-2">
      <button onclick="app.todoController.toggleTodoStatus('${this.id}')" class="btn btn-success"><i class="fas fa-check-square"></i></button>
    </div>
    <div class="col-8 bg-dark text-light">
      <h6 class="text-center">${this.description}</h6>
    </div>
    <div class="col-2">
      <button onclick="app.todoController.removeTodo('${this.id}')" class="btn btn-danger"><i class="fas fa-minus-circle"></i></button>
    </div>
</div>
    `
    }
  }

}