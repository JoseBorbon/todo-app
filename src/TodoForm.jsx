import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.task.length === 0) return;
    const newTask = { isComplete: false, task: this.state.task };
    this.props.handleAddTodo(newTask);
    this.setState({
      task: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="todo">New Todo</label>
        <input
          type="text"
          id="todo"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add Todo!</button>
      </form>
    );
  }
}

export default TodoForm;
