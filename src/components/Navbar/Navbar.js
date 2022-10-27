import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../Logo/Logo'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import CartModal from '../CartModal/CartModal'
import { getDocs, collection, query, orderBy } from 'firebase/firestore'
import { db } from '../../services/firebase'


const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const [openCart, setOpenCart] = useState(false)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const collectionRef = query(collection(db, 'categories'), orderBy('order'))

        getDocs(collectionRef).then(res => {
            const categoriesAdapted = res.docs.map(doc => {
                const data = doc.data()
                const id = doc.id

                return { id, ...data }
            })
            setCategories(categoriesAdapted)
        })
    }, [])

    return (
        <nav className='nav'>
            <div className={openMenu ? 'nav__menu active' : 'nav__menu'}>
                <ul className='nav__menu-primary'>
                    <li className='nav__item'><NavLink to='/products' className={ ({isActive}) => isActive ? 'nav-button-active button-secondary' : 'button-secondary' } onClick={() => setOpenMenu(false)}>TODOS LOS PRODUCTOS</NavLink></li>
                    { categories.map(cat => (
                        <li key={cat.id} className='nav__item'><NavLink to={`/category/${cat.slug}`} className={({isActive}) => isActive ? 'nav-button-active button-secondary' : 'button-secondary' } onClick={() => setOpenMenu(false)}>{cat.label}</NavLink></li>
                    ))}
                    {/* <li className='nav__item'><NavLink to='/category/remeras' className={ ({isActive}) => isActive ? 'nav-button-active button-secondary' : 'button-secondary' } onClick={() => setOpenMenu(false)}>REMERAS</NavLink></li>
                    <li className='nav__item'><NavLink to='/category/buzos' className={({isActive}) => isActive ? 'nav-button-active button-secondary' : 'button-secondary' } onClick={() => setOpenMenu(false)}>BUZOS Y CAMPERAS</NavLink></li>
                    <li className='nav__item'><NavLink to='/category/pantalones' className={({isActive}) => isActive ? 'nav-button-active button-secondary' : 'button-secondary' } onClick={() => setOpenMenu(false)}>PANTALONES</NavLink></li>
                    <li className='nav__item'><NavLink to='/category/accesorios' className={({isActive}) => isActive ? 'nav-button-active button-secondary' : 'button-secondary' } onClick={() => setOpenMenu(false)}>ACCESORIOS</NavLink></li>
                    <li className='nav__item'><NavLink to='/category/perfumes' className={({isActive}) => isActive ? 'nav-button-active button-secondary' : 'button-secondary' } onClick={() => setOpenMenu(false)}>PERFUMES</NavLink></li> */}
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