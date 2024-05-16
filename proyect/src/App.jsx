import { useState } from 'react'
import List from './assets/components/list/List';
import NewTask from './assets/components/newTask/NewTask';

import './App.css'

function App() {

  const [listTask, setListTask] = useState(["Ir al supermercado",]);

  return (

    <>
      <NewTask setListTask={setListTask}/>
      <List listTask={listTask}/>

    </>

  )

}

export default App