import CartItem from '../CartItem/CartItem'
import './OrderSummary.css'

const OrderSummary = ({cart, total}) => {
    return (
        <div className='order-summary'>
            <h2>Resumen de la compra</h2>
            <div className="cart__products order__products">
                { cart.map(item => <CartItem {...item} key={item.id.concat(item.selectedColor)} />)}
            </div>
            <h3 className='cart__price order__price'>Total: {total}</h3>
        </div>
    )
}

export default OrderSummary