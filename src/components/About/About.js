import Footer from '../Footer/Footer'
import './About.css'

const About = () => {
    return (
        <>
            <main>
                <section className='container about'>
                    <h1>¿Quiénes somos?</h1>
                    <div className='about-text'>
                        <p>Zara es una de las principales empresas de moda internacional. Pertenece a Inditex, uno de los mayores grupos de distribución del mundo.</p>
                        <p>El cliente es el centro de nuestro particular modelo de negocio, que integra diseño, fabricación, distribución y venta, a través de una amplia red de tiendas propia.</p>
                        <p>Más información en la web corporativa del grupo Inditex: <a href='https://www.inditex.com' target='_blank' rel='noopener noreferrer'>www.inditex.com</a></p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default About