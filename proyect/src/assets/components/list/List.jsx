import PropTypes from 'prop-types';
import { useState } from 'react';

const List = ({ listTask }) => {

    const [check, setCheck] = useState({})

    const handleCheck = (index) => {

        setCheck({
            ...check,
            [index]: !check[index]
        });
        console.log(check)

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
                            onChange={() => handleCheck(index)}
                        />
                        <label
                            className="form-check-label"
                            htmlFor={`flexSwitchCheckDefault${index}`}
                            style={check[index] ? { textDecoration: "line-through" } : {}}
                        >
                            {elemento}
                        </label>
                    </div>
                ))

            ) : (

                <p className='d-flex m-4'>La lista se encuentra vacía, ¡agregá alguna tarea!</p>

            )}

        </>

    )

}

List.propTypes = {
    listTask: PropTypes.array
};

export default List