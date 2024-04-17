import SendingRadio from "../sendingRadio/SendingRadio";
import { useState } from "react";

const SendingForm = () => {

    const [selectRadio, setSelectRadio] = useState();

    const handleSelectRadio = (e) => {

        setSelectRadio(e.target.id);
    }

    return(

        <div>
        <h2>Seleccione el tipo de envío</h2>
        <SendingRadio handleSelectRadio={handleSelectRadio}></SendingRadio>
        {selectRadio &&
        <p className="form-check-label text-center mx-auto">{selectRadio == "Retiro en el local" ? "No hay recargo" : "Tendrá recargo"}</p>}
        </div>

    )

}

export default SendingForm