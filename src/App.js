import "./styles.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

let idAcc = 0;
const generateId = () => {
  idAcc += 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col">
            <TaskList
              className="col"
              title="Pendente"
              taskState="Pendente"
              onAddTask={addTask}
              tasks={tasks.filter((t) => t.state === "Pendente")}
              onTaskUpdate={updateTask}
              onDeleteTask={deleteTask}
            />
          </div>
          <div className="col">
            <TaskList
              className="col"
              title="Fazendo"
              taskState="Fazendo"
              onAddTask={addTask}
              tasks={tasks.filter((t) => t.state === "Fazendo")}
              onTaskUpdate={updateTask}
              onDeleteTask={deleteTask}
            />
          </div>
          <div className="col">
            <TaskList
              className="col"
              title="Completo"
              taskState="Completo"
              onAddTask={addTask}
              tasks={tasks.filter((t) => t.state === "Completo")}
              onTaskUpdate={updateTask}
              onDeleteTask={deleteTask}
            />
          </div>
          {/* <div className="col">
            <TaskList className="col" title="Fazendo" />
          </div>
          <div className="col">
            <TaskList className="col" title="Completo" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
