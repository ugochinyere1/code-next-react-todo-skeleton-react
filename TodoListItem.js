import React from "react";

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.onCheckboxChange = this.onCheckboxChange.bind(this);
    this.onRemoveClick = this.onRemoveClick.bind(this);
  }

  onCheckboxChange(event) {
    // TODO(#18) Call this.props.onToggle with the todo ID.
    // hint: How can you access the todo ID?
  }

  onRemoveClick(event) {
    // TODO(#25) Call this.props.onRemove with the todo ID.
  }

  render() {
    const id = `todo-id-${this.props.todo.id}`;

    let className = "list-group-item d-flex justify-content-between align-items-center";
    if (this.props.todo.isComplete) {
      className += " list-group-item-success";
    }

    return (
      <li className={className}>
        <div className="form-check form-check-inline">
          <input
            id={id}
            className="form-check-input"
            type="checkbox"
            checked={/* TODO(#19) Use the correct todo property. */}
            onChange={/* TODO(#20) Use the correct event handler. */}
          />
          <label htmlFor={id} className="form-check-label">
            {this.props.todo.text}
          </label>
        </div>
        <button
          className="btn btn-danger btn-sm"
          onClick={/* TODO(#26) Use the correct event handler */}
        >
          remove
        </button>
      </li>
    );
  }
}
