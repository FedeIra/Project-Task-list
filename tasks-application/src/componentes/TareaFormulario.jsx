import React from 'react';
import '../hojas-de-estilo/TareaFormulario.css';
import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid'; /* importamos el paquete uuid para asignar ids únicos a cada tarea que se vaya agregando */

function TareaFormulario(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault(); /* permite que no se vuelva a cargar toda la aplicación cuando enviamos el formulario */
    const tareaNueva = {
      id: uuidv4() /* Usamos el uuid*/,
      texto: input,
      completada: false,
    };
    props.onSubmit(
      tareaNueva
    ); /* onSubmit porque es un estandar de lo que ocurre cuando se envía el formulario */
    setInput('');
  };

  return (
    <form onSubmit={manejarEnvio} className="tarea-formulario">
      {props.edit ? (
        <div className="input-contenedor-edit">
          <input
            className="tarea-input-edit"
            type="text"
            placeholder="Update your task"
            value={input}
            name="texto"
            onChange={manejarCambio}
            ref={inputRef}
          />
          <button className="tarea-boton-edit">Update</button>
        </div>
      ) : (
        <>
          <input
            className="tarea-input"
            type="text"
            placeholder="Insert new task"
            name="texto"
            value={input}
            onChange={manejarCambio}
            ref={inputRef}
          />
          <button className="tarea-boton">Add ToDo</button>
        </>
      )}
    </form>
  );
}

export default TareaFormulario;
