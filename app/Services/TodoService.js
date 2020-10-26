import {
  ProxyState
} from "../AppState.js";
import Todo from "../Models/Todo.js";
import {
  api
} from "../Services/AxiosService.js";


let url = 'kody/todos/'


class TodoService {
  async getTodos() {
    let res = await api.get(url);
    ProxyState.todos = res.data.data.map(rawData => new Todo(rawData));
    //TODO Handle this response from the server
  }

  async addTodo(todo) {
    let res = await api.post(url, todo);
    ProxyState.todos = [...ProxyState.todos, new Todo(todo)]
    console.log(res);
    //TODO Handle this response from the server
  }

  async toggleTodoStatus(todoId) {
    let todo = await ProxyState.todos.find(todo => todo.id == todoId);
    todo.completed = todo.completed ? false : true
    let res = await api.put(url + todoId, todo);
    this.getTodos()
  }

  async removeTodo(todoId) {
    let res = await api.delete(url + todoId)
    this.getTodos()
  }
}

const todoService = new TodoService();
export default todoService;