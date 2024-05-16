import PropTypes from 'prop-types';
import { useState } from 'react';

const List = ({ listTask }) => {

    const [check, setCheck] = useState()

    const handleCheck = () => {


    }

    return (

        <>
            <h2>Lista de tareas</h2>

            {listTask ? (

                <div className="form-check form-switch d-flex m-4">

                    {listTask.map((elemento, index) => (
                        <>
                        <input className="form-check-input me-2" type="checkbox" role="switch" id={`flexSwitchCheckDefault${index}`} onChange={}/>
                        <label className="form-check-label" htmlFor={`flexSwitchCheckDefault${index}`}>{elemento}</label>
                        </>
                    ))}
                    
                </div>

            ) : (

                <p>La lista se encuentra vacia, ¡agrega alguna!</p>

            )}

        </>


    )

}

List.propTypes = {
    listTask: PropTypes.array
};

export default List