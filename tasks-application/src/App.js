import ListaTareas from './componentes/ListaTareas.jsx';
import './App.css';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <p>ToDo List</p>
      </div>
      <div className="tareas-lista-principal">
        <h1>What's the Plan for Today?</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
