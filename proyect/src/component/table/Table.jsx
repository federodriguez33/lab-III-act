import PropTypes from "prop-types";
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Tables = ({ netIncomes }) => {

    let promedio = netIncomes.reduce((total, netIncome) => total + netIncome.income, 0) / netIncomes.length;

    return (

        <>

            <h1 className="h1 d-flex mb-4">Tabla de empresas con sus respectivos ingresos netos</h1>

            <Table striped bordered hover style={{ width: '75%', margin: "auto", marginBottom: "30px"}}>
                <tbody>
                    <tr>
                        <th>Empresa</th>
                        <th>Ingreso neto</th>
                    </tr>
                    {netIncomes.map((netIncome, i) => (
                        <tr key={i}>
                            <td>{netIncome.brand}</td>
                            <td>{netIncome.income}</td>
                        </tr>
                    ))}
                </tbody>
            </Table >

            <p>Promedio total: {promedio.toFixed(2)}</p>

        </>

    )
}

Tables.propTypes = {
    netIncomes: PropTypes.array
}

export default Tables