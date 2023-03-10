/*edits task by:
- changing task text to an input field
- input becomes new task text
- using map(), returns a new array with text of task updateed to new task text*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faCheck } from "@fortawesome/free-solid-svg-icons";
import UncheckTask from "./UncheckTask";
import DeleteTask from "./DeleteTask";
import { useState } from "react";

const EditTask = (props) => {
  const [inactiveEdit, setInactiveEdit] = useState(true);
  const [editedTask, setEditedTask] = useState(props.taskText);

  const handleEditTask = (e) => {
    if (editedTask !== "") {
      props.setTaskList(
        props.taskList.map((currentTask) => {
          if (props.taskId === currentTask.id) {
            return { ...currentTask, text: editedTask };
          } else {
            return currentTask;
          }
        })
      );
    }
  };

  const handleEditTextChange = (e) => {
    setEditedTask(e.target.value);
  };

  if (inactiveEdit) {
    return (
      <div className={props.className}>
        <UncheckTask
          taskText={props.taskText}
          iconButtonClassName="IconButton"
          checkTaskClassName="CheckTask"
        />
        <div className={props.editButtonGroupClassName}>
          <FontAwesomeIcon
            icon={faPenToSquare}
            className={props.iconButtonClassName}
            onClick={() => {
              setInactiveEdit(!inactiveEdit);
            }}
          />
          <DeleteTask
            iconButtonClassName="IconButton"
            taskList={props.taskList}
            setTaskList={props.setTaskList}
            taskId={props.taskId}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className={props.className}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleEditTask();
            setInactiveEdit(!inactiveEdit);
          }}
        >
          <input
            value={editedTask}
            onChange={(e) => {
              handleEditTextChange(e);
            }}
          />
        </form>
        <div className={props.editButtonGroupClassName}>
          <FontAwesomeIcon
            icon={faCheck}
            className={props.iconButtonClassName}
            type="submit"
            onClick={() => {
              handleEditTask();
              setInactiveEdit(!inactiveEdit);
            }}
          />
          <DeleteTask
            iconButtonClassName="IconButton"
            taskList={props.taskList}
            setTaskList={props.setTaskList}
            taskId={props.taskId}
          />
        </div>
      </div>
    );
  }
};

export default EditTask;
