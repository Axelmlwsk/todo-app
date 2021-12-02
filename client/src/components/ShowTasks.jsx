import React, { useState, useEffect } from "react";
import css from "../styles/ShowTasks.module.css";
import Tasks from "./Tasks";
import axios from "axios";
function ShowTasks() {
  const [selectedFolder, setSelectedFolder] = useState("Select a folder");
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    (async function () {
      const { data } = await axios.get("https://todo-app-axelmalawski.herokuapp.com/folders");
      setFolders(data.data);
    })();
  }, [selectedFolder, folders]);

  const handleChange = (e) => {
    setSelectedFolder(e.target.value);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if (selectedFolder !== "Select a folder") {
      (async function () {
        await axios.delete(`https://todo-app-axelmalawski.herokuapp.com/${selectedFolder}`);
      })();
    }
    setSelectedFolder("Select a folder");
  };

  return (
    <div className={css.container}>
      <div className={css.titleAndSelect}>
        <h2>Select a folder to display tasks</h2>
        <select value={selectedFolder} onChange={handleChange}>
          <option value="Select a folder">Select a folder</option>
          {folders.map((folder) => (
            <option value={folder.id} key={folder.id}>
              {folder.title}
            </option>
          ))}
        </select>
      </div>
      <div className={css.displayTasks}>
        {selectedFolder !== "Select a folder" ? <Tasks folder={selectedFolder} /> : null}
        {selectedFolder !== "Select a folder" ? (
          <button className={css.deleteButton} onClick={handleDelete}>
            Delete folder
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default ShowTasks;
