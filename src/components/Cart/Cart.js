import './Cart.css'
import { useContext } from "react"
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    return (
        <div className="cart cart-open">
            <>
                <h2 className="cart__title"></h2>
                <div className="cart__products">
                    <CartItem />
                </div>
            </>
        </div>
    )
}

export default Cart