import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import LandingPage from './components/LandingPage/LandingPage'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer/CartContainer';
import CheckoutContainer from './components/CheckoutContainer/CheckoutContainer';
import About from './components/About/About'
import "./fonts/NewYork.ttf";

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Navbar />
          </header>
          <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route path='/products/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={ <ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartContainer />} />
            <Route path='/checkout' element={<CheckoutContainer />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={ <h2>404 NOT FOUND</h2> } />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
