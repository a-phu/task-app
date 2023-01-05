/*render tasks in this file*/
//need to import react or else will have uncaught ref error "react not defined"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
// import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
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

const TaskList = (props) => {
  // const deleteIcon = <FontAwesomeIcon icon="fa-solid fa-trash" />;
  // const {taskList} = props;

  return (
    <ul>
      {props.taskList.map((task, index) => {
        //only return what you need to return
        //do not return a console log or else program thinks
        //task.id is not unique
        // console.log("task id: ", task.id)
        return (
          <li key={task.id}>
            <div className="task">
              <div className="text">
                <TaskButtons taskText={task.text} />
              </div>
              <div className="task-buttons">
                <FontAwesomeIcon
                  className="icon-button"
                  icon={faPenToSquare}
                  onClick={() => {}}
                />
                <FontAwesomeIcon
                  className="icon-button"
                  icon={faTrash}
                  onClick={() => {
                    props.setTaskList(
                      props.taskList.filter((a) => task.id !== a.id)
                    );
                  }}
                />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
