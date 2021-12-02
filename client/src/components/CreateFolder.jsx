import React, { useState } from "react";
import axios from "axios";
import css from "../styles/CreateFolder.module.css";

function CreateFolder() {
  const [folder, setFolder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (folder && folder !== "Select a folder") {
      axios.post("http://localhost:3001/folders", {
        title: folder,
      });
      setFolder("");
    }
  };

  const handleChange = (e) => {
    setFolder(e.target.value);
  };

  return (
    <div className={css.container}>
      Create folder
      <form onSubmit={handleSubmit}>
        <input value={folder} onChange={handleChange} type="text" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateFolder;
