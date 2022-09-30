import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ItemCount from './components/ItemCount/ItemCount';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <ItemListContainer saludo="¡Bienvenidos a mi e-commerce!" />
        {/* <ItemCount stock={6} initial={1} onAdd /> */}
      </main>
    </div>
  );
}

export default App;
