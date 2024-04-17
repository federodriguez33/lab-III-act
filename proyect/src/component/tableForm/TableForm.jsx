import TableInput from "../tableInput/TableInput";
import { useState } from "react";

const TableForm = () => {

    const [input, setInput] = useState()

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    return(

        <>
        <h2>Ingrese la cantidad de patas que tendrá la mesa</h2>
        <TableInput handleInput={handleInput}></TableInput>
        {input &&
        <p>{input == 4 ? "Mesa correcta" : "Mesa inestable"}</p>}
        </>
    )
}

export default TableForm