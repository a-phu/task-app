/*main component for app*/

import { useState } from "react";
import TaskForm from "./components/TaskForm";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import "./App.css";
import "overlayscrollbars/styles/overlayscrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

const App = () => {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="App">
      <div className="Components">
        <h1>today's to-do</h1>
        <TaskForm
          className="MainInput"
          newTask={newTask}
          setNewTask={setNewTask}
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <OverlayScrollbarsComponent defer>
          <Tasks
            className="Tasks"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </OverlayScrollbarsComponent>
        <Footer className="Footer" />
      </div>
    </div>
  );
};

export default App;
