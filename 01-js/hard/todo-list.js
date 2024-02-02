/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.lists = [];
  };
  add(todo) {
    this.lists.push(todo);
  }
  remove(indexOfTodo) {
    this.lists.splice(indexOfTodo, 1);
  }
  update(index, updatedTodo) {
    if (index < this.lists.length) {
      this.lists[index] = updatedTodo;
    }
  }
  getAll() {
    return this.lists;
  }
  get(indexOfTodo) {
    if(!this.lists[indexOfTodo]){
      return null;
    }else{
      return this.lists[indexOfTodo];
    }
  }
  clear() {
    this.lists.splice(0, this.lists.length);
  }
}


module.exports = Todo;
