/*component that holds form to add new task*/

import { v4 as uuid } from "uuid";

const TaskForm = (props) => {
  const addTask = (e) => {
    e.preventDefault();
    props.setTaskList((oldTaskList) => [
      ...oldTaskList,
      { id: uuid(), text: props.newTask },
    ]);
    props.setNewTask("");
  };

  const handleTaskChange = (e) => {
    props.setNewTask(e.target.value);
  };

  return (
    <div className={props.className}>
      <form onSubmit={addTask}>
        <input
          value={props.newTask}
          type="text"
          placeholder="enter task"
          onChange={handleTaskChange}
        />
      </form>
      <button type="submit" onClick={addTask}>
        submit
      </button>
    </div>
  );
};

export default TaskForm;
