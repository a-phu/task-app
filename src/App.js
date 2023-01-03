/*input field & submit button*/
/*submit - add content from input to a tasks array that is managed in state*/
/*for task in the tasks array, an html list element should be rendered*/



import {useState} from 'react';
import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext';

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const submitTask = () => {
    console.log("tasks before:", taskList);
    setTaskList(oldTaskList => [...oldTaskList, task]);
    console.log("tasks after:", taskList);
  }

  return (
    <div>
      <h1>task app</h1>
        <input 
          value = {task}
          onInput={e => setTask(e.target.value)}
        />
        {console.log("task entered: ", task)}
        
        <button onClick = {submitTask}>Submit task</button>
        <p>
          {taskList.map((task,index) => {
            //need to explicitly return
            return <li key={index}>{task}</li>
          })}
        </p>
    </div>
  );
}

export default App;
