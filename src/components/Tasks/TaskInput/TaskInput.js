import { useState } from 'react';
import Button from '../../UI/Button/Button';
import styles from './TaskInput.module.css';

export default function TaskInput(props) {
  const [inputText, setInputText] = useState('');
  const [isInputValid, setIsInputValid] = useState(false);


  const taskInputChangeHandler = (evt) => {
    if(evt.target.value.trim().length > 0) {
      setIsInputValid(true);
    } else {
      setIsInputValid(false);
    }
    setInputText(evt.target.value);
  }

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    if(inputText.trim().length === 0) {
      setIsInputValid(false);
      return;
    }

    props.onAddTask(inputText);
  }


  return (
    <form onSubmit={formSubmitHandler}> 
      <div className={`${styles["form-control"]} ${!isInputValid && styles.invalid}`} >
        <label>Задачи</label>
        <input type="text" onChange={taskInputChangeHandler}/>
      </div>
      <Button type='submit' >Добавить задачу</Button>
    </form>
  )
}