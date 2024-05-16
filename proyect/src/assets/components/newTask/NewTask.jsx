import PropTypes from 'prop-types';
import { useState } from 'react';

const NewTask = ( {setListTask} ) => {

  const [nuevaTarea, setNuevaTarea] = useState("");

  const handleNewTask = (e) => {

    setNuevaTarea(e.target.value)
    console.log(nuevaTarea);

  }

  const agregarTarea = () => {
    setListTask(taskList => [...taskList, nuevaTarea]); // Agregar la nueva tarea a la lista
    console.log(nuevaTarea);
    setNuevaTarea(""); // Limpiar el campo de entrada después de agregar la tarea
  };

  return (

    <>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Escriba la tarea a agregar..." aria-label="Recipient's username" aria-describedby="button-addon2" id='newTask' onChange={handleNewTask}/>
        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={agregarTarea}>Agregar tarea</button>
      </div>
    </>

  )

}

NewTask.propTypes = {
  setListTask: PropTypes.func
};

export default NewTask