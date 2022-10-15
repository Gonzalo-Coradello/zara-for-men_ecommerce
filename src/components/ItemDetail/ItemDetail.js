import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ id, title, img, colors, price, description, category }) => {

    const [isAddedToCart, setIsAddedToCart] = useState(false)
    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        const productToAdd = {id, title, img, price, quantity}
        addItem(productToAdd)
        setIsAddedToCart(true)
    }

    return (
        <>
        <div className='detail__links'>
            <Link to={`/category/${category}`}>{'>'} Volver a {category}</Link>
            <Link to='/products'>{'>'} Ver todos los productos</Link>
        </div>
        <div className="item-detail">
            <div className="item-detail-gallery">
                <img className="detail__img" src={img} alt={title} />
            </div>
            <div className="item-detail-info">
                <h2 className="detail__title">{title}</h2>
                <div className="color-selection">
                    <div className="detail__colors product__colors">
                        { colors.map(color => {
                            return <div className='detail__color product__color' 
                                key={color.code} 
                                style={{ 
                                    backgroundColor: color.code, 
                                    border: color.code === '#FFF' ? '1px solid #000' : null }} />
                        })}
                    </div>
                    {/* <h4 className="detail__color-name">Chocolate</h4> */}
                </div>
                <p>{description}</p>
                <div className="detail__size">
                    <h4>Talle: </h4>
                    <div className="row">
                        <button className="button size-button">S</button>
                        <button className="button size-button">M</button>
                        <button className="button size-button selected">L</button>
                        <button className="button size-button">XL</button>
                    </div>
                </div>
                <div className="detail__counter">
                    { !isAddedToCart ? 
                    <ItemCount stock={6} initial={1} price={price} onAdd={handleOnAdd} /> : 
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