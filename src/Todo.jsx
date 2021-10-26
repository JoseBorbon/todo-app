import React, { Component } from 'react';
import './Todo.css';
//flexbox css potential for todo to layer edit/remove buttons accordingly

class Todo extends Component {
  //pass down task, id, key of todo and method from parent component
  //edit and delete buttons for todo
  constructor(props) {
    super(props);
    this.state = { task: this.props.task, isEditing: false };
    this.toggleForm = this.toggleForm.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
  }

  toggleForm() {
    console.log('yo');
    this.setState({ isEditing: !this.state.isEditing });
  }

  submitEdit() {
    //need to pass task up to parent component for editing purposes
  }

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <form onSubmit={this.submitEdit}>
          <input type="text" name="task" defaultValue={this.state.task} />
          <button onChange={this.change}>Save</button>
        </form>
      );
    } else {
      result = (
        <div id={this.props.id} className="Todo">
          <div>{this.state.task}</div>
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
