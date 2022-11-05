import { useContext, useEffect, useState } from "react"
import Cart from '../Cart/Cart'
import { CartContext } from '../../context/CartContext'

const CartContainer = () => {

    const { cart, clearCart, total } = useContext(CartContext)
    const [ isEmpty, setIsEmpty ] = useState(true)
    const [ totalPrice, setTotalPrice ] = useState(total)

    useEffect(() => {
        document.title = 'CARRITO DE COMPRAS | ZARA'
    })

    useEffect(() => {
        cart.length === 0 ? setIsEmpty(true) : setIsEmpty(false)
    }, [cart])

    useEffect(() => {
        setTotalPrice(total)
    }, [total])

    return (
        <div className='cart-container'>
            <Cart cart={cart} clearCart={clearCart} totalPrice={totalPrice} isEmpty={isEmpty} />
        </div>
    )
}

export default CartContainer