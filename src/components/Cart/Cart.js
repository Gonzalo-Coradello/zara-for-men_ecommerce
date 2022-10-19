import './Cart.css'
import { useContext } from "react"
import CartItem from '../CartItem/CartItem'
import { CartContext } from '../../context/CartContext'

const Cart = () => {

    const { cart, addItem, removeItem } = useContext(CartContext)

    return (
        <div className="cart cart-open">
            <>
                <h2 className="cart__title"></h2>
                <div className="cart__products">
                    {cart.map(item => <CartItem {...item} addItem={addItem} removeItem={removeItem} key={item.id} />)}
                </div>
            </>
        </div>
    )
}

export default Cart