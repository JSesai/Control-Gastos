import { useState } from 'react';
import Header from './components/header';
import Modal from './components/Modal';
import IconoNuevoGasto from './img/nuevo-gasto.svg';
function App() {
  //hooks state 
  const [presupuesto, setPresupuesto] =useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);

  const handleNuevoGasto = () =>{
    setModal(true);
    setTimeout( () =>{
      setAnimarModal(true);
    },500);
  }

  const guardarGasto = gasto =>{
    setGastos([...gastos, gasto]);
  }

  return (
    <div>
      <Header
      presupuesto ={presupuesto}
      setPresupuesto ={setPresupuesto}
      isValidPresupuesto ={isValidPresupuesto}
      setIsValidPresupuesto ={setIsValidPresupuesto}

      />
      {isValidPresupuesto && (

        <div className='nuevo-gasto'>
          <img  src={IconoNuevoGasto} 
                alt="Icono nuevo gasto"
                onClick={handleNuevoGasto}

           />
        </div>
      )}

      {modal && 
            <Modal 
                setModal = {setModal}
                animarModal={animarModal}
                setAnimarModal={setAnimarModal}
                guardarGasto = {guardarGasto}

            />}
      

    </div>
  )
}

export default App
