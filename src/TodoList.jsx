import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] }; //holds Object[]
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
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

  render() {
    const todos = this.state.todos.map(({ task, id }) => (
      <Todo task={task} key={id} id={id} handleRemove={this.remove} />
    ));
    return (
      <div id="Todo-list">
        {this.state.todos.length ? todos : <div></div>}
        <TodoForm handleAdd={this.add} />
      </div>
    );
  }
}

export default TodoList;
