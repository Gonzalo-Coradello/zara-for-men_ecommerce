import ItemCount from '../ItemCount/ItemCount'
import './CartItem.css'

const CartItem = ({ id, title, price, images, quantity, selectedColor, stock, removeItem }) => {

    const productImage = (images[selectedColor] || images)[0]

    return (
        <div className="cart__product">
            <div className="cart__product-img">
                <img src={productImage} alt={title} />
            </div>
            <div className="cart__product-body">
                <div>
                    <div className="cart__row">
                        <h4 className="cart__product-title">{title}</h4>
                        <h4 className="cart__product-price">${price * quantity}</h4>
                    </div>
                    <div className="cart__unidades">
                        <ItemCount stock={stock} initial={quantity} price={price} inCart={true} /> 

                        {/* <i className="cart__restar">-</i>
                        <h4 className="cantidad">{quantity}</h4>
                        <i className="cart__sumar">+</i> */}
                    </div>
                </div>
                <h4 className="cart__eliminar" onClick={() => removeItem(id, selectedColor)}>Eliminar producto</h4>
            </div>
        </div>
    )
}

export default CartItem