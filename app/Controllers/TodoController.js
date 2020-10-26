import todoService from "../Services/TodoService.js";
import {
  ProxyState
} from "../AppState.js"


//TODO Create the draw function
function _drawTodos() {
  let template = ""
  let numberOfTodos = ProxyState.todos.length
  ProxyState.todos.forEach(t => template += t.Template)
  document.getElementById("todo").innerHTML = template
  document.getElementById("numberOfTodos").innerText = numberOfTodos.toString()
}

export default class TodoController {
  constructor() {
    todoService.getTodos()
    ProxyState.on("todos", _drawTodos)
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo(e) {
    e.preventDefault();
    let form = e.target;
    let rawTodo = {
      description: form.description.value
    }
    todoService.addTodo(rawTodo)
    form.reset()
  }

  /**
   * This method takes in an id of the Todo that should be togggled as complete
   * @param {string} todoId 
   */
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }

}