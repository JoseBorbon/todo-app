import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    const todosArr = JSON.parse(localStorage.getItem('todos')) || [];
    this.state = { todos: todosArr };
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.edit = this.edit.bind(this);
  }

  async add(newTodo) {
    await this.setState((st) => {
      return { todos: [...st.todos, newTodo] };
    });
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  async remove(todoId) {
    await this.setState((st) => {
      return { todos: st.todos.filter(({ id }) => id !== todoId) };
    });
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  async edit(todoId, newTask) {
    await this.setState((st) => {
      return {
        todos: st.todos.map((todo) =>
          todo.id === todoId ? { ...todo, task: newTask } : todo
        ),
      };
    });
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  render() {
    const todos = this.state.todos.map(({ task, id, isComplete }) => (
      <Todo
        task={task}
        key={id}
        id={id}
        handleRemove={this.remove}
        editTodo={this.edit}
        isComplete={isComplete}
      />
    ));
    return (
      <div id="Todo-list">
        <h1>Todo List!</h1>
        <ul>{todos}</ul>
        <TodoForm handleAdd={this.add} />
      </div>
    );
  }
}

export default TodoList;
