import ListaTareas from './componentes/ListaTareas.jsx';
import './App.css';
import Footer from './componentes/Footer.jsx';

function App() {
  return (
    <div className="App">
      <div className="aplicacion-tareas">
        <div className="freecodecamp-logo-contenedor">
          <p>ToDo List</p>
        </div>
        <div className="tareas-lista-principal">
          <h1>What's the Plan for Today?</h1>
          <ListaTareas />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
