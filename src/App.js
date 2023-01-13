import { useState } from "react";
import TaskForm from "./components/TaskForm";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";

const App = () => {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  return (
    <div>
      <h1>today's to-do</h1>
      <TaskForm
        newTask={newTask}
        setNewTask={setNewTask}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <Tasks taskList={taskList} setTaskList={setTaskList} />
      <Footer />
    </div>
  );
};

export default App;
