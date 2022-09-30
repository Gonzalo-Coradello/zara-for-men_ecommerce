import './Item.css'

const Item = ({ title, price, img, colors }) => {

    return (
    <div className="product">
        <img className="product__img" src={img} alt={title} />
        <h4 className="product__title">{title}</h4>
        <div className="product__colors">
            { colors.map(color => {
            return <div className='product__color' 
                key={color.code} 
                style={{ 
                    backgroundColor: color.code, 
                    border: color.code === '#FFF' ? '1px solid #000' : null }} />
            })}
        </div>
        <h4 className="product__price">${price}</h4>
    </div>
)}

export default Item