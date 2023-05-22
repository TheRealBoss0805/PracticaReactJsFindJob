import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import freeCodeCampLogo from './imagenes/freeCodeCampLogo.png'
import { useState } from 'react';


function App() {
  /*================USO DEL HOOK==============================*/
  const [numClics, setNumClics] = useState(0);
  /*==========================================================*/
  const manejarClic = () => {
    console.log("Clic");
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    console.log("Reiniciar");
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='Logo de freecodecamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador
          numClics={numClics}
        />
        <Boton
          texto='Clic'
          isButonClick={true}
          manejarClic={manejarClic}
        />
        <Boton
          texto='Reiniciar'
          isButonClick={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
