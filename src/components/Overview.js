/*render tasks in this file*/
//need to import react or else will have uncaught ref error "react not defined"
import React from 'react';
import './Overview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const Overview = (props) => {
    // const deleteIcon = <FontAwesomeIcon icon="fa-solid fa-trash" />;
    // const {taskList} = props;

    return(
        
        <ol>
            {props.taskList.map((task, index) => {
                //only return what you need to return
                //do not return a console log or else program thinks 
                //task.id is not unique
                // console.log("task id: ", task.id)
                return (    
                    <li key={task.id}>
                        {task.text+" "} 
                        <FontAwesomeIcon className="icon-button" icon={faPenToSquare} />
                        {" "}
                        <FontAwesomeIcon className="icon-button" icon={faTrash} onClick = {
                          () => {props.setTaskList(props.taskList.filter((a) => task.id !== a.id));}
                        }/>
                    </li>

                );
            })}
        </ol>
    );
}

export default Overview;