import './TaskList.css';
import Task from '../Task/Task';

export default function TaskList(props) {
  return (
    <ul className='task-list'>
      {props.items.map((task) => (
         <Task key={task.id} id={task.id} onDelete={props.onDeleteTask}>
          {task.text}
        </Task>
      ))}
    </ul>
  )
}