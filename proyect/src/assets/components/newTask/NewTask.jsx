import PropTypes from 'prop-types';
import { useState } from 'react';

const NewTask = ({ listTask, setListTask }) => {

  const [nuevaTarea, setNuevaTarea] = useState("");

  const handleNewTask = (e) => {
    e.preventDefault()

    const newTask = e.target.value;
    setNuevaTarea(newTask);

  }

  const agregarTarea = () => {
    
    if (nuevaTarea.trim() === "") {
      alert("Por favor, ingresa una tarea válida");
      return;
    }
    if (listTask.includes(nuevaTarea)) {
      alert("Esta tarea ya se encuentra activa");
      setNuevaTarea("");
      return;
    }
      
    setListTask(taskList => [...taskList, nuevaTarea]);
    setNuevaTarea("");

  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      agregarTarea();
    }
  };

  return (

    <>
      <div className="input-group mb-3">
        <input type="text" className="form-control" style={{ width: '300px' }} placeholder="Escriba la tarea aquí..." aria-label="Recipient's username" aria-describedby="button-addon2" id='newTask' value={nuevaTarea} onChange={handleNewTask} onKeyDown={handleEnter}/>
        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={agregarTarea}>Agregar</button>
      </div>
    </>

  )

}

NewTask.propTypes = {
  listTask: PropTypes.array,
  setListTask: PropTypes.func
};

export default NewTask