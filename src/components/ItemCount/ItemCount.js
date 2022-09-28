import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial)
    const [currentStock, setCurrentStock] = useState(stock)

    const sumar = () => {
        if(count < currentStock) {
            setCount(count + 1)
        }
    }

    const restar = () => {
        if(count > 1) setCount(count - 1)
    }

    onAdd = () => {
        if(currentStock > 0 && currentStock - count >= 0) {
            setCurrentStock(currentStock - count)
            console.log(`${count} añadido al carrito.`)
        }
      }

    return (
        <div className='item-count'>
            <div className='row counter-row'>
                <button onClick={restar} className='counter-button button-secondary'>-</button>
                <h4>{count}</h4>
                <button onClick={sumar} className='counter-button button-secondary'>+</button>
            </div>
            <button onClick={onAdd} className='detail__button'>Agregar al carrito</button>
            <h4>Stock disponible: {currentStock}</h4>
        </div>
    )
}

export default ItemCount