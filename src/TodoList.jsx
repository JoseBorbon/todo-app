import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] }; //holds Object[]
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(newTodo) {
    this.setState((st) => {
      return { todos: [...st.todos, newTodo] };
    });
  }
  render() {
    const todos = this.state.todos.map(({ task }) => <Todo task={task} />);
    return (
      <div id="Todo-list">
        {this.state.todos.length ? todos : <div></div>}
        <TodoForm handleAddTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
