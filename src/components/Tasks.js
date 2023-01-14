/*shows all tasks as a list*/

import Task from "./Task";

const Tasks = (props) => {
  return (
    <ul className={props.className}>
      {props.taskList.map((task) => {
        return (
          <Task
            key={task.id}
            taskId={task.id}
            taskText={task.text}
            taskList={props.taskList}
            setTaskList={props.setTaskList}
          />
        );
      })}
    </ul>
  );
};

export default Tasks;
