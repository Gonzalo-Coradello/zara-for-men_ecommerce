import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ( {saludo} ) => {
    return (
        <section className='shop'>
        <div className='container'>
            <ItemList />
        </div>
    </section>
    )
}

export default ItemListContainer