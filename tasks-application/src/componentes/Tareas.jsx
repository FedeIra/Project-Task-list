import React, { useState } from 'react';
import '../hojas-de-estilo/Tareas.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { TiEdit, TiTick } from 'react-icons/ti';
import TareaFormulario from './TareaFormulario';

//  TODO import draghandle:
import { MdDragHandle } from 'react-icons/md';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function Tarea({
  id,
  texto,
  completada,
  completarTarea,
  eliminarTarea,
  editarTarea,
}) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitUpdate = (value) => {
    editarTarea(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <TareaFormulario edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <div
      className={
        completada ? 'tarea-contenedor completada' : 'tarea-contenedor'
      }
    >
      <div
        className="tarea-contenedor-iconos"
        onClick={() => completarTarea(id)}
      >
        <TiTick className="tarea-icono-done" />
      </div>
      <div className="tarea-texto">{texto}</div>
      <div
        className="tarea-contenedor-iconos"
        onClick={() => eliminarTarea(id)}
      >
        <AiOutlineCloseCircle className="tarea-icono" />
      </div>
      <div
        className="tarea-contenedor-iconos"
        onClick={() => setEdit({ id: id, value: texto })}
      >
        <TiEdit className="tarea-icono-edit" />
      </div>
    </div>
  );
}

export default Tarea;
