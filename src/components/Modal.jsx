import { useState } from 'react';
import Mensaje from './Mensaje';
import CerrarBtn from '../img/cerrar.svg';
function Modal({setModal, animarModal, setAnimarModal, guardarGasto}) {

    //estates del formulario    
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState ('');
    const [categoria, setCategoria] = useState('');
    const [mensaje, setMensaje] = useState('');


    //funcion que oculta modal y regresa la animacion a false
    const ocultarModal = () =>{
        console.log('cerramdo modal');
        setTimeout(() => {
            setModal(false);
        }, 500);
        setAnimarModal(false);

    }

    const handleSubmit = e=>{
        e.preventDefault();
        console.log('enviando formulario');

        if([nombre, cantidad, categoria].includes('')){
            setMensaje('Todos los campos son obligatorios')
            setTimeout(() => {
                setMensaje('');
            }, 1000);
            return
        }
        guardarGasto({nombre, cantidad, categoria});
    }
  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img src={CerrarBtn} alt="Cerrar Modal" 
            onClick={ocultarModal}
            />    
        </div>
        <form 
            className= {`formulario ${animarModal ? 'animar' : 'cerrar'}`} 
            onSubmit={handleSubmit}
            >
            <legend>Nuevo Gasto</legend>
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            <div className="campo">
                <label htmlFor="nombre">Nombre Gastos</label>
                <input 
                    type="text" 
                    placeholder='Añade nombre del gasto' id="nombre" 
                    value={nombre} 
                    onChange={ e =>{ setNombre(e.target.value)}} 
                />
            </div>

            <div className="campo">
                <label htmlFor="cantidad">Cantidad</label>
                <input 
                    id="cantidad" 
                    type="number" 
                    placeholder='Añade la cantidad del gasto ej:300' 
                    value={cantidad}
                    onChange={ e=> setCantidad(Number(e.target.value)) }
                    
                />
            </div>

            <div className="campo">
               <label htmlFor="categoria">Categoria</label>
               <select 
                name="" id="categoria"
                value={categoria}
                onChange={ e => setCategoria(e.target.value)}
               
               >
                
                <option value="">-- Seleccione --</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="casa">casa</option>
                <option value="gastos">Gastos Varios</option>
                <option value="ocio">Ocio</option>
                <option value="salud">Salud</option>
                <option value="suscripciones">Suscripciones</option>
               </select>
            </div>

            <input type="submit" value='Añadir Gastos' />

        </form>      
    </div>
  )
}

export default Modal
