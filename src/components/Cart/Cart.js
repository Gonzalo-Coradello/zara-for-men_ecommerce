import './Cart.css'
import { useContext, useEffect, useState } from "react"
import CartItem from '../CartItem/CartItem'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cart, clearCart, total } = useContext(CartContext)
    const [ isEmpty, setIsEmpty ] = useState(true)
    const [ totalPrice, setTotalPrice ] = useState(total)

    useEffect(() => {
        cart.length === 0 ? setIsEmpty(true) : setIsEmpty(false)
    }, [cart])

    useEffect(() => {
        setTotalPrice(total)
    }, [total])

    return (
            <>
                <h2 className="cart__title">Carrito de compras</h2>
                <div className="cart__products">
                    {isEmpty ?
                    <h2>El carrito está vacío</h2> :
                    cart.map(item => <CartItem {...item} key={item.id.concat(item.selectedColor)} cartRoute={true} />)}
                </div>
                    {isEmpty ? 
                    <Link to='/products' className='button'>Comenzá a agregar productos</Link> :
                    <>
                        <div>
                            <button onClick={clearCart} className='button'>Vaciar carrito</button>
                            <h3>Total: ${totalPrice}</h3>
                        </div>
                        <Link to='/checkout' className='button'>Finalizar compra</Link> 
                    </>}
            </>
    )
}

export default Cart