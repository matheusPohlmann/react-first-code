import React from "react";
import PropTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask
}) {
  const addTask = () => {
    console.log("No TaskList ela tbm veio fulminante!");
    onAddTask("Nova Tarefa", taskState);
  };

  return (
    <div className="card">
      <h5 className="card-header bg-secondary fw-bolder text-white">{title}</h5>
      <div className="card-body">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
        {tasks.length === 0 && <div>Lista vazia</div>}
      </div>
      <div className="card-footer">
        <button className="btn btn-info float-end text-white" onClick={addTask}>
          Adicionar tarefa
        </button>
      </div>
    </div>
  );
}

TaskList.PropTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};
