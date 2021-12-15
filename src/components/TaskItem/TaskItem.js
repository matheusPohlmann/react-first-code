import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TaskItem({
  id,
  title,
  taskState,
  onTaskUpdate,
  onDeleteTask
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);

  const onTitleChange = (event) => {
    const newTitle = event.target.value;
    setEditableTitle(newTitle);
    onTaskUpdate(id, newTitle, taskState);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
      if (editableTitle.length === 0) {
        onDeleteTask(id);
      }
    }
  };

  const onTaskStateChange = (event) => {
    onTaskUpdate(id, title, event.target.value);
  };

  if (isEditing) {
    return (
      <input
        type="text"
        value={editableTitle}
        onChange={onTitleChange}
        onKeyPress={onKeyPress}
      />
    );
  } else {
    return (
      <div className="card bg-secondary mb-2">
        <div className="card-body">
          <div
            className="card-title text-white"
            onClick={(e) => setIsEditing(true)}
          >
            {editableTitle}
          </div>
          <select
            className="form-select"
            onChange={onTaskStateChange}
            value={taskState}
          >
            <option className="text-dark" value="Pendente">
              Pendente
            </option>
            <option className="text-dark" value="Fazendo">
              Fazendo
            </option>
            <option className="text-dark" value="Completo">
              Completo
            </option>
          </select>
        </div>
      </div>
    );
  }
}

TaskItem.PropTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  taskState: PropTypes.string.isRequired
};
