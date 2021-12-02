import React from "react";
import css from "../styles/Navbar.module.css";
import { RiCalendarTodoLine } from "react-icons/ri";
function Navbar() {
  return (
    <div className={css.container}>
      <div className={css.left}>
        <p className={css.logo}>Todo App</p>
      </div>
      <div className={css.right}>
        <RiCalendarTodoLine />
      </div>
    </div>
  );
}

export default Navbar;
