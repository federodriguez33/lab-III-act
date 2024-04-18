import PropTypes from "prop-types";
import { Table } from 'react-bootstrap';

const Tables = ({ netIncomes }) => {

    let totalSum = netIncomes.reduce((total, netIncome) => total + netIncome.income, 0);

    return (

        <>
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        {netIncomes.map((netIncome, i) => (
                            <td key={i}>
                                <td>{netIncome.brand}</td>
                                <td>{netIncome.income}</td>
                            </td>
                        ))}
                    </tr>
                </tbody>
            </Table>




            <p>Promedio total: {totalSum / netIncomes.length}</p>

        </>

    )
}

Tables.propTypes = {
    netIncomes: PropTypes.array
}

export default Tables