import PropTypes from 'prop-types';
import { useState } from 'react';
import { CiTrash } from "react-icons/ci";
import { GoPencil } from "react-icons/go";


const List = ({ listTask, setListTask }) => {

    const [check, setCheck] = useState({})

    const handleCheck = (elemento) => {

        setCheck({
            ...check,
            [elemento]: !check[elemento]
        });

    }

    const deletTask = (task) => {

        const newLiskTask = listTask.filter(elemento => elemento !== task);
        setListTask(newLiskTask);
        setCheck(prevCheck => ({
            ...prevCheck,
            [task]: false
        }));

    }

    const modiTask = (task) => {
        setListTask(listTask.map(elemento => elemento === task? elemento.target.value : elemento))
    }

    return (

        <>

            {listTask && listTask.length > 0 ? (

                listTask.map((elemento, index) => (
                    <div className="form-check form-switch d-flex m-4 justify-content-between align-items-center" key={index}>
                        <input
                            className="form-check-input me-2"
                            type="checkbox"
                            role="switch"
                            id={`flexSwitchCheckDefault${index}`}
                            checked={check[elemento]}
                            onChange={() => handleCheck(elemento)}
                        />
                        <label
                            className="form-check-label"
                            htmlFor={`flexSwitchCheckDefault${index}`}
                            style={check[elemento] ? { textDecoration: "line-through" } : {}}
                        >
                            {elemento}
                        </label>

                        <button><GoPencil style={{ width: '20px', height: '20px' }} onClick={() => modiTask(elemento)} /></button>
                        <button><CiTrash style={{ width: '20px', height: '20px' }} onClick={() => deletTask(elemento)} /></button>

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