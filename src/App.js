import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import LandingPage from './components/LandingPage/LandingPage'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/products/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={ <ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='*' element={ <h2>404 NOT FOUND</h2> } />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
