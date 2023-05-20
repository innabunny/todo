import './App.css';
import { useState } from 'react';
import TaskInput from './components/Tasks/TaskInput/TaskInput';
import TaskList from './components/Tasks/TaskList/TaskList';

function App() {
  const [tasks, setTasks] = useState([
    {text: 'Работа над проектом - 1 час', id: "t1"},
    {text: 'Разминка - 15 мин', id: "t2"},
    {text: 'Приготовление ужина - 1 час', id: "t3"},
    {text: 'Уборка - 30 мин', id: "t4"},
    {text: 'Отдыхх - 40 мин', id: "t5"},
  ])

  const addTaskHandler = (inpuText) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.unshift({ text: inpuText, id: Math.random().toString() });
      return updatedTasks;
    })
  }

  const deleteTaskHandler = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      return updatedTasks;
    })
  }

  let content = (
    <p style={{ textAlign: "center"}}>Задачи не найдены! Добавить?</p>
  )

  if (tasks.length > 0) {
    content = <TaskList items={tasks} onDeleteTask={deleteTaskHandler} />
  }

  return (
    <div>
      <section id='task-form'>
        <TaskInput onAddTask={addTaskHandler} />
      </section>
      <section id='tasks'>
        {content}
      </section>
    </div>
  );
}

export default App;
