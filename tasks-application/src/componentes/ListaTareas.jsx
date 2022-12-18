import React from 'react';
import TareaFormulario from './TareaFormulario';
import '../hojas-de-estilo/ListaDeTareas.css';
import { useState } from 'react';
import Tarea from './Tareas';

function ListaDeTareas(props) {
  const [tareas, setTareas] = useState(
    []
  ); /* le pasamos un arreglo vacío pq le queremos asignar un array vacío como inicio. Vamos a tener un arreglo de objetos. Se toma cada elemento por medio de map y luego se agrega el componente Tarea*/

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      /* probamos que la cadena no esté vacía. */
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
      /* clear input: */
      /* le pasamos una copia del arreglo de tareas y le agregamos la nueva tarea */
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  const editarTarea = (id, nuevoTexto) => {
    if (nuevoTexto.texto.trim()) {
      const tareasActualizadas = tareas.map((tarea) => {
        if (tarea.id === id) {
          tarea.texto = nuevoTexto.texto;
        }
        return tarea;
      });
      setTareas(tareasActualizadas);
    }
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
            editarTarea={editarTarea}
          />
        ))}
        {/* El key es para identificar el elemento en la lista. Por eso le asignamos el id que es único. El id luego se incluye para poder usarlo. */}
      </div>
    </>
  ); /* Están vacías porque no necesitamos agregar una etiqueta. Esto se llama fragmentos. */
}

export default ListaDeTareas;
