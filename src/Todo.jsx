import React, { Component } from 'react';
import './Todo.css';
//flexbox css potential for todo to layer edit/remove buttons accordingly

class Todo extends Component {
  //pass down task, id, key of todo and method from parent component
  //edit and delete buttons for todo
  render() {
    return (
      <div id={this.props.id} className="Todo">
        <div>{this.props.task}</div>
        <button>Edit</button>
        <button onClick={() => this.props.handleRemove(this.props.id)}>
          Remove
        </button>
      </div>
    );
  }
}

export default Todo;
