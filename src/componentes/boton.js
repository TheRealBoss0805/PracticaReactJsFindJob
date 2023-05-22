import React from "react";
import '../estilos-componentes/boton.css'

function Boton({ texto, isButonClick, manejarClic }) {
    return (
        <button
            className={isButonClick ? 'boton-clic' : 'boton-reiniciar'}
            onClick={manejarClic}>
            {texto}
        </button>
    )
}
export default Boton;