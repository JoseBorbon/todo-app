import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
    const newTask = {
      task: this.state.task,
      isComplete: false,
      isEditing: false,
      id: uuidv4(),
    };
    this.props.handleAdd(newTask);
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
