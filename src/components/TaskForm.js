import { v4 as uuid } from "uuid";

const TaskForm = (props) => {
  const addTask = (e) => {
    e.preventDefault();
    //add a new task by returning new array with new task appended
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
    <div>
      <form onSubmit={addTask}>
        <input
          value={props.newTask}
          type="text"
          placeholder="enter task"
          onChange={handleTaskChange}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default TaskForm;
