const TaskText = (props) => {
  if (props.inactiveEdit) {
    return <p>{props.taskText}</p>;
  } else {
    return (
      <input
        onChange={(e) => {
          props.handleEditTextChange(e);
        }}
      />
    );
  }
};

export default TaskText;
