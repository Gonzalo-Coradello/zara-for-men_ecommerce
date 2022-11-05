import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd, price, inCart, id, color }) => {

    const { updateQuantityFromCart } = useContext(CartContext)
    const [quantity, setQuantity] = useState(initial)
    const [currentStock, setCurrentStock] = useState(stock)

    useEffect(() => {
        if(inCart) updateQuantityFromCart(id, color, quantity)
    }, [quantity]) // eslint-disable-line
    

    const sumar = () => {
        if(quantity < currentStock) setQuantity(prev  => prev + 1)
    }

    const restar = () => {
        if(quantity > 1) setQuantity(prev => prev - 1)
    }

    const validateStock = () => {
        if(currentStock > 0 && currentStock - quantity >= 0) {
            setCurrentStock(currentStock - quantity)
            onAdd(quantity)
        }
      }

    return (
        <div className={ inCart ? 'item-count item-count-row' : 'item-count'}>
            <div className={ inCart ? 'row cart-counter-row' : 'row counter-row'}>
                <button onClick={restar} className='counter-button button-secondary'>-</button>
                <h4>{quantity}</h4>
                <button onClick={sumar} className='counter-button button-secondary'>+</button>
            </div>
            <h4 className={inCart ? 'cart__price' : 'detail__price'}>{!inCart && 'Total:'} ${price * quantity}</h4>
            {!inCart && <button onClick={() => validateStock(quantity)} className='button detail__button'>Agregar al carrito</button>}
        </div>
    )
}

export default ItemCount