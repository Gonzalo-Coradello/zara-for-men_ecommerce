import cartIcon from './assets/cart.svg'
import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
    <div className="cart-icon-container">
        <img className="cart-icon invert" src={cartIcon} alt='Carrito de compras' />
        <span className='cart-counter invert'>{ totalQuantity }</span>
    </div>
    )
}

export default CartWidget