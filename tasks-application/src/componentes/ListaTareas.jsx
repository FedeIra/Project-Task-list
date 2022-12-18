import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tareas';
import '../hojas-de-estilo/ListaDeTareas.css';

// TODO:
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function ListaDeTareas(props) {
  const [tareas, setTareas] = useState([]);

  /* use state for drag and drop: */
  const [tareas_lista, setLista] = useState([tareas]);

  // Add Task:
  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  // Edit Task:
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

  // Complete Task:
  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  // Remove Task:
  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  // Move Task:
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(tareas);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTareas(items);
  };

  // Render Component:
  return (
    <div>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="tareas_lista">
            {(provided) => (
              <ul
                className="tareas_lista"
                style={{ listStyleType: 'none' }}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {tareas.map((tarea, index) => (
                  <Draggable
                    key={tarea.id}
                    draggableId={tarea.id}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Tarea
                          id={tarea.id}
                          texto={tarea.texto}
                          completada={tarea.completada}
                          eliminarTarea={eliminarTarea}
                          completarTarea={completarTarea}
                          editarTarea={editarTarea}
                        />
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default ListaDeTareas;
