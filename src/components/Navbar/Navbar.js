import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1><a href="#">ZARA</a></h1>
            <ul className='nav__list'>
                <li className='nav__item'><a href='#' className='nav__link'>REMERAS</a></li>
                <li className='nav__item'><a href='#' className='nav__link'>PANTALONES</a></li>
                <li className='nav__item'><a href='#' className='nav__link'>ABRIGOS</a></li>
                <li className='nav__item'><a href='#' className='nav__link'>ACCESORIOS</a></li>
                <li className='nav__item'><a href='#' className='nav__link'>PERFUMES</a></li>
            </ul>
        </nav>
    )
}

export default Navbar