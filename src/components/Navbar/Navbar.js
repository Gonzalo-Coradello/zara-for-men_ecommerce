import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../Logo/Logo'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import CartModal from '../CartModal/CartModal'
import { getCategories } from '../../services/firebase/firestore/categories'

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const [openCart, setOpenCart] = useState(false)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
            .then(cat => setCategories(cat))
    }, [])

    return (
        <nav className='nav'>
            <div className={openMenu ? 'nav__menu active' : 'nav__menu'}>
                <ul className='nav__menu-primary'>
                    <li className='nav__item'><NavLink to='/products' className={ ({isActive}) => isActive ? 'nav-button-active button-secondary' : 'button-secondary' } onClick={() => setOpenMenu(false)}>TODOS LOS PRODUCTOS</NavLink></li>
                    { categories.map(cat => (
                        <li key={cat.id} className='nav__item'><NavLink to={`/category/${cat.slug}`} className={({isActive}) => isActive ? 'nav-button-active button-secondary' : 'button-secondary' } onClick={() => setOpenMenu(false)}>{cat.label}</NavLink></li>
                    ))}
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
                <div className='cart-widget-container' onClick={() => setOpenCart(!openCart)}>
                    <CartWidget />
                </div>
                <div className={openCart ? 'cart cart-open' : 'cart'}>
                    <CartModal setOpenCart={setOpenCart}/>
                </div>
            </div>
            <div className={openMenu || openCart ? 'overlay overlay-visible' : 'overlay'} 
                onClick={() => {
                    setOpenMenu(false)
                    setOpenCart(false)
                }}/>
        </nav>
    )
}

export default Navbar