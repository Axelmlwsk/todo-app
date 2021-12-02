import React, { useState } from "react";
import axios from "axios";
import css from "../styles/Task.module.css";
import { RiDeleteBin5Line, RiEditLine, RiSaveLine } from "react-icons/ri";

function Task({ title, description, done, id }) {
  const [checked, setChecked] = useState(done);
  const [edit, setEdit] = useState(false);
  const [newData, setNewData] = useState({ title: "", description: "" });

  const handleDelete = (e) => {
    e.preventDefault();
    (async function () {
      await axios.delete(`https://todo-app-axelmalawski.herokuapp.com/tasks/${id}`);
    })();
  };

  const handleChangeCheckbox = (e) => {
    setChecked(!checked);
    (async function () {
      await axios.put(`https://todo-app-axelmalawski.herokuapp.com/tasks/${id}`, {
        done: !checked,
      });
    })();
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEdit(!edit);
  };

  const handleSave = (e) => {
    const { title, description } = newData;

    e.preventDefault();
    if (title !== "" || description !== "") {
      (async function () {
        await axios.put(`https://todo-app-axelmalawski.herokuapp.com/tasks/${id}`, {
          title,
          description,
        });
      })();
    }
    setEdit(!edit);
  };

  const handleChangeInput = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };

  return (
    <div className={css.container}>
      <p className={css.title}>{title}</p>
      <input type="checkbox" onChange={handleChangeCheckbox} checked={checked} />
      <p className={css.description}>{description}</p>
      <button onClick={handleEdit}>
        <RiEditLine />
      </button>
      {edit ? (
        <form className={css.editForm}>
          <input name="title" onChange={handleChangeInput} type="text" placeholder="edit title" />
          <input name="description" onChange={handleChangeInput} type="text" placeholder="edit description" />
          <button onClick={handleSave} type="submit">
            <RiSaveLine />
          </button>
        </form>
      ) : null}
      <button onClick={handleDelete}>
        <RiDeleteBin5Line />
      </button>
    </div>
  );
}

export default Task;
