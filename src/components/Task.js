/*individual task component*/

import EditTask from "./EditTask";

const Task = (props) => {
  return (
    <li key={props.taskId}>
      <EditTask
        className="Task"
        iconButtonClassName="IconButton"
        editButtonGroupClassName="EditTaskButtonGroup"
        taskText={props.taskText}
        taskList={props.taskList}
        setTaskList={props.setTaskList}
        taskId={props.taskId}
      />
    </li>
  );
};

export default Task;
