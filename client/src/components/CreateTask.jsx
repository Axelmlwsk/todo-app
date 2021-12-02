import React, { useState, useEffect } from "react";

import css from "../styles/CreateTask.module.css";
import axios from "axios";

function CreateTask() {
  const [task, setTask] = useState({ title: "", description: "", folderName: "Select a folder" });
  const [folders, setFolders] = useState([]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    (async function () {
      const { data } = await axios.get("https://todo-app-axelmalawski.herokuapp.com/folders");
      setFolders(data.data);
    })();
  }, [folders]);

  const handleSubmit = (e) => {
    const { title, description, folderName } = task;

    e.preventDefault();

    if (title && description && folderName !== "Select a folder") {
      axios.post("https://todo-app-axelmalawski.herokuapp.com/tasks", {
        title,
        description,
        done: false,
        folderName,
      });
      setTask({
        title: "",
        description: "",
        folderName: "",
      });
    }
  };

  return (
    <div className={css.container}>
      <h3>Create task</h3>
      <form className={css.form} onSubmit={handleSubmit}>
        <div>
          <p>Title</p>
          <input value={task.title} placeholder="enter a title" name="title" type="text" onChange={handleChange} />
        </div>
        <div>
          <p>Description</p>
          <input placeholder="enter a description" value={task.description} name="description" type="text" onChange={handleChange} />
        </div>
        <p>Folder</p>
        {folders.length === 0 ? <p className={css.folderAlert}>Create a folder first</p> : null}
        <select value={task.folderName} onChange={handleChange} name="folderName">
          <option value="Select a folder">Select a folder</option>

          {folders.map((folder) => (
            <option key={folder.id} value={folder.title}>
              {folder.title}
            </option>
          ))}
        </select>
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateTask;
