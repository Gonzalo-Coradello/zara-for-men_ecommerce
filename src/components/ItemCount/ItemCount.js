import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd, price, inCart }) => {

    const [quantity, setQuantity] = useState(initial)
    const [currentStock, setCurrentStock] = useState(stock)

    const sumar = () => {
        if(quantity < currentStock) {
            setQuantity(prev  => prev + 1)
        }
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
        <div className='item-count'>
            <div className={ inCart ? 'row cart-counter-row' : 'row counter-row'}>
                <button onClick={restar} className='counter-button button-secondary'>-</button>
                <h4>{quantity}</h4>
                <button onClick={sumar} className='counter-button button-secondary'>+</button>
            </div>
            <h4 className="detail__price">{!inCart && 'Total:'} ${price * quantity}</h4>
            {!inCart && <button onClick={() => validateStock(quantity)} className='button detail__button'>Agregar al carrito</button>}
        </div>
    )
}

export default ItemCount