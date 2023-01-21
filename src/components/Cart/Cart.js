import './Cart.css'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Cart = ({ cart, clearCart, totalPrice, isEmpty }) => {

    if(isEmpty) return (
        <section className='cart-section'>
            <h2 className="cart__title">Carrito de compras</h2>
            <div className='cart__empty'>
                <h2>El carrito está vacío</h2>
                <Link to='/products' className='button'>Comenzá a agregar productos</Link>
            </div>
        </section>
    )

    return (
        <>
            <main>
                <section className='cart-section'>
                    <div className='cart-container'>
                        <h2 className="cart__title">Carrito de compras</h2>
                        <div className="cart__products">
                            { cart.map(item => <CartItem {...item} key={item.id.concat(item.selectedColor)} cartRoute={true} />)}
                        </div>
                        <div className='cart__footer'>
                            <div className='cart__row'>
                                <button onClick={clearCart} className='button-secondary clear-cart'>Vaciar carrito</button>
                                <h3 className='cart__price'>Total: ${totalPrice}</h3>
                            </div>
                        </div>
                    </div>
                    <Link to='/checkout' className='button cart__button'>Finalizar compra</Link>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Cart