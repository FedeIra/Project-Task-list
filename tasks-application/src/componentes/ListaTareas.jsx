import React from 'react';
import TareaFormulario from './TareaFormulario';
import '../hojas-de-estilo/ListaDeTareas.css';
import { useState } from 'react';
import Tarea from './Tareas';

//  TODO import draghandle:
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { MdDragHandle } from 'react-icons/md';

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
      <DragDropContext
        onDragEnd={(...props) => {
          console.log(props);
        }}
      >
        <div className="tareas-lista-contenedor">
          <Droppable droppableId="droppable-1">
            {(provided, _) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {tareas.map((tarea, index) => (
                  <Draggable
                    key={tarea.id}
                    draggableId={'dragabble' + tarea.id}
                    index={index}
                  >
                    {(provided, _) => (
                      <div>
                        <Tarea
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          key={tarea.id}
                          id={tarea.id}
                          texto={tarea.texto}
                          completada={tarea.completada}
                          eliminarTarea={eliminarTarea}
                          completarTarea={completarTarea}
                          editarTarea={editarTarea}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </>
  ); /* Están vacías porque no necesitamos agregar una etiqueta. Esto se llama fragmentos. */
}

export default ListaDeTareas;
