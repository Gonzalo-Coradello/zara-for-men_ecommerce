import './CartItem.css'

const CartItem = () => {
    return (
        <div className="cart__product">
            <div className="cart__product-img">
                <img src="" alt='' />
            </div>
            <div className="cart__product-body">
                <div>
                    <div className="cart__row">
                        <h4 className="cart__product-title"></h4>
                        <h4 className="cart__product-price"></h4>
                    </div>
                    <div className="cart__unidades">
                        <i className="cart__restar">-</i>
                        <h4 className="cantidad">1</h4>
                        <i className="cart__sumar">+</i>
                    </div>
                </div>
                <h4 className="cart__eliminar">Eliminar producto</h4>
            </div>
        </div>
    )
}

export default CartItem