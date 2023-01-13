/*deletes a task by setting state of task list
as a new filtered array without the deleted task*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const DeleteTask = (props) => {
  const handleDeleteTask = () => {
    /*rerenders w/ array that have tasks w/ ids (notDeleted.id) different
    to the deleted id (props.taskId)*/
    props.setTaskList(
      props.taskList.filter((notDeleted) => props.taskId !== notDeleted.id)
    );
  };

  return <FontAwesomeIcon icon={faTrash} onClick={handleDeleteTask} />;
};

export default DeleteTask;
