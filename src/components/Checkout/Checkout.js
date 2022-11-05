import './Checkout.css'
import { Link } from "react-router-dom"


const Checkout = ({ checkoutStatus, orderId, OutOfStockList, errorMsg }) => {

    if(checkoutStatus === 'success') {
        return (
            <div className='checkout__body'>
                <h2>¡Muchas gracias!</h2>
                <p>Su orden ha sido generada exitosamente</p>
                <p>ID de la orden: {orderId}</p>
            </div>
        )
    }

    if(checkoutStatus === 'outOfStock') {
        return (
            <div className='checkout__body'>
                <h2>Los siguientes productos se encuentran fuera de stock:</h2>
                {OutOfStockList.map(prod => {
                    return (
                        <ul key={prod.id}>
                            <li>{prod.title}</li>
                        </ul>
                    )
                })}
                <Link to='/cart' className='button-secondary'>Volver al carrito</Link>
            </div>
        )
    }

    if(checkoutStatus === 'error') {
        return (
            <div className='checkout__body'>
                <h2>Ha ocurrido un error</h2>
                <p>{errorMsg.toString()}</p>
            </div>
        )
    }
}

export default Checkout