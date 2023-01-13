/*task component*/

import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";

const Task = (props) => {
  /*keep state of inactive edit in this component instead of tasks.js 
  bc otherwise it will be treated like a global variable bc it have a 
  final state that is exported to tasks.js*/

  return (
    <li key={props.taskId}>
      <EditTask
        taskText={props.taskText}
        taskList={props.taskList}
        setTaskList={props.setTaskList}
        taskId={props.taskId}
      />
      <DeleteTask
        taskList={props.taskList}
        setTaskList={props.setTaskList}
        taskId={props.taskId}
      />
    </li>
  );
};

export default Task;
