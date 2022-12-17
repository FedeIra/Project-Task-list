import React from "react";
import "../hojas-de-estilo/TareaFormulario.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; /* importamos el paquete uuid para asignar ids únicos a cada tarea que se vaya agregando */

function TareaFormulario(props) {
  const [input, setInput] = useState("");

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
  };

  return (
    <form onSubmit={manejarEnvio} className="tarea-formulario">
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe una Tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  );
}

export default TareaFormulario;
