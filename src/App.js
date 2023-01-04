/*input field & submit button*/
/*submit - add content from input to a tasks array that is managed in state*/
/*for task in the tasks array, an html list element should be rendered*/



import {useState} from 'react';
// import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext';
import Overview from './components/Overview';
import {v4 as uuid} from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const submitTask = () => {
    console.log("tasks before:", taskList);
    setTaskList(oldTaskList => [...oldTaskList, {id: uuid(), text: task}]);
    console.log("tasks after:", taskList);
    //clear input after submission
    setTask('');
  }


  //makes submission a form
  //allows for button to be used via click or enter button press
  const onFormSubmit = (e) => {
    //this prevents default state to refresh the page 
    //each time s/t is submitted
    e.preventDefault();
  }
  const heart = <FontAwesomeIcon icon={faHeart} />

  return (
    <div className="App">
      <h1>today's to-do</h1>
      <form onSubmit = {onFormSubmit}>
        <input 
          value = {task}
          type="text"
          onInput={e => setTask(e.target.value)}
        />
        {console.log("task entered: ", task)}
        <button type = "submit" onClick = {submitTask}>Submit task</button>
      </form>
      <Overview taskList = {taskList} setTaskList = {setTaskList}/>
    </div>
  );
}

export default App;
