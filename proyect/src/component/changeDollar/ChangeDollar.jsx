import PropTypes from "prop-types";
import { Form } from 'react-bootstrap';

const ChangeDollar = ({pChangeDollar}) => {

    const { changeDollar, SetChangeDollar } = pChangeDollar;

    const handleChangeDollar = (e) => {
        SetChangeDollar(e.target.value);
    };

    return (
        <>
            <Form.Label>Precio dolar</Form.Label>
            <Form.Control
                type="text"
                placeholder="Ingresar precio dolar"
                onChange={handleChangeDollar}
                value={changeDollar}
            />
        </>
    )

}

ChangeDollar.propTypes = {
    pChangeDollar: PropTypes.shape({
        changeDollar: PropTypes.number.isRequired,
        SetChangeDollar: PropTypes.func.isRequired
    }).isRequired
};

export default ChangeDollar;