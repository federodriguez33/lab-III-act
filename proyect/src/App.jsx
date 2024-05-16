import { useState } from 'react'
import List from './assets/components/list/List';
import NewTask from './assets/components/newTask/NewTask';

import './App.css'

function App() {

  const [listTask, setListTask] = useState([]);

  return (

    <>
      <h2 style={{ borderBottom: '2px solid black', paddingBottom: '5px' }}>Lista de tareas</h2>
      <NewTask setListTask={setListTask} />
      <List listTask={listTask} />

    </>

  )

}

export default App