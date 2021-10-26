import React, { Component } from 'react';
import './Todo.css';
//flexbox css potential for todo to layer edit/remove buttons accordingly

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { task: this.props.task, isEditing: false, isComplete: false };
    this.toggleForm = this.toggleForm.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.change = this.change.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
  }

  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  toggleComplete() {
    this.setState({ isComplete: !this.state.isComplete });
  }

  change(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  submitEdit() {
    //need to pass task up to parent component for editing purposes
    this.props.editTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <form onSubmit={this.submitEdit}>
          <input
            type="text"
            name="task"
            defaultValue={this.state.task}
            onChange={this.change}
          />
          <button>Save</button>
        </form>
      );
    } else {
      result = (
        <div id={this.props.id} className="Todo">
          <div
            className={this.state.isComplete ? 'Todo-Complete' : ''}
            onClick={this.toggleComplete}
          >
            {this.state.task}
          </div>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={() => this.props.handleRemove(this.props.id)}>
            Remove
          </button>
        </div>
      );
    }

    return result;
  }
}

export default Todo;
