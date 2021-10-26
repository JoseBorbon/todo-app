import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.edit = this.edit.bind(this);
  }

  add(newTodo) {
    this.setState((st) => {
      return { todos: [...st.todos, newTodo] };
    });
  }

  remove(todoId) {
    this.setState((st) => {
      return { todos: st.todos.filter(({ id }) => id !== todoId) };
    });
  }

  edit(todoId, newTask) {
    this.setState((st) => {
      return {
        todos: st.todos.map((todo) =>
          todo.id === todoId ? { ...todo, task: newTask } : todo
        ),
      };
    });
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
        {this.state.todos.length ? todos : <div></div>}
        <TodoForm handleAdd={this.add} />
      </div>
    );
  }
}

export default TodoList;
