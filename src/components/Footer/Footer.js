import './Footer.css'
import Logo from "../Logo/Logo"
import { Link } from 'react-router-dom'
import { MdWebAsset } from 'react-icons/md'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="footer container">
            <Logo />
            <div className='footer__headers'>
                <div>
                    <h4>Empresa</h4>
                </div>
                <div>
                    <h4>Síguenos</h4>
                </div>
                <div>
                    <h4>Sobre este proyecto</h4>
                </div>
            </div>
            <div className='footer__content'>
                <div className='footer__zara'>
                    <Link to='/'>Inicio</Link>
                    <Link to='/products'>Nuestros productos</Link>
                    <Link to='/about'>Quiénes somos</Link>
                </div>
                <div className="footer__zara-media">
                    <div className="footer__media">
                        <a href="https://www.tiktok.com/@zara">Tiktok</a>
                        <a href="https://www.instagram.com/zara/">Instagram</a>
                        <a href="https://www.facebook.com/Zara">Facebook</a>
                        <a href="https://twitter.com/ZARA">Twitter</a>
                        <a href="https://es.pinterest.com/zaraofficial">Pinterest</a>
                        <a href="http://www.youtube.com/user/zara">Youtube</a>
                    </div>
                </div>
                <div className='footer__team'>
                    <div className='team-member'>
                        <h4>Diseñadora: Talia Laborde</h4>
                        {/* <div className='footer__icons'>
                            <a href="https://www.linkedin.com/in/talia-laborde/"><FaLinkedinIn size={25}/></a>
                        </div> */}
                    </div>
                    <div className='team-member'>
                        <h4>Desarrollador: Gonzalo Coradello</h4>
                        <div className="footer__icons">
                            <a href="https://gonzalodev.vercel.app/" className='footer__icon'><MdWebAsset size={20}/></a>
                            <a href="https://www.linkedin.com/in/gonzalo-coradello/" className='footer__icon'><FaLinkedinIn size={20}/></a>
                            <a href="https://github.com/Gonzalo-Coradello" className='footer__icon'><FaGithub size={20}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer