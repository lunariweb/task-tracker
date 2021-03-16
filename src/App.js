import "./styles.css";
import React from "react";
import Header from "./Header";
import Button from "./Button";
import Tasks from "./Tasks";
import { useState } from "react";
import AddTask from "./AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Appoinment 1",
      day: "feb 5th at 2.30pm",
      reminder: true
    },
    {
      id: 2,
      text: "Appoinment 2",
      day: "feb 6th at 2.30pm",
      reminder: true
    },

    {
      id: 3,
      text: "Appoinment 3",
      day: "feb 7th at 2.30pm",
      reminder: true
    }
  ]);

  //add task fucntion
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1);

    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //delete task fucntion
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle reminder
  const toggleReminder = (id) => {
    // console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="App">
      <Header title="Task Tracker" />
      {showAddTask ? <AddTask onAdd={addTask} /> : ""}
      <Button
        color={showAddTask ? "blue" : "green"}
        showAdd={showAddTask}
        onAdd={() => setShowAddTask(!showAddTask)}
      />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks yet add some now"
      )}
    </div>
  );
};

export default App;
