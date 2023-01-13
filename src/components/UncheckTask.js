import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";

const UncheckTask = (props) => {
  const [uncheck, setUncheck] = useState(true);

  if (uncheck) {
    return (
      <div>
        <FontAwesomeIcon
          icon={faSquare}
          onClick={() => {
            setUncheck(!uncheck);
          }}
        />
        {props.taskText}
      </div>
    );
  } else {
    return (
      <div>
        <FontAwesomeIcon
          icon={faSquareCheck}
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
