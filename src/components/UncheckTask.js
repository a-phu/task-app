/*component that allows task to be marked as done with a checkmark*/

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";

const UncheckTask = (props) => {
  const [uncheck, setUncheck] = useState(true);

  if (uncheck) {
    return (
      <div className={props.checkTaskClassName}>
        <FontAwesomeIcon
          icon={faSquare}
          className={props.iconButtonClassName}
          onClick={() => {
            setUncheck(!uncheck);
          }}
        />
        {props.taskText}
      </div>
    );
  } else {
    return (
      <div className={props.checkTaskClassName}>
        <FontAwesomeIcon
          icon={faSquareCheck}
          className={props.iconButtonClassName}
          onClick={() => {
            setUncheck(!uncheck);
          }}
        />
        <strike>{props.taskText}</strike>
      </div>
    );
  }
};

export default UncheckTask;
