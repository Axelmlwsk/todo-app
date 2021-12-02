import React, { useState, useEffect } from "react";
import axios from "axios";
import Task from "./Task";
import css from "../styles/Tasks.module.css";

function Tasks({ folder }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    (async function () {
      const folders = await axios.get(`https://todo-app-axelmalawski.herokuapp.com/folders/${folder}`);
      setTasks(folders.data.tasks);
    })();
  }, [folder, tasks]);

  return (
    <ul className={css.container}>
      {tasks.map((task) => (
        <li>
          <Task key={task.id} title={task.title} description={task.description} done={task.done} id={task.id} />
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
