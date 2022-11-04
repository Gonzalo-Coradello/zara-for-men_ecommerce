import './LandingPage.css'
import Logo from '../Logo/Logo'
import galleryImg1 from './assets/gallery-1.jpg'
import galleryImg2 from './assets/gallery-2.jpg'
import galleryImg3 from './assets/gallery-3.jpg'
import menuNewCollection from './assets/menu-new-collection.jpg'
import menuAccesorios from './assets/menu-accesorios.jpg'
import menuPerfumes from './assets/menu-perfumes.jpg'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const LandingPage = () => {

    const navigate = useNavigate()

    useEffect(() => {
        document.title = 'ZARA'
    })

    return (
        <section className='landing'>
            <div className='intro'>
                <div className='intro__left'>
                    <h2>NEW</h2>
                    <Logo />
                </div>
                <div className='intro__right'>
                    <h2>COLLECTION</h2>
                    <h2 className='intro__title-mobile'>NEW COLLECTION</h2>
                    <div className='intro__gallery'>
                        <img className='gallery-img1' src={galleryImg1} alt='Buzo a rayas blanco, beige y verde' />
                        <img className='gallery-img2' src={galleryImg2} alt='Polera negra y pantalón negro' />
                        <img className='gallery-img3' src={galleryImg3} alt='Remera negra y anteojos de sol' />
                    </div>
                </div>
            </div>
            <div className='menu'>
                <div className='menu__grid'>
                    <Logo />
                    <div onClick={() => navigate('/products')} className='menu__item menu__item-1'>
                        <h2 className='menu__title'>NEW COLLECTION</h2>
                        <img className='menu__img' src={menuNewCollection} alt='Nueva colección' />
                    </div>
                    <div onClick={() => navigate('/category/accesorios')} className='menu__item menu__item-2'>
                        <h2 className='menu__title'>ACCESORIOS</h2>
                        <img className='menu__img' src={menuAccesorios} alt='Accesorios' />
                    </div>
                    <div onClick={() => navigate('/category/perfumes')} className='menu__item menu__item-3'>
                        <h2 className='menu__title'>PERFUMES</h2>
                        <img className='menu__img' src={menuPerfumes} alt='Perfumes' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingPage