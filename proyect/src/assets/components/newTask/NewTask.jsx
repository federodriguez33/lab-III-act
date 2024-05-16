import PropTypes from 'prop-types';
import { useState } from 'react';

const NewTask = ( {setListTask} ) => {

  const [nuevaTarea, setNuevaTarea] = useState("");

  const handleNewTask = (e) => {

    e.preventDefault()
    
    setNuevaTarea(e.target.value)
    console.log(nuevaTarea);

  }

  const agregarTarea = () => {
    setListTask(taskList => [...taskList, nuevaTarea]);
    console.log(nuevaTarea);
    setNuevaTarea("");
  };

  return (

    <>
      <div className="input-group mb-3">
        <input type="text" className="form-control" style={{ width: '300px' }} placeholder="Escriba la tarea aquí..." aria-label="Recipient's username" aria-describedby="button-addon2" id='newTask' value={nuevaTarea} onChange={handleNewTask}/>
        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={agregarTarea}>Agregar</button>
      </div>
    </>

  )

}

NewTask.propTypes = {
  setListTask: PropTypes.func
};

export default NewTask