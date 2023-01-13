/*edits task by:
- changing task text to an input field
- input becomes new task text
- using map, returns a new array with text of task updateed to new task text*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faCheck } from "@fortawesome/free-solid-svg-icons";
import UncheckTask from "./UncheckTask";
import { useState } from "react";

const EditTask = (props) => {
  const [inactiveEdit, setInactiveEdit] = useState(true);
  const [editedTask, setEditedTask] = useState("");

  const handleEditTask = (e) => {
    if (editedTask !== "") {
      props.setTaskList(
        props.taskList.map((currentTask) => {
          /*taskId is the Id of the task we want to edit. 
              when it matches the id in the array, it will return a task (the object)
              with the same id, but change the text to whatever the input is */
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
      <div>
        <UncheckTask taskText={props.taskText} />
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => {
            setInactiveEdit(!inactiveEdit);
          }}
        />
      </div>
    );
  } else {
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleEditTask();
            setInactiveEdit(!inactiveEdit);
          }}
        >
          <input
            placeholder={props.taskText}
            onChange={(e) => {
              handleEditTextChange(e);
            }}
          />
          <FontAwesomeIcon
            icon={faCheck}
            type="submit"
            onClick={() => {
              handleEditTask();
              setInactiveEdit(!inactiveEdit);
            }}
          />
        </form>
      </div>
    );
  }
};

export default EditTask;
