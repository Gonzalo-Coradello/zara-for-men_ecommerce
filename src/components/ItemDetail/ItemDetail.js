import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({ title, img, colors, price, description, category }) => {
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
                        <button className="size-button">S</button>
                        <button className="size-button">M</button>
                        <button className="size-button selected">L</button>
                        <button className="size-button">XL</button>
                    </div>
                </div>
                <div className="detail__counter">
                    <h4>Cantidad:</h4>
                    <ItemCount stock={6} initial={1} price={price} onAdd />
                </div>
                {/* <button className="detail__button">Agregar al carrito</button> */}
            </div>
        </div>
        </>
    )
}

export default ItemDetail