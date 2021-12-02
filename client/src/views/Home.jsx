import React from "react";

import CreateTask from "../components/CreateTask";
import css from "../styles/Home.module.css";
import CreateFolder from "../components/CreateFolder";
import ShowTasks from "../components/ShowTasks";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div className={css.app}>
        <div className={css.container}>
          <section className={css.left}>
            <ShowTasks />
          </section>
          <section className={css.right}>
            <CreateTask />
            <CreateFolder />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
