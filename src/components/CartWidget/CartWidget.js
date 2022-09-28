import cartIcon from './assets/cart.svg'
import './CartWidget.css'

const CartWidget = () => {
    return (
    <div className="cart-icon-container">
        <img className="cart-icon invert" src={cartIcon} />
        <span className='cart-counter'>2</span>
    </div>
    )
}

export default CartWidget