import { Form } from 'react-bootstrap';
import PropTypes from "prop-types";

const TableInput = ({ handleInput }) => {
    
    return(

        <Form.Control type='number' onChange={handleInput}></Form.Control>
    )

}

TableInput.propTypes = {
    handleInput: PropTypes.func
}


export default TableInput