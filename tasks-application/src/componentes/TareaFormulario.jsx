import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../hojas-de-estilo/TareaFormulario.css';

function TareaFormulario(props) {
  // Use State for Add ToDo:
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };
    props.onSubmit(tareaNueva);
    setInput('');
  };

  // Render Component:
  return (
    // Component for Edit/Update:
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
        // Component for Add ToDo:
        <>
          <input
            className="tarea-input"
            type="text"
            autocomplete="off"
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
