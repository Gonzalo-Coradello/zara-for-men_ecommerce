import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../Logo/Logo'
import { useState } from 'react'


const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)

    return (
        <nav className='nav'>
            <div className={openMenu ? 'nav__menu active' : 'nav__menu'}>
                <ul className='nav__menu-primary'>
                    <li className='nav__item'><button className='nav__button button-secondary'>REMERAS</button></li>
                    <li className='nav__item'><button className='nav__button button-secondary'>BUZOS Y CAMPERAS</button></li>
                    <li className='nav__item'><button className='nav__button button-secondary'>PANTALONES</button></li>
                    <li className='nav__item'><button className='nav__button button-secondary'>ABRIGOS</button></li>
                    <li className='nav__item'><button className='nav__button button-secondary'>ACCESORIOS</button></li>
                    <li className='nav__item'><button className='nav__button button-secondary'>PERFUMES</button></li>
                </ul>
                <ul className='nav__menu-secondary'>
                    <li className='nav__item'><button className='nav__button button-secondary'>CONTACTO</button></li>
                    <li className='nav__item'><button className='nav__button button-secondary'>AYUDA</button></li>
                </ul>
                <Logo />
            </div>
            <div className='navbar'>
                <div className={openMenu ? 'hamburger active' : 'hamburger'} 
                onClick={() => setOpenMenu(!openMenu)}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
                <CartWidget />
            </div>
            <div className={openMenu ? 'overlay overlay-visible' : 'overlay'} />
        </nav>
    )
}

export default Navbar