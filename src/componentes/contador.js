import React from 'react';
import '../estilos-componentes/contador.css'

function Contador ({ numClics }) {
    return (
        <div className='contador'>
            {numClics}
        </div>
    )
}

export default Contador;