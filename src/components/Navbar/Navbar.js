import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1><a href="#">ZARA</a></h1>
            <ul className='nav__list'>
                <li className='nav__item'><button className='nav__button'>REMERAS</button></li>
                <li className='nav__item'><button className='nav__button'>BUZOS Y CAMPERAS</button></li>
                <li className='nav__item'><button className='nav__button'>PANTALONES</button></li>
                <li className='nav__item'><button className='nav__button'>ABRIGOS</button></li>
                <li className='nav__item'><button className='nav__button'>ACCESORIOS</button></li>
                <li className='nav__item'><button className='nav__button'>PERFUMES</button></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default Navbar