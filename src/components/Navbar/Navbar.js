import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../Logo/Logo'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)

    return (
        <nav className='nav'>
            <div className={openMenu ? 'nav__menu active' : 'nav__menu'}>
                <ul className='nav__menu-primary'>
                    <li className='nav__item'><NavLink to='/products' className={ ({isActive}) => isActive ? 'nav-button-active button-secondary' : 'button-secondary' } onClick={() => setOpenMenu(false)}>TODOS LOS PRODUCTOS</NavLink></li>
                    <li className='nav__item'><NavLink to='/category/remeras' className={ ({isActive}) => isActive ? 'nav-button-active button-secondary' : 'button-secondary' } onClick={() => setOpenMenu(false)}>REMERAS</NavLink></li>
                    <li className='nav__item'><NavLink to='/category/buzos' className={({isActive}) => isActive ? 'nav-button-active button-secondary' : 'button-secondary' } onClick={() => setOpenMenu(false)}>BUZOS Y CAMPERAS</NavLink></li>
                    <li className='nav__item'><NavLink to='/category/pantalones' className={({isActive}) => isActive ? 'nav-button-active button-secondary' : 'button-secondary' } onClick={() => setOpenMenu(false)}>PANTALONES</NavLink></li>
                    <li className='nav__item'><NavLink to='/category/accesorios' className={({isActive}) => isActive ? 'nav-button-active button-secondary' : 'button-secondary' } onClick={() => setOpenMenu(false)}>ACCESORIOS</NavLink></li>
                    <li className='nav__item'><NavLink to='/category/perfumes' className={({isActive}) => isActive ? 'nav-button-active button-secondary' : 'button-secondary' } onClick={() => setOpenMenu(false)}>PERFUMES</NavLink></li>
                </ul>
                <ul className='nav__menu-secondary'>
                    <li className='nav__item'><button className='nav__button button-secondary'>CONTACTO</button></li>
                    <li className='nav__item'><button className='nav__button button-secondary'>AYUDA</button></li>
                </ul>
                <Link to='/' onClick={() => setOpenMenu(false)}><Logo /></Link>
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
            <div className={openMenu ? 'overlay overlay-visible' : 'overlay'} onClick={() => setOpenMenu(false)}/>
        </nav>
    )
}

export default Navbar