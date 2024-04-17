import { Form } from 'react-bootstrap';
import PropTypes from "prop-types";

const SendingRadio = ( {handleSelectRadio} ) => {

    return(

        <div>
        <Form.Check
            type="radio"
            label="Retiro en el local"
            name="radio"
            id="Retiro en el local"
            onChange={handleSelectRadio}
          />
          <Form.Check
            type="radio"
            label="Envio express"
            name="radio"
            id="Envio express"
            onChange={handleSelectRadio}
          />
          <Form.Check
            type="radio"
            label="Envio comun"
            name="radio"
            id="Envio comun"
            onChange={handleSelectRadio}
          />
          
        </div>

    )

}

SendingRadio.propTypes = {
    handleSelectRadio: PropTypes.func
}

export default SendingRadio