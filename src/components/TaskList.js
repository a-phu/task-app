/*render tasks in this file*/
//need to import react or else will have uncaught ref error "react not defined"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";

const TaskButtons = (props) => {
  const [checked, setChecked] = useState(false);

  //inactive - not checked
  if (!checked) {
    // console.log("inactive - before click", isActive);
    return (
      <div className="task-text">
        <FontAwesomeIcon
          className="icon-button"
          icon={faSquare}
          onClick={() => {
            //just changes to opp boolean
            //this is false becomes true
            setChecked(!checked);
          }}
        />
        {props.taskText}
      </div>
    );
  }
  //active - checked
  else {
    // console.log("inactive - after click: ", isActive);
    return (
      <div className="task-text-checked">
        <FontAwesomeIcon
          className="icon-button"
          icon={faSquareCheck}
          onClick={() => {
            // console.log("active - before click ", isActive);
            //this is true becomes false
            setChecked(!checked);
          }}
        />
        {props.taskText}
      </div>
    );
  }
};

const EditTask = (props) => {
  const [edited, setEdited] = useState(false);
  const [editedTask, setEditedTask] = useState("eat soup");

  //inactive - not checked
  if (!edited) {
    // console.log("inactive - before click", isActive);
    return (
      <div className="task">
        <TaskButtons taskText={props.taskText} />
        <div className="task-buttons">
          <FontAwesomeIcon
            className="icon-button"
            icon={faPenToSquare}
            onClick={() => {
              // console.log("active - before click ", isActive);
              //this is true becomes false
              setEdited(!edited);
            }}
          />
          <FontAwesomeIcon
            className="icon-button"
            icon={faTrash}
            onClick={() => {
              props.setTaskList(
                //create an array with tasks that have ids (a.id) diff
                //to task.id (so would leave out the current task id)
                //each delete button filters out that task from array
                //and requests a re-render w/ the resulting array
                //(does not modify the org array)
                props.taskList.filter((a) => props.taskId !== a.id)
              );
            }}
          />
        </div>
      </div>
    );
  }
  //active - checked
  else {
    // console.log("inactive - after click: ", isActive);
    return (
      <div className="task">
        <input
          className="edit-task-input"
          onInput={(e) => setEditedTask(e.target.value)}
        />
        <div className="task-buttons">
          <FontAwesomeIcon
            className="icon-button"
            icon={faPenToSquare}
            onClick={() => {
              // console.log("active - before click ", isActive);
              //this is true becomes false
              props.setTaskList(
                props.taskList.map((a) => {
                  if (props.taskId === a.id) {
                    return { ...a, text: editedTask };
                  } else {
                    return a;
                  }
                })
              );
              setEdited(!edited);
            }}
          />
          <FontAwesomeIcon
            className="icon-button"
            icon={faTrash}
            onClick={() => {
              props.setTaskList(
                //create an array with tasks that have ids (a.id) diff
                //to task.id (so would leave out the current task id)
                //each delete button filters out that task from array
                //and requests a re-render w/ the resulting array
                //(does not modify the org array)
                props.taskList.filter((a) => props.taskId !== a.id)
              );
            }}
          />
        </div>
      </div>
    );
  }
};
const TaskList = (props) => {
  // const deleteIcon = <FontAwesomeIcon icon="fa-solid fa-trash" />;
  // const {taskList} = props;

  //   const [editedTask, setEditedTask] = useState("");

  return (
    <ul>
      {props.taskList.map((task, index) => {
        //only return what you need to return
        //do not return a console log or else program thinks
        //task.id is not unique
        // console.log("task id: ", task.id)
        return (
          <li key={task.id}>
            <EditTask
              taskText={task.text}
              taskId={task.id}
              taskList={props.taskList}
              setTaskList={props.setTaskList}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
