import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import './CartItem.css'

const CartItem = ({ id, title, price, images, quantity, selectedColor, selectedSize: size, stock, cartRoute }) => {

    const { removeItem } = useContext(CartContext)
    const productImage = (images[selectedColor] || images)[0]

    return (
        <div className={ cartRoute ? "cart__product cart__product--inverted" : "cart__product" }>
            <div className="cart__product-img">
                <img src={productImage} alt={title} />
            </div>
            <div className="cart__product-body">
                <div className='cart-item-body'>
                    <div className="cart__row">
                        <h4 className="cart__product-title">{title} {size}</h4>
                        <h4 className="cart__product-price">Subtotal</h4>
                    </div>
                    <div className="cart__row">
                        { cartRoute ? <ItemCount stock={stock} initial={quantity} price={price} inCart={true} id={id} color={selectedColor} />
                                    : <div className='cart__row'>
                                        <h4>x{ quantity }</h4>
                                        <h4>${ price * quantity }</h4>
                                    </div> }
                    </div>
                </div>
                { cartRoute && <h4 className="cart__eliminar" onClick={() => removeItem(id, selectedColor)}>Eliminar producto</h4> }
            </div>
        </div>
    )
}

export default CartItem