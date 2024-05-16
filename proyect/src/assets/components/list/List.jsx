import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const List = ({ listTask, setListTask }) => {

    const [check, setCheck] = useState({})

    const handleCheck = (elemento, index) => {

        listTask.map((task) => (

            if(task === elemento){
                alert("Ingrese una tarea con un nombre distinto")
            }
        ))
        
        setCheck({
            ...check,
            [index]: !check[index]
        });

    }

    const deletTask = (task) => {

        const newLiskTask = listTask.filter(elemento => elemento !== task);
        setListTask(newLiskTask);

    }

    return (

        <>

            {listTask && listTask.length > 0 ? (

                listTask.map((elemento, index) => (
                    <div className="form-check form-switch d-flex m-4" key={index}>
                        <input
                            className="form-check-input me-2"
                            type="checkbox"
                            role="switch"
                            id={`flexSwitchCheckDefault${index}`}
                            checked={check[index]}
                            onChange={() => handleCheck(elemento, index)}
                        />
                        <label
                            className="form-check-label"
                            htmlFor={`flexSwitchCheckDefault${index}`}
                            style={check[index] ? { textDecoration: "line-through" } : {}}
                        >
                            {elemento}
                        </label>
                        <Button onClick={() => deletTask(elemento)}>Eliminar</Button>
                    </div>
                ))

            ) : (

                <p className='d-flex m-4'>La lista se encuentra vacía, ¡agregá alguna tarea!</p>

            )}

        </>

    )

}

List.propTypes = {
    listTask: PropTypes.array,
    setListTask: PropTypes.func
};

export default List