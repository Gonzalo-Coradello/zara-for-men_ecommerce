import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemDetailGallery from '../ItemDetailGallery/ItemDetailGallery'

const ItemDetail = ({ id, title, images, colors, price, description, category, defaultColor, stock }) => {

    const [isAddedToCart, setIsAddedToCart] = useState(false)

    const [selectedColor, setSelectedColor] = useState(defaultColor)

    const {addItem} = useContext(CartContext)

    const navigate = useNavigate()

    const handleOnAdd = (quantity) => {
        const productToAdd = {id, title, images, price, quantity, selectedColor, stock}
        addItem(productToAdd)
        setIsAddedToCart(true)
    }

    return (
        <>
        <button className='button-secondary detail__link' onClick={() => navigate(-1)}>Volver</button>
        <div className="item-detail">
            <ItemDetailGallery id={id} images={images} title={title} colors={colors} selectedColor={selectedColor} />
            <div className="item-detail-info">
                <h2 className="detail__title">{title}</h2>
                <div className="color-selection">
                    <div className="detail__colors product__colors">
                        { colors.map(color => {
                            return <div className={color.color === selectedColor ? 'detail__color product__color selected' : 'detail__color product__color'}
                                key={color.code} 
                                style={{ 
                                    backgroundColor: color.code, 
                                    border: color.code === '#FFF' ? '1px solid #000' : null }}
                                onClick={() => {
                                    setSelectedColor(color.color)
                                    setIsAddedToCart(false)}
                                } />
                        })}
                    </div>
                    <h4 className="detail__color-name">{selectedColor}</h4>
                </div>
                <p>{description}</p>
                {category !== 'perfumes' && category !== 'accesorios' ? <div className="detail__size">
                    <h4>Talle: </h4>
                    <div className="row">
                        <button className="button size-button">S</button>
                        <button className="button size-button">M</button>
                        <button className="button size-button selected">L</button>
                        <button className="button size-button">XL</button>
                    </div>
                </div> :
                null}
                <div className="detail__counter">
                    { !isAddedToCart ?
                    <>
                        <h4>Cantidad:</h4> 
                       {stock !== 0 ? <ItemCount stock={stock} initial={1} price={price} onAdd={handleOnAdd} inCart={false} />
                       : <h4>No hay stock</h4>} 
                    </> :
                    <div className='detail__buttons'>
                        <h4>¡Producto agregado al carrito!</h4>
                        <Link to='/cart' className='button'>Ver carrito</Link>
                        <Link to='/products' className='button'>Seguir comprando</Link>
                    </div> }
                </div>
            </div>
        </div>
        </>
    )
}

export default ItemDetail