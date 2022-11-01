import './Cart.css'
import { useContext } from "react"
import CartItem from '../CartItem/CartItem'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cart, addItem, removeItem } = useContext(CartContext)

    return (
            <>
                <h2 className="cart__title">Carrito de compras</h2>
                <div className="cart__products">
                    {cart.map(item => <CartItem {...item} addItem={addItem} removeItem={removeItem} key={item.id.concat(item.selectedColor)} cartRoute={true} />)}
                </div>
                <Link to='/checkout' className='button'>Finalizar compra</Link>
            </>
    )
}

export default Cart