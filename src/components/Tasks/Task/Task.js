import './Task.css';

export default function Task(props) {
const deleteHandler = () => {
  props.onDelete(props.id);
}

  return (
    <li className="task-item" onClick={deleteHandler}>
      {props.children}
    </li>
  )
}