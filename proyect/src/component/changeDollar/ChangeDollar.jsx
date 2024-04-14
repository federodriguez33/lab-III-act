import PropTypes from "prop-types";
import { Form } from 'react-bootstrap';


const ChangeDollar = ({ changeDollar, setChangeDollar, showChangeDollarForm }) => {


    const handleChangeDollar = (e) => {
        setChangeDollar(e.target.value);
    };

    return (
        <div className={`${showChangeDollarForm ? 'd-block' : 'd-none'}`}>
                <Form.Label>Precio dolar</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingresar precio dolar"
                    onChange={handleChangeDollar}
                    value={changeDollar}
                />
        </div>
    )

}

ChangeDollar.propTypes = {
    changeDollar: PropTypes.number,
    setChangeDollar: PropTypes.func,
    showChangeDollarForm: PropTypes.bool
}

export default ChangeDollar;