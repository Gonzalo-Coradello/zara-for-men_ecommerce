import './ItemList.css'
import Item from '../Item/Item'
import { useNavigate, useParams } from 'react-router-dom'

const ItemList = ({ products }) => {

    const navigate = useNavigate()
    const { categoryId } = useParams()

    return (
        <>
            <h2 className='shop__title'>{categoryId === 'buzos' ? 'buzos y camperas' : categoryId || 'Nuestros productos'}</h2>
            <div className='products'>
                { products.map((prod => <div onClick={() => navigate(`/detail/${prod.id}`)} key={prod.id}><Item {...prod} /></div>) )}
            </div>
        </>
    )}
    

export default ItemList